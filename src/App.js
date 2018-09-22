import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      peopleInSpace: []
    }
  }

  render() {
    console.log(this.state)
    return(
      <div>
        {this.state.peopleInSpace.map((person, index) => <h3 key={index}>{person.name}</h3>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(people => this.setState({peopleInSpace: people.people}))
  }

} // end of App class

export default App;
