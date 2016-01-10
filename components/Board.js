import React from 'react';
import Card from './Card';

var Board = React.createClass({
  render: function(){
    return (
      <div style={this.styles.board}>
        <Card task={'do some work'} />
      </div>
    );
  },

  styles: {
    board: {
      border: '1px solid black',
      background: '#999',
      padding: 15
    }
  }

});

export default Board
