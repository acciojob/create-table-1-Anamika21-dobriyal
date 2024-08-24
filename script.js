// function insert_Row() {
    //Write your code here
  // function insert_Row() {
  //   // Get the table element by its ID
  //   var table = document.getElementById("sampleTable");

  //   // Create a new row
  //   var newRow = table.insertRow();

  //   // Insert a new cell in the first column of the new row
  //   var cell1 = newRow.insertCell(0);
  //   // Set the text content for the first cell
  //   cell1.textContent = "New Cell1";

  //   // Insert a new cell in the second column of the new row
  //   var cell2 = newRow.insertCell(1);
  //   // Set the text content for the second cell
  //   cell2.textContent = "New Cell2";

function insert_Row() {
    // Get the table element by its ID
    var table = document.getElementById("sampleTable");

    // Insert a new row at the beginning of the table (position 0)
    var newRow = table.insertRow(0);

    // Insert a new cell in the first column of the new row
    var cell1 = newRow.insertCell(0);
    // Set the text content for the first cell
    cell1.textContent = "New Cell1";

    // Insert a new cell in the second column of the new row
    var cell2 = newRow.insertCell(1);
    // Set the text content for the second cell
    cell2.textContent = "New Cell2";
}


  

