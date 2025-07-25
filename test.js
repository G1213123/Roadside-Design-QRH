// Test script to debug the drawing issue
const fs = require('fs');

// Load the questions.js file content as a script
const content = fs.readFileSync('./questions.js', 'utf8');
eval(content);

// Test the functions
console.log('Testing functions:');
console.log('getAllFurniture length:', getAllFurniture().length);
console.log('getFurnitureByCategory("kerbs") length:', getFurnitureByCategory('kerbs').length);

// Check first few items
const allItems = getAllFurniture();
console.log('\nFirst 3 items:');
for (let i = 0; i < Math.min(3, allItems.length); i++) {
    const item = allItems[i];
    console.log(`Item ${i+1}: ${item.id} - ${item.name}`);
    console.log(`  Drawings: ${JSON.stringify(item.drawings)}`);
    console.log(`  Has drawings: ${item.drawings && item.drawings.length > 0}`);
}

// Check kerb items specifically
const kerbItems = getFurnitureByCategory('kerbs');
console.log('\nKerb items:');
kerbItems.forEach((item, i) => {
    console.log(`Kerb ${i+1}: ${item.id} - ${item.name}`);
    console.log(`  Drawings: ${JSON.stringify(item.drawings)}`);
});
