/**
 * Classe para renderizar uma tabela a partir de um array 2D de dados.
 */
export class TableRenderer {
    /**
     * Cria uma instância de TableRenderer.
     * @param {string} tableContainerId - ID do elemento onde a tabela será renderizada.
     */
    constructor(tableContainerId) {
        this.tableContainer = document.getElementById(tableContainerId);
    }

    /**
     * Processa o conteúdo de um arquivo CSV.
     * @param {File} csvFile - Arquivo CSV carregado.
     * @returns {Promise<Array<Array<string>>>} - Array 2D com os dados do CSV.
     */
    async processCSV(csvFile) {
        const text = await csvFile.text();
        return text.split('\n').map(row => row.split(','));
    }

    /**
     * Adiciona uma coluna calculada (soma de duas colunas específicas).
     * @param {Array<Array<string|number>>} data - Dados da tabela.
     * @param {number} columnIndex1 - Índice da primeira coluna para somar.
     * @param {number} columnIndex2 - Índice da segunda coluna para somar.
     * @param {number} targetColumnIndex - Índice da coluna onde armazenar o resultado.
     */
    addCalculatedColumn(data, columnIndex1, columnIndex2, targetColumnIndex) {
        for (let i = 1; i < data.length; i++) { // Ignorar cabeçalho
            const value1 = parseFloat(data[i][columnIndex1]) || 0;
            const value2 = parseFloat(data[i][columnIndex2]) || 0;
            data[i][targetColumnIndex] = (value1 + value2).toFixed(2);
        }
    }

    /**
     * Renderiza uma tabela com os dados fornecidos.
     * @param {Array<Array<string|number>>} data - Array 2D com os dados da tabela.
     */
    renderTable(data) {
        const table = document.createElement('table');
        table.classList.add('styled-table'); // Classe para estilização

        // Cabeçalho
        const headerRow = document.createElement('tr');
        data[0].forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Linhas de dados
        for (let i = 1; i < data.length; i++) {
            const row = document.createElement('tr');
            data[i].forEach(cellData => {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                row.appendChild(cell);
            });
            table.appendChild(row);
        }

        // Substituir o conteúdo existente pelo novo
        this.tableContainer.innerHTML = '';
        this.tableContainer.appendChild(table);
    }
}
