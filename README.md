# PDF to Markdown Converter

## Overview

PDF to Markdown Converter is a Node.js application designed to automate the process of converting PDF documents into Markdown files. It reads all PDF files in a specified input directory, extracts the text, and then saves the extracted content as Markdown files in a specified output directory. This tool is especially useful for developers, content creators, and anyone looking to convert PDFs into a more editable and lightweight format.

## Features

- **Batch Processing**: Automatically processes all PDF files in the input directory.
- **Easy Setup**: Simple directory-based configuration for input and output.
- **Text Extraction**: Utilizes the `pdf-parse` library for reliable PDF text extraction.
- **Output as Markdown**: Saves the extracted text as Markdown files, preserving the readability and editability of the content.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/forgetabyteit/pdf-to-markdown-converter.git
   cd pdf-to-markdown-converter
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Place the PDF files you want to convert in the `input` directory.
2. Run the conversion script:
   ```sh
   node index.js
   ```
3. The converted Markdown files will be saved in the `output` directory.

## Directory Structure

```
pdf-to-markdown-converter/
├── input/          # Directory to place your PDF files
├── output/         # Directory where converted Markdown files will be saved
├── index.js        # Main script to run the conversion
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

## Example

Assume you have a PDF file named `example.pdf` in the `input` directory. After running the script, you will find a file named `example.md` in the `output` directory containing the extracted text from `example.pdf`.

## Error Handling

The script includes basic error handling to manage:
- Reading errors for the input directory
- File reading errors for individual PDFs
- PDF parsing errors
- Writing errors for the output Markdown files

Error messages will be logged to the console for troubleshooting purposes.

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.