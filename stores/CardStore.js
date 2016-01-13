var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var CardStore = new EventEmitter();

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

CardStore.emitChange = function() {
  this.emit(CHANGE_EVENT);
};

CardStore.getCurrentState = function () {
	return currentState;
};

CardStore.addChangeListener = function(callback) {
	this.on(CHANGE_EVENT, callback);
};

CardStore.removeChangeListener = function(callback) {
	this.removeListener(CHANGE_EVENT, callback);
};

CardStore.createCard = function () {
	this.getCurrentState().columns[0].cards.push({task: 'New task'});
	this.emitChange();
};

CardStore.updateTask = function (columnIndex, cardIndex, task) {
	this.getCurrentState().columns[columnIndex].cards[cardIndex].task = task;
	this.emitChange();
};

CardStore.moveToColumn = function (columnIndex, cardIndex, task) {
	var toColumn = columnIndex + 1,
		columns = this.getCurrentState().columns,
		card;

	if (toColumn >= columns.length) {
		toColumn = columns.length - 1;
	}

	card = columns[columnIndex].cards.splice(cardIndex, 1)[0];

	columns[toColumn].cards.push(card);
	this.emitChange();
};


export default CardStore