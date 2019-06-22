// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
// stops default action
event.preventDefault();
var heightValue = document.getElementById("inputHeight").value;
var widthValue = document.getElementById("inputWidth").value;
var table = document.getElementById("pixelCanvas");

table.innerHTML = "";

//nested for loops the firt one is to create column, other one is to create cells in the row
for (var i = 0 ; i < heightValue ; i++){
    var row = document.createElement("tr");
    for(var y = 0 ; y < widthValue ; y++){
        var cell = document.createElement("td");
        row.appendChild(cell);
    }
    table.appendChild(row);
}
}

// changing the color of the cell
function color (event){
    if (event.target.nodeName == "TD"){
        var theColor = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor = theColor;
    }
}
