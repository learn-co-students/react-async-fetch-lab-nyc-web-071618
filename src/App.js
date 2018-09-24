import React, {Component} from 'react'

const App = () => {

  componentDidMount(){
    return fetch("http://api.open-notify.org/astros.json")
            .then(resp=>resp.json())
            .then(json=>json)

  }

  render(){
    return (
      <div>

      </div>
    )
  }
}


export default App;
