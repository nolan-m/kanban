import React from 'react';
import Card from './Card';
import CardStore from '../stores/CardStore';

var Board = React.createClass({
  getInitialState: function () {
    return { 
      cards: [] 
    };
  },

  componentDidMount: function() {
    CardStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CardStore.removeChangeListener(this._onChange);
  },

  render: function(){
    var cards = [];

    this.state.cards.forEach(function (card, index) {
      cards.push(<Card key={'card'+index} task={card.task} index={index} />);
    });

    return (
      <div>
        <button style={this.styles.addButton} onClick={this.addTask}>Add Task</button>
        <div style={this.styles.board}>
          { cards }
        </div>
      </div>
    );
  },

  _onChange: function () {
    this.setState(CardStore.getCurrentState());
  },

  addTask: function () {
    CardStore.createCard();
  },

  styles: {
    board: {
      border: '1px solid black',
      background: '#999',
      padding: 15,
      minHeight: 75
    },
    addButton: {
      marginBottom: 10,
      width: 100,
      padding: 10,
      fontSize: 16,
      cursor: 'pointer'
    }
  }

});

export default Board
