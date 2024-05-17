const content = document.querySelector("#content");
const contentSecond = document.querySelector("#contentSecond");
const userInputDiv = document.querySelector("#userInputDiv");
const createBoard = document.querySelector("#createBoard");
const heightInput = document.querySelector("#heightInput");
const widthInput = document.querySelector("#widthInput");
const createGrid = document.querySelector("#createGrid");
const contentFirst = document.querySelector("#contentFirst");
const gridBox = document.querySelector("#gridBox");

const heightInputBox = document.createElement("input");
const widthInputBox = document.createElement("input");
const createGridButton = document.createElement("button");

createGridButton.textContent = "Create Grid";
createGridButton.className = "createBoard";

heightInputBox.className = "inputBox";
heightInputBox.id = "heightInputBox";
widthInputBox.className = "inputBox";
widthInputBox.id = "widthInputBox";

heightInputBox.placeholder = "Height";
heightInputBox.type = "number";
heightInputBox.min = 1;
heightInputBox.max = 17;
heightInputBox.step = 1;
widthInputBox.placeholder = "Width";
widthInputBox.type = "number";
widthInputBox.min = 1;
widthInputBox.max = 50;
widthInputBox.step = 1;


function onClickCreateBoard() {

    heightInput.appendChild(heightInputBox);
    widthInput.appendChild(widthInputBox);
    createGrid.appendChild(createGridButton);
    // while (contentFirst.firstChild) {
    //     contentFirst.removeChild(contentFirst.lastChild);
    // }
    content.removeChild(content.children[0]);
}

function onClickCreateGridButton() {
    while (gridBox.firstChild) {
        gridBox.removeChild(gridBox.lastChild);
    }
    const userHeight = document.querySelector("#heightInputBox").value;
    const userWidth = document.querySelector("#widthInputBox").value;
    if (userHeight > 17 || userWidth > 50) {
        document.querySelector("#heightInputBox").value = "";
        document.querySelector("#widthInputBox").value = "";
        alert("Please pick a number between 1 and 20")
    } else {
        for (let i = 0; i < userHeight * userWidth; i++) {
            const grid = document.createElement("div");
            grid.className = "grid"
            gridBox.style.height = userHeight * 30 + "px";
            gridBox.style.width = userWidth * 30 + "px";
            gridBox.appendChild(grid);
        }

    }
}

createBoard.addEventListener(
    "click", onClickCreateBoard
)
createGridButton.addEventListener(
    "click", onClickCreateGridButton
)