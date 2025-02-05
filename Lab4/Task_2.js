function generateTable(m, n) {
    let table = document.createElement('table');
    for (let i = 0; i < m; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            let cell = document.createElement('td');
            cell.textContent = `Рядок ${i+1}, Стовпець ${j+1}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.getElementById('table-container').innerHTML = '';
    document.getElementById('table-container').appendChild(table);
}
