// main.js
import { NavManager } from './toggle-nav.js';
import { CSVReader } from './csv-reader.js';
import { TableRenderer } from './table-renderer.js';

const navManager = new NavManager('nav-list');
const csvReader = new CSVReader('fileInput', 'readFileBtn');
const tableRenderer = new TableRenderer('tableContainer');

const toggleButton = document.getElementById('toggleNavBtn');
if (toggleButton) {
    toggleButton.addEventListener('click', () => navManager.toggleNav());
}

csvReader.setProcessor((data) => {
    tableRenderer.addCalculatedColumn(data, 4, 6, 7); // Adiciona a coluna calculada
    tableRenderer.renderTable(data); // Renderiza a tabela com a nova coluna
});

csvReader.initialize();
