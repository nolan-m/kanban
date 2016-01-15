import React from 'react';
import Column from './Column';
import KanbanStore from '../stores/KanbanStore';

var Board = React.createClass({
  getInitialState: function () {
    return { 
      columns: [] 
    };
  },

  componentWillMount: function () {
    this.setState(KanbanStore.getCurrentState());
  },

  componentDidMount: function() {
    KanbanStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    KanbanStore.removeChangeListener(this._onChange);
  },

  render: function(){
    var columns = this.state.columns.map( function (column, index) {
      return <Column key={'column'+index} index={index} title={column.title} cards={column.cards} />
    });

    return (
      <div>
        <button style={this.styles.addButton} onClick={this.addTask}>Add Task</button>
        <div style={this.styles.board}>
          { columns }
        </div>
      </div>
    );
  },

  /**
   * Handles change from the store.  Sets the new state in this component.
   */
  _onChange: function () {
    this.setState(KanbanStore.getCurrentState());
  },

  /**
   * Adds a task though the store.
   */
  addTask: function () {
    KanbanStore.createCard();
  },

  styles: {
    board: {
      border: '1px solid black',
      background: '#999',
      padding: 15,
      height: '100%',
      display: 'flex'
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
