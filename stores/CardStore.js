var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var CardStore = new EventEmitter();


CardStore.emitChange = function() {
  this.emit(CHANGE_EVENT);
};

CardStore.addChangeListener = function(callback) {
	this.on(CHANGE_EVENT, callback);
};

CardStore.removeChangeListener = function(callback) {
	this.removeListener(CHANGE_EVENT, callback);
};

CardStore.updateTask = function (cardIndex, task) {
	console.log('Change card number ' + cardIndex + ' to ' + task);
};


export default CardStore