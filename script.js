const taskItems = [
  {
    completionStatus: false,
    element: document.getElementById('box-1'),
    id: 'box-1',
    itemText: 'Hit the gym',
  },
  {
    completionStatus: false,
    element: document.getElementById('box-2'),
    id: 'box-2',
    itemText: 'Pay Bills',
  },
  {
    completionStatus: false,
    element: document.getElementById('box-3'),
    id: 'box-3',
    itemText: 'Meet George',
  },
  {
    completionStatus: false,
    element: document.getElementById('box-4'),
    id: 'box-4',
    itemText: 'Buy eggs',
  },
  {
    completionStatus: false,
    element: document.getElementById('box-5'),
    id: 'box-5',
    itemText: 'Read a book',
  },
  {
    completionStatus: false,
    element: document.getElementById('box-6'),
    id: 'box-6',
    itemText: 'Organize office',
  },
];

function toggleElement(elementId) {
  const taskItem = fetchTaskItem(elementId);
  toggleTaskItem(taskItem);
}

function fetchTaskItem(elementId) {
  let taskItem;
  for (var i = 0; i < taskItems.length; i++) {
    if (taskItems[i].id === elementId) {
      taskItem = taskItems[i];
    }
  }
  return taskItem;
}

// taskItem.addEventListener('click', toggleTaskItem);

function toggleTaskItem(taskItem) {
  if (!checkIfItemIsComplete(taskItem)) {
    markTaskItemComplete(taskItem);
    taskItem.completionStatus = true;
  } else if (checkIfItemIsComplete(taskItem)) {
    markTaskItemIncomplete(taskItem);
    taskItem.completionStatus = false;
  }
}

function checkIfItemIsComplete(taskItem) {
  return taskItem.completionStatus;
}

function markTaskItemComplete(taskItem) {
  turnItemBackgroundColorDarkGrey(taskItem);
  turnItemColorWhite(taskItem);
  strikeThroughItem(taskItem);
  addCheckmark(taskItem);
}

function markTaskItemIncomplete(taskItem) {
  turnItemBackgroundColorLightGrey(taskItem);
  turnItemColorBlack(taskItem);
  removeStrikeThroughItem(taskItem);
  removeCheckmark(taskItem);
}

// mark task item complete functions
function turnItemBackgroundColorDarkGrey(taskItem) {
  taskItem.element.style.backgroundColor = '#a9a9a9';
}

function turnItemColorWhite(taskItem) {
  taskItem.element.style.color = 'white';
}

function strikeThroughItem(taskItem) {
  taskItem.element.style.textDecoration = 'line-through';
}

function addCheckmark(taskItem) {
  checkmark.style.display = "block";
}

// mark task item incomplete functions

function turnItemBackgroundColorLightGrey(taskItem) {
  taskItem.element.style.backgroundColor = '';
}

function turnItemColorBlack(taskItem) {
  taskItem.element.style.color = 'black';
}

function removeStrikeThroughItem(taskItem) {
  taskItem.element.style.textDecoration = 'none';
}

function removeCheckmark(taskItem) {
  checkmark.style.display = "none";
}

//remove item from list
// closingX.addEventListener('click', removeItem);

function removeItem(taskItem) {
  taskItem.remove();
}
