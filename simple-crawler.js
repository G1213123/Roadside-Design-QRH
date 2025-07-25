#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

class HYDCrawler {
    constructor() {
        this.baseUrl = 'https://www.hyd.gov.hk/en/technical_references/standard_drawings/hyd_standard_drawings/';
        this.sections = [
            { id: 1, name: 'Roads', url: 'section1.html' },
            { id: 2, name: 'Street Furniture', url: 'section2.html' },
            { id: 3, name: 'Drainage', url: 'section3.html' },
            { id: 4, name: 'Maintenance of Existing Installations Only', url: 'section4.html' },
            { id: 5, name: 'Landscape Hard Works', url: 'section5.html' },
            { id: 6, name: 'Traffic Management', url: 'section6.html' }
        ];
        this.allDrawings = [];
        this.downloadQueue = [];
        this.downloadStats = {
            total: 0,
            downloaded: 0,
            failed: 0,
            skipped: 0
        };
    }

    fetchPage(url) {
        return new Promise((resolve, reject) => {
            console.log(`   🌐 Fetching: ${url}`);
            https.get(url, (response) => {
                let data = '';
                response.on('data', (chunk) => {
                    data += chunk;
                });
                response.on('end', () => {
                    console.log(`   ✓ Received ${data.length} bytes`);
                    resolve(data);
                });
            }).on('error', (error) => {
                console.error(`   ❌ Error fetching ${url}:`, error.message);
                reject(error);
            });
        });
    }

    parseDrawings(html, section) {
        const drawings = [];
        
        console.log(`   🔍 Parsing Section ${section.id}: ${section.name}`);
        
        // Extract all PDF links first
        const pdfLinks = {};
        const pdfMatches = html.match(/<a[^>]*href=[\"']([^\"']*\.pdf)[\"'][^>]*>([^<]+)<\/a>/gi);
        
        if (pdfMatches) {
            console.log(`   📎 Found ${pdfMatches.length} PDF links`);
            pdfMatches.forEach(match => {
                const hrefMatch = match.match(/href=[\"']([^\"']*\.pdf)[\"']/);
                const textMatch = match.match(/>([^<]+)</);
                if (hrefMatch && textMatch) {
                    const url = hrefMatch[1];
                    const text = textMatch[1].trim();
                    // Extract drawing code from URL or text
                    const codeFromUrl = url.match(/([hH]\d{4}[a-zA-Z0-9]*)/i);
                    const codeFromText = text.match(/([hH]\d{4}[a-zA-Z0-9]*)/i);
                    const code = (codeFromUrl || codeFromText || ['', ''])[1].toUpperCase();
                    if (code) {
                        pdfLinks[code] = {
                            url: url,
                            text: text
                        };
                    }
                }
            });
        }
        
        // Extract all table rows for drawing information
        const tableRowRegex = /<tr[^>]*>(.*?)<\/tr>/gis;
        const rows = html.match(tableRowRegex) || [];
        
        console.log(`   📋 Found ${rows.length} table rows`);
        
        for (let row of rows) {
            // Look for drawing code pattern: H + 4 digits + optional letter/number
            const codeMatch = row.match(/([H]\d{4}[A-Z0-9]*)/);
            
            if (codeMatch) {
                const code = codeMatch[1];
                
                // Extract description - look for anchor tag content or text between td tags
                let description = '';
                
                // Try to find description in anchor tag
                const anchorMatch = row.match(/<a[^>]*>([^<]+)<\/a>/);
                if (anchorMatch) {
                    description = anchorMatch[1].trim();
                } else {
                    // Try to find description in table cells
                    const cellsMatch = row.match(/<td[^>]*>([^<]*(?:<[^>]*>[^<]*)*)<\/td>/g);
                    if (cellsMatch && cellsMatch.length >= 2) {
                        // Get the second cell content (usually description)
                        const secondCell = cellsMatch[1];
                        const cellContent = secondCell.replace(/<[^>]*>/g, '').trim();
                        if (cellContent && cellContent.length > 5) {
                            description = cellContent;
                        }
                    }
                }
                
                // Clean up description
                description = description.replace(/&nbsp;/g, ' ')
                                      .replace(/&amp;/g, '&')
                                      .replace(/\s+/g, ' ')
                                      .trim();
                
                // Validate and add drawing
                if (code && description && description.length > 3 && description.length < 300) {
                    const drawing = {
                        code: code,
                        description: description,
                        section: section.id,
                        sectionName: section.name,
                        category: this.categorizeDrawing(code, description, section.name),
                        pdfUrl: null,
                        pdfDownloaded: false
                    };
                    
                    // Add PDF information if available
                    if (pdfLinks[code]) {
                        drawing.pdfUrl = pdfLinks[code].url;
                        // Add to download queue
                        this.downloadQueue.push({
                            code: code,
                            url: this.baseUrl + pdfLinks[code].url,
                            localPath: `downloads/section_${section.id}/${code.toLowerCase()}.pdf`,
                            drawing: drawing
                        });
                    }
                    
                    drawings.push(drawing);
                    
                    // Show progress for first few items
                    if (drawings.length <= 3) {
                        const pdfStatus = drawing.pdfUrl ? '📄' : '❌';
                        console.log(`     ✓ ${code} ${pdfStatus}: ${description.substring(0, 50)}...`);
                    }
                }
            }
        }
        
        console.log(`   📊 Extracted ${drawings.length} drawings from Section ${section.id}`);
        return drawings;
    }

    categorizeDrawing(code, description, sectionName) {
        const desc = description.toLowerCase();
        const codePrefix = code.substring(0, 2);
        
        // Category mapping based on common patterns
        if (sectionName.includes('Street Furniture')) {
            if (desc.includes('kerb') || desc.includes('curb')) return 'Kerbs';
            if (desc.includes('barrier') || desc.includes('fence')) return 'Barriers';
            if (desc.includes('railing') || desc.includes('handrail')) return 'Railings';
            if (desc.includes('bollard') || desc.includes('post')) return 'Bollards';
            if (desc.includes('bench') || desc.includes('seat')) return 'Seating';
            if (desc.includes('sign') || desc.includes('signage')) return 'Signage';
            return 'Street Furniture';
        }
        
        if (sectionName.includes('Drainage')) {
            if (desc.includes('gully') || desc.includes('drain')) return 'Drainage';
            if (desc.includes('manhole') || desc.includes('cover')) return 'Manholes';
            return 'Drainage';
        }
        
        if (sectionName.includes('Landscape')) {
            return 'Landscaping';
        }
        
        if (sectionName.includes('Roads')) {
            if (desc.includes('pavement') || desc.includes('surfacing')) return 'Pavement';
            if (desc.includes('marking') || desc.includes('line')) return 'Road Markings';
            return 'Roads';
        }
        
        if (sectionName.includes('Traffic Management')) {
            if (desc.includes('signal') || desc.includes('traffic light')) return 'Traffic Signals';
            if (desc.includes('sign') || desc.includes('signage')) return 'Traffic Signs';
            if (desc.includes('marking') || desc.includes('line')) return 'Road Markings';
            if (desc.includes('barrier') || desc.includes('cone')) return 'Traffic Control';
            if (desc.includes('junction') || desc.includes('intersection')) return 'Junctions';
            return 'Traffic Management';
        }
        
        return 'General';
    }

    async downloadPDF(downloadItem) {
        return new Promise((resolve) => {
            const { code, url, localPath, drawing } = downloadItem;
            
            // Create directory if it doesn't exist
            const dir = path.dirname(localPath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            
            // Check if file already exists
            if (fs.existsSync(localPath)) {
                console.log(`   ⏭️  ${code}: Already exists, skipping`);
                drawing.pdfDownloaded = true;
                this.downloadStats.skipped++;
                resolve(true);
                return;
            }
            
            console.log(`   ⬇️  ${code}: Downloading from ${url}`);
            
            const file = fs.createWriteStream(localPath);
            const request = https.get(url, (response) => {
                if (response.statusCode === 200) {
                    response.pipe(file);
                    file.on('finish', () => {
                        file.close();
                        console.log(`   ✅ ${code}: Downloaded successfully`);
                        drawing.pdfDownloaded = true;
                        this.downloadStats.downloaded++;
                        resolve(true);
                    });
                } else {
                    fs.unlink(localPath, () => {}); // Delete partial file
                    console.log(`   ❌ ${code}: HTTP ${response.statusCode}`);
                    this.downloadStats.failed++;
                    resolve(false);
                }
            });
            
            request.on('error', (error) => {
                fs.unlink(localPath, () => {}); // Delete partial file
                console.log(`   ❌ ${code}: ${error.message}`);
                this.downloadStats.failed++;
                resolve(false);
            });
            
            file.on('error', (error) => {
                fs.unlink(localPath, () => {}); // Delete partial file
                console.log(`   ❌ ${code}: File error - ${error.message}`);
                this.downloadStats.failed++;
                resolve(false);
            });
        });
    }

    async downloadAllPDFs() {
        if (this.downloadQueue.length === 0) {
            console.log('📄 No PDFs found to download.');
            return;
        }
        
        console.log(`\n📄 Starting PDF downloads...`);
        console.log(`Total PDFs to download: ${this.downloadQueue.length}\n`);
        
        this.downloadStats.total = this.downloadQueue.length;
        
        // Create main downloads directory
        if (!fs.existsSync('downloads')) {
            fs.mkdirSync('downloads');
        }
        
        // Download PDFs with limited concurrency to be respectful to the server
        const concurrency = 3;
        for (let i = 0; i < this.downloadQueue.length; i += concurrency) {
            const batch = this.downloadQueue.slice(i, i + concurrency);
            const promises = batch.map(item => this.downloadPDF(item));
            await Promise.all(promises);
            
            // Progress update
            const completed = Math.min(i + concurrency, this.downloadQueue.length);
            console.log(`   📊 Progress: ${completed}/${this.downloadQueue.length} processed\n`);
            
            // Small delay between batches to be respectful
            if (i + concurrency < this.downloadQueue.length) {
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }
        
        this.printDownloadStats();
    }

    printDownloadStats() {
        console.log('\n📊 DOWNLOAD SUMMARY');
        console.log('=' .repeat(50));
        console.log(`Total PDFs found: ${this.downloadStats.total}`);
        console.log(`Successfully downloaded: ${this.downloadStats.downloaded}`);
        console.log(`Skipped (already exists): ${this.downloadStats.skipped}`);
        console.log(`Failed: ${this.downloadStats.failed}`);
        
        if (this.downloadStats.downloaded > 0) {
            console.log(`\n📁 PDFs saved in: downloads/`);
            console.log('   └── section_1/');
            console.log('   └── section_2/');
            console.log('   └── section_3/');
            console.log('   └── section_4/');
            console.log('   └── section_5/');
            console.log('   └── section_6/');
        }
    }

    async crawlAllSections() {
        console.log('🚀 Starting HYD Standard Drawings crawl...\n');
        
        for (const section of this.sections) {
            try {
                console.log(`📂 Processing Section ${section.id}: ${section.name}`);
                
                const url = this.baseUrl + section.url;
                const html = await this.fetchPage(url);
                const drawings = this.parseDrawings(html, section);
                
                this.allDrawings.push(...drawings);
                
                console.log(`✅ Section ${section.id} complete: ${drawings.length} drawings\n`);
                
                // Small delay between requests
                await new Promise(resolve => setTimeout(resolve, 1000));
                
            } catch (error) {
                console.error(`❌ Failed to process Section ${section.id}:`, error.message);
            }
        }
        
        return this.allDrawings;
    }

    async crawlAndDownload() {
        // First crawl all sections to gather drawing information
        await this.crawlAllSections();
        
        // Then download all PDFs
        await this.downloadAllPDFs();
        
        return this.allDrawings;
    }

    saveResults() {
        if (!fs.existsSync('crawled-data')) {
            fs.mkdirSync('crawled-data');
        }
        
        // Save as JSON
        const jsonFile = 'crawled-data/hyd-drawings.json';
        fs.writeFileSync(jsonFile, JSON.stringify(this.allDrawings, null, 2));
        
        // Save as JavaScript module
        const jsContent = `// HYD Standard Drawings Database
// Generated on: ${new Date().toISOString()}
// Total drawings: ${this.allDrawings.length}

const hydDrawings = ${JSON.stringify(this.allDrawings, null, 2)};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hydDrawings;
}

// Export for browser
if (typeof window !== 'undefined') {
    window.hydDrawings = hydDrawings;
}
`;
        
        const jsFile = 'crawled-data/hyd-drawings.js';
        fs.writeFileSync(jsFile, jsContent);
        
        console.log(`💾 Results saved to:`);
        console.log(`   📄 ${jsonFile}`);
        console.log(`   📄 ${jsFile}`);
        
        return { jsonFile, jsFile };
    }

    printSummary() {
        console.log('\n📊 CRAWL SUMMARY');
        console.log('=' .repeat(50));
        console.log(`Total drawings found: ${this.allDrawings.length}`);
        
        // Count PDFs
        const drawingsWithPdf = this.allDrawings.filter(d => d.pdfUrl);
        const downloadedPdfs = this.allDrawings.filter(d => d.pdfDownloaded);
        console.log(`Drawings with PDFs: ${drawingsWithPdf.length}`);
        console.log(`PDFs downloaded: ${downloadedPdfs.length}`);
        
        // Group by section
        const bySections = {};
        const byCategories = {};
        
        this.allDrawings.forEach(drawing => {
            // Count by section
            const sectionKey = `Section ${drawing.section}: ${drawing.sectionName}`;
            bySections[sectionKey] = (bySections[sectionKey] || 0) + 1;
            
            // Count by category
            byCategories[drawing.category] = (byCategories[drawing.category] || 0) + 1;
        });
        
        console.log('\nBy Section:');
        Object.entries(bySections).forEach(([section, count]) => {
            console.log(`  ${section}: ${count} drawings`);
        });
        
        console.log('\nBy Category:');
        Object.entries(byCategories).forEach(([category, count]) => {
            console.log(`  ${category}: ${count} drawings`);
        });
        
        if (this.allDrawings.length > 0) {
            console.log('\nSample drawings:');
            this.allDrawings.slice(0, 5).forEach(drawing => {
                const pdfStatus = drawing.pdfDownloaded ? '📄✅' : drawing.pdfUrl ? '📄❌' : '❌';
                console.log(`  ${drawing.code} ${pdfStatus}: ${drawing.description.substring(0, 50)}...`);
            });
        }
    }
}

// Run the crawler
async function main() {
    const crawler = new HYDCrawler();
    
    try {
        console.log('🎯 Choose crawling mode:');
        console.log('1. Crawl and download PDFs (recommended)');
        console.log('2. Crawl only (no downloads)');
        
        // For automated runs, default to crawl and download
        const mode = process.argv[2] === '--crawl-only' ? 'crawl' : 'download';
        
        if (mode === 'download') {
            console.log('🚀 Starting crawl with PDF downloads...\n');
            await crawler.crawlAndDownload();
        } else {
            console.log('🚀 Starting crawl only...\n');
            await crawler.crawlAllSections();
        }
        
        crawler.saveResults();
        crawler.printSummary();
        
        console.log('\n✅ Crawl completed successfully!');
        
        if (mode === 'download') {
            console.log('\n📁 Check the downloads/ folder for PDF files');
        } else {
            console.log('\n💡 To download PDFs, run: node simple-crawler.js');
        }
        
    } catch (error) {
        console.error('\n❌ Crawl failed:', error.message);
        process.exit(1);
    }
}

// Execute if run directly
if (require.main === module) {
    main();
}

module.exports = HYDCrawler;
