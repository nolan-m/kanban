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
            <input style={this.styles.taskInput} ref='taskInput' value={this.props.task} onChange={this.changeTaskValue}></input>
            <div>
              <button style={this.styles.editButton} onClick={this.toggleEdit}>Done</button>
            </div>
          </div>
          :
          <div>
            <div style={this.styles.task}><span style={this.styles.click} onClick={this.toggleEdit}>{this.props.task}</span></div>

            <div style={this.styles.navContainer}>
              <button style={this.styles.navPrevButton} onClick={this.moveToColumn.bind(this, this.props.columnIndex - 1)}>Move to Previous</button>
              <button style={this.styles.navNextButton} onClick={this.moveToColumn.bind(this, this.props.columnIndex + 1)}>Move to Next</button>
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

  /**
   * Handles moving a card to either previous or next column based on given column index
   * @param {e} toColumn - column index to move card to
   */
  moveToColumn: function (toColumn) {
    CardStore.moveToColumn(toColumn, this.props.columnIndex, this.props.cardIndex);
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
      background: '#F2F2F2',
      display: 'inline-block'
    },
    task: {
      fontWeight: 700,
      margin: 5,
      fontSize: 18
    },
    taskInput: {
      width: '100%',
      marginBottom: 10
    },
    click: {
      cursor: 'pointer'
    },
    editButton: {
      float: 'right',
      height: 24,
      fontSize: 12,
      padding: 5,
      cursor: 'pointer'
    },
    navContainer: {
      marginTop: 20
    },
    navPrevButton: {
      float: 'left',
      height: 24,
      fontSize: 12,
      padding: 5,
      cursor: 'pointer'
    },
    navNextButton: {
      float: 'right',
      height: 24,
      fontSize: 12,
      padding: 5,
      cursor: 'pointer'
    }
  }

});

export default Card
