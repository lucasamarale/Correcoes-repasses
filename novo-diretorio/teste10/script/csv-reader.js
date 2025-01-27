/**
 * Class for reading and parsing CSV files.
 */
import { TableRenderer } from './table-renderer.js';

/**
 * Creates an instance of CSVReader.
 * @param {string} fileInputId - The ID of the file input element.
 * @param {string} readButtonId - The ID of the read button element.
 */
export class CSVReader {
    constructor(fileInputId, readButtonId) {
        this.fileInput = document.getElementById(fileInputId);
        this.readButton = document.getElementById(readButtonId);
    }

    /**
     * Initializes the CSVReader by setting up the event listener for the read button.
     */
    initialize() {
        this.readButton.addEventListener('click', () => this.readFile());
    }

    /**
     * Reads the selected file and parses it using PapaParse.
     * @throws Will do nothing if no file is selected.
     */
    readFile() {
        const file = this.fileInput.files[0];
        if (!file) return;

        Papa.parse(file, {
            complete: (results) => {
                if (this.processCSVData) {
                    this.processCSVData(results.data);
                }
            },
            header: false,
            skipEmptyLines: true
        });
    }

    /**
     * Sets a callback function to process the parsed CSV data.
     * @param {function} callback - The callback function to process CSV data.
     */
    setProcessor(callback) {
        this.processCSVData = callback;
    }
}