const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

async function readPDF(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);
        return data.text;
    } catch (error) {
        console.error(`Error reading PDF ${filePath}:`, error.message);
        return null;
    }
}

async function extractAllPDFs() {
    const outputDir = 'extracted-pdfs';
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Define directories to scan for PDFs
    const scanDirs = [
        'downloads/section_1',
        'downloads/section_2',
        'downloads/section_3',
        'downloads/section_4',
        'downloads/section_5',
        'downloads/section_6',
        'TPDM 2024_07'
    ];

    let totalFiles = 0;
    let successfulExtractions = 0;
    let failedExtractions = 0;

    console.log('Starting PDF extraction process...\n');

    for (const scanDir of scanDirs) {
        if (!fs.existsSync(scanDir)) {
            console.log(`Directory ${scanDir} does not exist, skipping...`);
            continue;
        }

        console.log(`Processing directory: ${scanDir}`);
        
        // Create corresponding output subdirectory
        const outputSubDir = path.join(outputDir, scanDir.replace(/[\\\/]/g, '_'));
        if (!fs.existsSync(outputSubDir)) {
            fs.mkdirSync(outputSubDir, { recursive: true });
        }

        // Get all PDF files in the directory
        const files = fs.readdirSync(scanDir);
        const pdfFiles = files.filter(file => file.toLowerCase().endsWith('.pdf'));

        console.log(`Found ${pdfFiles.length} PDF files in ${scanDir}`);

        for (const pdfFile of pdfFiles) {
            const pdfPath = path.join(scanDir, pdfFile);
            const txtFileName = pdfFile.replace('.pdf', '.txt');
            const txtPath = path.join(outputSubDir, txtFileName);

            totalFiles++;
            console.log(`  Extracting: ${pdfFile}`);

            try {
                const content = await readPDF(pdfPath);
                
                if (content) {
                    // Create metadata header
                    const metadata = `=== PDF EXTRACTION METADATA ===
Source File: ${pdfPath}
Extracted Date: ${new Date().toISOString()}
File Size: ${fs.statSync(pdfPath).size} bytes
=== CONTENT STARTS BELOW ===

${content}`;

                    fs.writeFileSync(txtPath, metadata, 'utf8');
                    successfulExtractions++;
                    console.log(`    ✓ Successfully extracted to ${txtPath}`);
                } else {
                    failedExtractions++;
                    console.log(`    ✗ Failed to extract content from ${pdfFile}`);
                    
                    // Create error file
                    const errorContent = `=== PDF EXTRACTION ERROR ===
Source File: ${pdfPath}
Extracted Date: ${new Date().toISOString()}
Error: Failed to extract content - file may be corrupted, password-protected, or use unsupported format
===`;
                    fs.writeFileSync(txtPath, errorContent, 'utf8');
                }
            } catch (error) {
                failedExtractions++;
                console.log(`    ✗ Error extracting ${pdfFile}: ${error.message}`);
                
                // Create error file
                const errorContent = `=== PDF EXTRACTION ERROR ===
Source File: ${pdfPath}
Extracted Date: ${new Date().toISOString()}
Error: ${error.message}
===`;
                fs.writeFileSync(txtPath, errorContent, 'utf8');
            }
        }
        console.log('');
    }

    // Create summary report
    const summaryReport = `=== PDF EXTRACTION SUMMARY REPORT ===
Generated: ${new Date().toISOString()}

STATISTICS:
- Total PDF files found: ${totalFiles}
- Successful extractions: ${successfulExtractions}
- Failed extractions: ${failedExtractions}
- Success rate: ${totalFiles > 0 ? ((successfulExtractions / totalFiles) * 100).toFixed(1) : 0}%

DIRECTORIES PROCESSED:
${scanDirs.map(dir => `- ${dir}`).join('\n')}

OUTPUT LOCATION:
All extracted text files are saved in the '${outputDir}' directory with the same filename structure as the original PDFs.

USAGE:
- Use semantic_search or grep_search to find specific content across all extracted documents
- Each .txt file contains metadata header followed by the extracted content
- Failed extractions are documented with error information

NEXT STEPS:
1. Use semantic_search to find relevant content: semantic_search("concrete profile barrier specifications")
2. Use grep_search for exact matches: grep_search("Grade 30/20", true, "${outputDir}/**")
3. Read specific extracted files for detailed technical information
===`;

    fs.writeFileSync(path.join(outputDir, 'EXTRACTION_SUMMARY.txt'), summaryReport, 'utf8');

    console.log('\n=== EXTRACTION COMPLETE ===');
    console.log(`Total files processed: ${totalFiles}`);
    console.log(`Successful extractions: ${successfulExtractions}`);
    console.log(`Failed extractions: ${failedExtractions}`);
    console.log(`Success rate: ${totalFiles > 0 ? ((successfulExtractions / totalFiles) * 100).toFixed(1) : 0}%`);
    console.log(`\nAll extracted content saved to: ${outputDir}/`);
    console.log(`Summary report saved to: ${outputDir}/EXTRACTION_SUMMARY.txt`);
    console.log('\nYou can now use semantic_search or grep_search to find specific technical content!');
}

// Run the extraction
extractAllPDFs().catch(error => {
    console.error('Fatal error during PDF extraction:', error);
    process.exit(1);
});
