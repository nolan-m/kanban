import React from 'react';
import Card from './Card';
import KanbanStore from '../stores/KanbanStore';

var Column = React.createClass({

  getInitialState: function () {
    return { editMode: false };
  },

  render: function(){
    var cards = this.props.cards.map(function (card, index) {
        return <Card key={'card'+index} task={card.task} cardIndex={index}  columnIndex={this.props.index} />;
      }, this);

    return (
      <div style={this.styles.column}>
        { this.state.editMode ? 
          <div>
            <input style={this.styles.input} onChange={this.handleNameChange} value={this.props.title}></input>
            <button style={this.styles.doneButton} onClick={this.toggleEditMode}>Done</button>
          </div>
        :
          <h2 style={this.styles.click} onClick={this.toggleEditMode}>{this.props.title}</h2>
        }

        { cards }
      </div>
    );
  },

  toggleEditMode: function () {
    this.setState({ editMode: !this.state.editMode });
  },

  handleNameChange: function (e) {
    KanbanStore.setColumnTitle(this.props.index, e.target.value);
  },

  styles: {
    column: {
      border: '1px solid black',
      width: 300,
      height: '100%',
      padding: 15,
      margin: '0 auto',
      background: '#E3E3E3',
      float: 'left'
    },
    input: {
      width: '100%',
      marginBottom: 10
    },
    click: {
      cursor: 'pointer'
    },
    doneButton: {
      float: 'right',
      height: 24,
      fontSize: 12,
      padding: 5,
      cursor: 'pointer'
    },
  }

});

export default Column
