// create your App component here
import React, { Component } from 'react';
import Button from './components/Button';
import ExampleComponent from './components/ExampleComponent';
import Greeting from './components/Greeting';

class App extends Component {
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then()
  }
  render() {
    return(
      <div>
      <Button />
      <ExampleComponent />
      <Greeting />
      </div>
    )
  }
}

export default App