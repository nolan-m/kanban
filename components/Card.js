import React from 'react';
import CardStore from '../stores/CardStore';

var Card = React.createClass({

  getInitialState: function () {
    return {
      editMode: false
    };
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
              <button onClick={this.toggleEdit}>Edit</button>
            </div>
          </div>
        }
        
      </div>
    );
  },

  toggleEdit: function toggleEdit () {
    this.setState({ editMode: !this.state.editMode })
  },

  changeTaskValue: function changeTaskValue (e) {
    CardStore.updateTask(this.props.index, e.target.value);
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
