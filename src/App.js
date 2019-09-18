import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

import Counter from './Counter'
import Account from './Account'
import Friends from './Friends'
import Todos from './Todos'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome year={2020} isNew={true}/>
          <Welcome title="Varma" year={2020}/>
        </header>
        <Todos/>
      </div>
    );
  }
}

export default App;


