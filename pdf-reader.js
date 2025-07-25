const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

async function readPDF(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);
        return data.text;
    } catch (error) {
        console.error('Error reading PDF:', error);
        return null;
    }
}

// Get command line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('Please provide a PDF file path');
    process.exit(1);
}

const pdfPath = args[0];

readPDF(pdfPath).then(text => {
    if (text) {
        console.log(text);
    } else {
        console.error('Failed to read PDF');
    }
}).catch(error => {
    console.error('Error:', error);
});
