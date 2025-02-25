function doGet(e) {
  var sheet = SpreadsheetApp.openById("SHEET_ID").getSheetByName("Sheet1");
  var data = sheet.getRange("A:A").getValues().flat(); // Get all values in column A

  var qrValue = e.parameter.qr; // Get 'qr' parameter from URL
  var rowIndex = data.indexOf(qrValue); // Find row index

  if (rowIndex !== -1) {
    // If found, increment the count in column B
    var countCell = sheet.getRange(rowIndex + 1, 2); // Column B
    var currentCount = countCell.getValue() || 0;
    countCell.setValue(currentCount + 1);

    var html = HtmlService.createHtmlOutput(
      `<h2>QR Code Check</h2>
      <p>Value: <b>${qrValue}</b></p>
      <p>Status: <b style="color: green;">Valid ✅</b></p>
      <p>Check Count: <b>${currentCount + 1}</b></p>`
    );
  } else {
    // If not found, show "Invalid" message
    var html = HtmlService.createHtmlOutput(
      `<h2>QR Code Check</h2>
      <p>Value: <b>${qrValue}</b></p>
      <p>Status: <b style="color: red;">Invalid ❌</b></p>`
    );
  }
  
  return html;
}

