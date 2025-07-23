#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

class HYDCrawler {
    constructor() {
        this.baseUrl = 'https://www.hyd.gov.hk/en/technical_references/standard_drawings/hyd_standard_drawings/';
        this.sections = [
            { id: 1, name: 'Roads', url: 'section1.html' },
            { id: 2, name: 'Street Furniture', url: 'section2.html' },
            { id: 3, name: 'Drainage', url: 'section3.html' },
            { id: 4, name: 'Maintenance of Existing Installations Only', url: 'section4.html' },
            { id: 5, name: 'Landscape Hard Works', url: 'section5.html' }
        ];
        this.allDrawings = [];
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
        
        // Extract all table rows first
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
                        category: this.categorizeDrawing(code, description, section.name)
                    };
                    
                    drawings.push(drawing);
                    
                    // Show progress for first few items
                    if (drawings.length <= 3) {
                        console.log(`     ✓ ${code}: ${description.substring(0, 60)}...`);
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
        
        return 'General';
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
                console.log(`  ${drawing.code}: ${drawing.description.substring(0, 60)}...`);
            });
        }
    }
}

// Run the crawler
async function main() {
    const crawler = new HYDCrawler();
    
    try {
        await crawler.crawlAllSections();
        crawler.saveResults();
        crawler.printSummary();
        
        console.log('\n✅ Crawl completed successfully!');
        
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
