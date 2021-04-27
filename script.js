const taskItem = document.getElementById('box-1');
const itemText = document.getElementById('item');
const checkmark = document.getElementById('checkmark');
const closingX = document.getElementById('closing-x');


taskItem.addEventListener("click", toggleElements());

function toggleElements() {
  if (checkIfItemIsIncomplete()) {
    markTaskItemComplete();
  } else if (checkIfItemIsComplete()) {
    markTaskItemIncomplete();
  }
}

function checkIfItemIsIncomplete() {
  
}



function markTaskItemComplete() {
  turnItemBackgroundColorDarkGrey();
  turnItemColorWhite();
  strikeThroughItem();
  addCheckmark();
  turnClosingXWhite();
}

function markTaskItemIncomplete() {
  turnItemBackgroundColorLightGrey();
  turnItemColorBlack();
  removeStrikeThroughItem();
  removeCheckmark();
  turnClosingXBlack();
}

// mark task item complete functions
function turnItemBackgroundColorDarkGrey() {
  taskItem.style.backgroundColor = '#a9a9a9';
}

function turnItemColorWhite() {
  itemText.style.color = 'white';
}

function strikeThroughItem() {
  itemText.style.textDecoration = 'line-through';
}

function addCheckmark() {
  checkmark.style.display = "block";
}

function turnClosingXWhite() {
  closingX.style.color = 'white';
}

// mark task item incomplete functions

function turnItemBackgroundColorLightGrey() {
  taskItem.style.backgroundColor = '';
}

function turnItemColorBlack() {
  itemText.style.color = 'black';
}

function removeStrikeThroughItem() {
  itemText.style.textDecoration = 'none';
}

function removeCheckmark() {
  checkmark.style.display = "none";
}

function turnClosingXBlack() {
  closingX.style.color = 'black';
}
