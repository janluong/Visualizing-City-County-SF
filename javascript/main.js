all_my_code = function() {
// Find a <table> element with id="myTable":
var table = document.getElementById("myTable");

for (data_row in all_data){
  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(0);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);

  // Add some text to the new cells:
  console.log("all_data[" + data_row +"]= " , all_data[data_row])
  cell1.innerHTML = all_data[data_row]["CASE #"];
  cell2.innerHTML = all_data[data_row]["PROJECT ADDRESS"];
  cell3.innerHTML = all_data[data_row]["TIS/Circ Memo?"];
  cell4.innerHTML = all_data[data_row]["Significant Impacts if any?"];
  cell5.innerHTML = all_data[data_row]["Consultant"];
  cell6.innerHTML = all_data[data_row]["Recommended Mitigation Measures"];
  cell7.innerHTML = all_data[data_row]["Recommended Improvement Measures"];
  cell8.innerHTML = all_data[data_row]["Recommended TDM Measures"];
  }
};

document.onreadystatechange = function () {
 var state = document.readyState;
 if (state == 'complete') {
  all_my_code();
  }
};