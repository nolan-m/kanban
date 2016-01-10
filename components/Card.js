import React from 'react';

var Card = React.createClass({
  render: function(){
    return (
      <div style={this.styles.card}>
        <p style={this.styles.task}>{this.props.task}</p>
      </div>
    );
  },

  styles: {
    card: {
      display: 'inline-block',
      border: '1px solid black',
      width: 250,
      padding: 15,
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
