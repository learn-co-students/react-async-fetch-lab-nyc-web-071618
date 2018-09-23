import React, { Component } from 'react'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            astronauts:null
        }
    }


    render(){
        
        return(
            <div>
                {this.state.astronauts}
            </div>
        );
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res=>res.json())
        
    }


} // end of App class

export default App