//mark items as complete and incomplete

const taskItem = document.getElementById('box-1');
const itemText = document.getElementById('item');
const checkmark = document.getElementById('checkmark');
const closingX = document.getElementById('closing-x');
let completionStatus = false;

taskItem.addEventListener('click', toggleElements);

function toggleElements() {
  if (!checkIfItemIsComplete()) {
    markTaskItemComplete();
    completionStatus = true;
  } else if (checkIfItemIsComplete()) {
    markTaskItemIncomplete();
    completionStatus = false;
  }
}

function checkIfItemIsComplete() {
  return completionStatus;
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

//remove item from list
closingX.addEventListener('click', removeItem);

function removeItem() {
  taskItem.remove();
}
