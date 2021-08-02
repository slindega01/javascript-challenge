// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(tableData);

// //Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(tableData) {
//   console.log(tableData);
// });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");

//   Object.entries(tableData).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");

//   Object.entries(tableData).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function(tableData) {
//   console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  //clear table data
  data.forEach(function(tableData) {
      var row = tbody.remove("tr");
      Object.entries(tableData).forEach(function([key, value]) {
        var cell = row.remove("td");
        cell.text(value);
      });
    });
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

  var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);
  

  filteredData.forEach(function(filteredData){
      var row = tbody.append("tr");
      Object.entries(filteredData).forEach(function([key, value]){
          var cell = row.append("td");
          cell.text(value);
      })
  })

  
 };

