import React from 'react';
import Card from './components/Card';

var App = React.createClass ({
  render(){
    return (
      <div>
        <h1>Kanban</h1>
        <Card task={'do some work'} />
      </div>
    );
  }
});
export default App
