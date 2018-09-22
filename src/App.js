// create your App component here
import React, { Component } from 'react';

export default class App extends Component{

state = {
  peopleInSpace: []
}

componentDidMount(){
  fetch('http://api.open-notify.org/astros.json').then(res => res.json()).then(({people}) => this.setState({ peopleInSpace: people }))
}


  render(){
    return(
      <div>
        {this.state.peopleInSpace.map((person, idx) => <h1 key={idx}>{person.name}</h1>)}
      </div>
    )
  }
}
