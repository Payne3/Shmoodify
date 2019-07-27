
var tableData = data;

// Store the table body element under "tbody"
var tbody = d3.select("tbody");

function loveButton() {

    d3.selectAll("td").remove();

    var filteredData = tableData.filter(record => record.Schmood == 'Love')

    function random10(array) {

        var test = array[Math.floor(Math.random() * array.length)];
        return test; 
        
    }

    var randomData = []; 
    var i;
    for (i = 0; i < 11; i++) {
        random = random10(filteredData)
        randomData = randomData.concat(random); 
    }
    
    console.log(randomData)

    randomData.forEach(function (randomData) {

        // Append a row to the table body for every UFO report
        var row = tbody.append("tr");

        // For each pair of keys and values in each UFO report...
        Object.entries(randomData).forEach(function ([key, value]) {

            // Append a data column (cell) to the row and enter the corresponding value in each cell.
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    console.log(randomData);
};


function saucyButton() {
    d3.selectAll("td").remove();

    var filteredData = tableData.filter(record => record.Schmood == 'Saucy')

    function random10(array) {

        var test = array[Math.floor(Math.random() * array.length)];
        return test; 
        
    }

    var randomData = []; 
    var i;
    for (i = 0; i < 11; i++) {
        random = random10(filteredData)
        randomData = randomData.concat(random); 
    }
    
    console.log(randomData)

    randomData.forEach(function (randomData) {

        // Append a row to the table body for every UFO report
        var row = tbody.append("tr");

        // For each pair of keys and values in each UFO report...
        Object.entries(randomData).forEach(function ([key, value]) {

            // Append a data column (cell) to the row and enter the corresponding value in each cell.
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    console.log(randomData);
};

function danceButton() {
    d3.selectAll("td").remove();

    var filteredData = tableData.filter(record => record.Schmood == 'Dance')

    function random10(array) {

        var test = array[Math.floor(Math.random() * array.length)];
        return test; 
        
    }

    var randomData = []; 
    var i;
    for (i = 0; i < 11; i++) {
        random = random10(filteredData)
        randomData = randomData.concat(random); 
    }
    
    console.log(randomData)

    randomData.forEach(function (randomData) {

        // Append a row to the table body for every UFO report
        var row = tbody.append("tr");

        // For each pair of keys and values in each UFO report...
        Object.entries(randomData).forEach(function ([key, value]) {

            // Append a data column (cell) to the row and enter the corresponding value in each cell.
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    console.log(randomData);
};

function sadButton() {
    d3.selectAll("td").remove();

    var filteredData = tableData.filter(record => record.Schmood == 'Sad')

    function random10(array) {

        var test = array[Math.floor(Math.random() * array.length)];
        return test; 
        
    }

    var randomData = []; 
    var i;
    for (i = 0; i < 11; i++) {
        random = random10(filteredData)
        randomData = randomData.concat(random); 
    }
    
    console.log(randomData)

    randomData.forEach(function (randomData) {

        // Append a row to the table body for every UFO report
        var row = tbody.append("tr");

        // For each pair of keys and values in each UFO report...
        Object.entries(randomData).forEach(function ([key, value]) {

            // Append a data column (cell) to the row and enter the corresponding value in each cell.
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    console.log(randomData);
};

function angryButton() {
    d3.selectAll("td").remove();

    var filteredData = tableData.filter(record => record.Schmood == 'Angry')

    function random10(array) {

        var test = array[Math.floor(Math.random() * array.length)];
        return test; 
        
    }

    var randomData = []; 
    var i;
    for (i = 0; i < 11; i++) {
        random = random10(filteredData)
        randomData = randomData.concat(random); 
    }
    
    console.log(randomData)

    randomData.forEach(function (randomData) {

        // Append a row to the table body for every UFO report
        var row = tbody.append("tr");

        // For each pair of keys and values in each UFO report...
        Object.entries(randomData).forEach(function ([key, value]) {

            // Append a data column (cell) to the row and enter the corresponding value in each cell.
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    console.log(randomData);
};


