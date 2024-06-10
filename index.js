const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

const inputFolder = './input';
const outputFolder = './output';

// Ensure the output folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Read files from the input directory
fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(inputFolder, file);
    const fileExtension = path.extname(file);

    // Process only PDF files
    if (fileExtension === '.pdf') {
      const outputFilePath = path.join(outputFolder, `${path.basename(file, fileExtension)}.md`);

      fs.readFile(filePath, (err, pdfBuffer) => {
        if (err) {
          console.error(`Error reading file ${file}:`, err);
          return;
        }

        // Parse the PDF
        pdfParse(pdfBuffer).then(result => {
          // Save the extracted text to a Markdown file
          fs.writeFile(outputFilePath, result.text, (err) => {
            if (err) {
              console.error(`Error writing markdown file for ${file}:`, err);
              return;
            }
            console.log(`Markdown file created for ${file}`);
          });
        }).catch(error => {
          console.error(`Error parsing PDF file ${file}:`, error);
        });
      });
    }
  });
});