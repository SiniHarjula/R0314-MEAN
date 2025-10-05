const fs = require('fs');
const logFile = 'app.log';

fs.writeFile(logFile, 'Log started at ' + new Date() + '\n', (err) => {
  if (err) return console.error('Error writing file:', err);
  console.log('1. Log file created.');

  fs.appendFile(logFile, 'User Logged in.\n', (err) => {
    if (err) return console.error('Error appending to file:', err);
    console.log('2. User activity appended.');

    fs.readFile(logFile, 'utf8', (err, data) => {
      if (err) return console.error('Error reading file:', err);
      console.log('3. Current log content:\n---', data, '---');

      fs.unlink(logFile, (err) => {
        if (err) return console.error('Error deleting file:', err);
        console.log('4. Log file deleted.');
      });
    });
  });
});