import React from 'react'
import Button from './components/Button'
import ExampleComponent from './components/ExampleComponent'
import Greeting from './components/Greeting'

class App extends React.Component {
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => console.log(data))
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
