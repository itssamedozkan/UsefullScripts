//hello , i have a html table with id 'samed', 
//i want to export its innerText to a csv file how can i do it ? 

function exportToCsv(filename, rows) {
  var csvFile = '';
  for (var i = 0; i < rows.length; i++) {
    var rowCells = rows[i].querySelectorAll("td, th");
    if (rowCells.length !== 10) {
      console.warn(`Skipping row ${i+1} because it doesn't have 10 cells.`);
      continue;
    }
    var rowData = [];
    for (var j = 0; j < rowCells.length; j++) {
      var cellText = rowCells[j].innerText.replace(/"/g, '""');
      cellText = cellText.replace(/[\t\n\v\f\r]+/g, '').replace(/[ \u00A0]+/g, ' ');
      rowData.push('"' + cellText + '"');
    }
    csvFile += rowData.join(",") + '\r\n';
  }

  var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

var tableRows = document.querySelectorAll("#samed tr");
exportToCsv("table.csv", tableRows);