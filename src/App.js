import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleDetails: ''
    }
  }

  render(){
    return(
      <div>
        Hello
        {this.state.peopleDetails}
      </div>
    )
  }
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      let people = data.people

      let peopleDetails = people.map((person) => {
        return <div key={person.name}>{person.name + ' has a craft of ' + person.craft + '.'}</div>
      })

      this.setState({
        peopleDetails: peopleDetails
      })
      // console.log(data.people)
    })
  }
}
// create your App component here

export default App
