var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var KanbanStore = new EventEmitter();

var currentState = {
	columns: [
		{
			title: 'To Do',
			cards: []
		},
		{
			title: 'In Progress',
			cards: []
		},
		{
			title: 'Completed',
			cards: []
		}
	]
};

KanbanStore.emitChange = function() {
  this.emit(CHANGE_EVENT);
};

KanbanStore.getCurrentState = function () {
	return currentState;
};

KanbanStore.addChangeListener = function(callback) {
	this.on(CHANGE_EVENT, callback);
};

KanbanStore.removeChangeListener = function(callback) {
	this.removeListener(CHANGE_EVENT, callback);
};

KanbanStore.createCard = function () {
	this.getCurrentState().columns[0].cards.push({task: 'New task'});
	this.emitChange();
};

KanbanStore.updateTask = function (columnIndex, cardIndex, task) {
	this.getCurrentState().columns[columnIndex].cards[cardIndex].task = task;
	this.emitChange();
};

KanbanStore.moveToColumn = function (toColumn, currentColumn, cardIndex) {
	var columns = this.getCurrentState().columns,
		card;

	if (toColumn >= columns.length) {
		toColumn = columns.length - 1;
	} else if (toColumn < 0) {
		toColumn = 0;
	}

	card = columns[currentColumn].cards.splice(cardIndex, 1)[0];

	columns[toColumn].cards.push(card);
	this.emitChange();
};

KanbanStore.setColumnTitle = function (columnIndex, title) {
	var columns = this.getCurrentState().columns;

	columns[columnIndex].title = title;
	this.emitChange();
};


export default KanbanStore