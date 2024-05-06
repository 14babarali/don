const fs = require('fs');

const folderPath = 'uploads';

// Check if the folder exists, and create it if not
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log(`'${folderPath}' directory created successfully.`);
} else {
  console.log(`'${folderPath}' directory already exists.`);
}
