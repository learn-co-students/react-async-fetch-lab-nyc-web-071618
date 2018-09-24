// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    astros: []
  }

  render() {
    return (
      <div>
      { this.state.astros.map((person, idx) => <h1 key={idx}> {person.name} </h1> )  }
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(r => r.json())
    .then(({people})=>{
      this.setState({
        astros: people
      })
    })
  }

}
