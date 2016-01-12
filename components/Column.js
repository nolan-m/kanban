import React from 'react';
import Card from './Card';

var Column = React.createClass({

  render: function(){
    var cards = [];

    this.props.cards.forEach(function (card, index) {
      cards.push(<Card key={'card'+index} task={card.task} index={index} />);
    });

    return (
      <div style={this.styles.column}>
        <h2>{this.props.title}</h2>
        { cards }
      </div>
    );
  },

  styles: {
    column: {
      border: '1px solid black',
      width: 300,
      height: '100%',
      padding: 15,
      marginBottom: 10,
      background: '#E3E3E3'
    }
  }

});

export default Column
