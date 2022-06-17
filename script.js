// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

let table = document.getElementById("grid");

// Add a row
function addR() {
    let row = table.insertRow();
    if (numCols == 0) {
        numCols = 1;
    }
    for (let i=0; i < numCols; i++) {
        let newCell = row.insertCell();
        newCell.onclick = function(event) {
            this.style.backgroundColor = colorSelected;
            console.log(event);
        }
    }
    console.log("Clicked Add Row " + row + " to " + table); // Replace this line with your code.
    numRows++;
}

// Add a column
function addC() {
    console.log("Clicked Add Col"); // Replace this line with your code.
}


// Remove a row
function removeR() {
    console.log("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    console.log("Clicked Remove Col"); // Replace this line with your code.
}

-// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    console.log("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    console.log("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    console.log("Clicked Clear All"); // Replace this line with your code.
}
