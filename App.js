import React from 'react';
import Board from './components/Board';

var App = React.createClass ({
  render(){
    return (
      <div>
        <h1>Kanban</h1>
        <Board />
      </div>
    );
  }
});
export default App
