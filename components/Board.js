import React from 'react';
import Card from './Card';

var Board = React.createClass({
  getInitialState: function () {
    return { 
      cards: [] 
    };
  },
  render: function(){
    var cards = [];
    this.state.cards.forEach(function (card) {
      cards.push(<Card task={card.task} />);
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

  addTask: function addTask () {
    var cards = this.state.cards;

    cards.push({ task: 'New Task'});

    this.setState({ cards: cards });
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
