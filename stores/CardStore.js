var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var CardStore = new EventEmitter();

var curentState = {
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
	return curentState;
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
	curentState.columns[columnIndex].cards[cardIndex].task = task;
	this.emitChange();
};


export default CardStore