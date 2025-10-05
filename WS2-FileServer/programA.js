const fs = require('fs');
console.log("1. Taking the customer's order.");
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log("4. Food is ready! Here is the file content:", data);
});
console.log("2. Order sent to kitchen. Now serving other tables...");
console.log("3. Refilling drinks for another customer.");