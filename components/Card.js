import React from 'react';
import CardStore from '../stores/CardStore';

var Card = React.createClass({

  getInitialState: function () {
    return {
      editMode: false
    };
  },

  componentDidUpdate: function (prevProps, prevState) {
    // select input contents only if it is the first time entering edit mode
    if (this.refs.taskInput !== undefined && this.state.editMode !== prevState.editMode) {
      this.refs.taskInput.select();
    }
  },

  render: function(){
    return (
      <div style={this.styles.card}>
        { this.state.editMode ? 
          <div>
            <input ref='taskInput' value={this.props.task} onChange={this.changeTaskValue}></input>
            <div>
              <button onClick={this.toggleEdit}>Done</button>
            </div>
          </div>
          :
          <div>
            <p style={this.styles.task}>{this.props.task}</p>
            <div>
              <button onClick={this.completeTask}>Move to Next</button>
              <button onClick={this.toggleEdit}>Edit</button>
            </div>
          </div>
        }
      </div>
    );
  },

  /**
   * Toggles the edit state of a card.
   */
  toggleEdit: function () {
    this.setState({ editMode: !this.state.editMode });
  },

  /**
   * Handles change from task input field.  Changes the card task through the store.
   * @param {e} event
   */
  changeTaskValue: function (e) {
    CardStore.updateTask(this.props.columnIndex, this.props.cardIndex, e.target.value);
  },

  completeTask: function (e) {
    var toColumn = this.props.columnIndex + 1;
    CardStore.moveToColumn(this.props.columnIndex, this.props.cardIndex, e.target.value);
  },

  handleDrag: function (e) {
    console.log('drag');
  },

  styles: {
    card: {
      border: '1px solid black',
      width: 250,
      padding: 15,
      marginBottom: 10,
      background: '#F2F2F2'
    },
    task: {
      fontWeight: 700,
      margin: 5,
      fontSize: 18
    }
  }

});

export default Card
