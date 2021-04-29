const taskItems = [{
  completionStatus: false,
  element: document.getElementById('box-1'),
  id: 'box-1',
}];

function toggleElement(elementId) {
  const element = fetchTaskItemElement(elementId);
  toggleTaskItem(element);
}

function fetchTaskItemElement(elementId) {
  let element;
  for (var i = 0; i < taskItems.length; i++) {
    if (taskItems[i].id === elementId) {
      element = taskItems[i].element;
    }
  }
  return element;
}

//mark items as complete and incomplete

const listOfItems = document.querySelector('.list-of-items');
const taskItem = document.getElementById('box-1');
const itemText = document.getElementById('item');
const checkmark = document.getElementById('checkmark');
const closingX = document.getElementById('closing-x');
let completionStatus = false;

listOfItems.addEventListener('click', function () {
  console.log('hello world'); // TODO THIS COMMIT: remove this
});

// taskItem.addEventListener('click', toggleTaskItem);

function toggleTaskItem(element) {
  if (!checkIfItemIsComplete(element)) {
    markTaskItemComplete(element);
    completionStatus = true;
  } else if (checkIfItemIsComplete(element)) {
    markTaskItemIncomplete(element);
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
