// create your App component here

import React,{Component} from 'react'
//import {fetch} from 'node-fetch'
export default class App extends Component {

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
            .then(resp=>resp.json())
            .then(json=>console.log("app data:",json))

  }

  render(){
    return (
      <div>

      </div>
    )
  }
}
