import React from 'react';
import Column from './Column';
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

    return (
      <div>
        <button style={this.styles.addButton} onClick={this.addTask}>Add Task</button>
        <div style={this.styles.board}>
          <Column title={'To Do'} cards={this.state.cards} />
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
      minHeight: 75,
      height: '100%'
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
