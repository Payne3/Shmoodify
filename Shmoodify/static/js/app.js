
var tableData = data;

// Store the table body element under "tbody"
var tbody = d3.select("tbody");

function loveButton() {

    d3.selectAll("td").remove();

    var filteredData = tableData.filter(record => record.Schmood == 'love')
    
    filteredData.forEach(function(filteredData) {

        // Append a row to the table body for every UFO report
        var row = tbody.append("tr");
     
        // For each pair of keys and values in each UFO report...
        Object.entries(filteredData).forEach(function([key, value]) {
            
            // Append a data column (cell) to the row and enter the corresponding value in each cell.
            var cell = tbody.append("td");
            cell.text(value);
        });
      });
    console.log(filteredData);
};


function saucyButton() {
    d3.event.preventDefault();

    d3.selectAll("td").remove();
    console.log("Hello World");
};

function danceButton() {
    d3.event.preventDefault();

    d3.selectAll("td").remove();
    console.log("Hello World");
};

function sadButton() {
    d3.event.preventDefault();

    d3.selectAll("td").remove();
    console.log("Hello World");
};

function angryButton() {
    d3.event.preventDefault();

    d3.selectAll("td").remove();
    console.log("Hello World");
};


