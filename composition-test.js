// Simple test to check composition structure
// Load the questions.js file content
const fs = require('fs');
const path = require('path');

// Read and evaluate the questions.js file
const questionsContent = fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf8');

// Extract the furnitureDatabase from the content
const lines = questionsContent.split('\n');
let databaseStart = -1;
let databaseEnd = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const furnitureDatabase = {')) {
        databaseStart = i;
    }
    if (databaseStart !== -1 && lines[i].includes('};') && i > databaseStart + 10) {
        databaseEnd = i + 1;
        break;
    }
}

if (databaseStart !== -1 && databaseEnd !== -1) {
    const databaseCode = lines.slice(databaseStart, databaseEnd).join('\n');
    
    // Execute the database definition
    eval(databaseCode);
    
    console.log('Testing updated pavement composition structures:');
    console.log('=================================================');
    
    const pavement = furnitureDatabase.pavement;
    
    pavement.slice(0, 6).forEach((item, index) => {
        if (item.composition) {
            console.log(`\n${index + 1}. ${item.id} - ${item.name}:`);
            console.log(`   Layers: ${item.composition.layers.length}`);
            console.log(`   Drawings: ${item.composition.drawings ? item.composition.drawings.length : 0}`);
            console.log(`   Materials: ${item.composition.materials ? 'YES (ERROR!)' : 'NO (✓)'}`);
            console.log(`   Equipment: ${item.composition.equipment ? 'YES (ERROR!)' : 'NO (✓)'}`);
        } else {
            console.log(`\n${index + 1}. ${item.id} - ${item.name}: NO COMPOSITION`);
        }
    });
    
    console.log('\n=================================================');
    console.log('Test completed successfully!');
} else {
    console.log('Could not find furnitureDatabase in questions.js');
}
