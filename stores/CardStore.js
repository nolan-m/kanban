var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var CardStore = new EventEmitter();

var curentState = {
	cards: []
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
	curentState.cards.push({task: 'New task'});
	this.emitChange();
};

CardStore.updateTask = function (cardIndex, task) {
	console.log('Change card number ' + cardIndex + ' to ' + task);
};


export default CardStore