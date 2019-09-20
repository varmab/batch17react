import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

import Counter from './Counter'
import Account from './Account'
import Friends from './Friends'
import Todos from './Todos'
import Users from './Users'
import Library from './library/Library'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="Batch 17" year={2020}/>
        </header>
        <Library/>
      </div>
    );
  }
}

export default App;


