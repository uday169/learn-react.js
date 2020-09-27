import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  state = {
    persons :[
      {name: "Uday" , age: 26},
      {name: "Singh" , age: 25}
    ]
  }

  swithNameHandler = () => {
    // console.log("clicked")
    this.setState(
      {
        persons :[
          {name: "Uday" , age: 23},
          {name: "Pratap" , age: 25}
        ]
      }
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am uday</h1>
        <p>This is working</p>
        <button onClick={this.swithNameHandler}>Click Here</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I'm a Software Developer</Person>
      </div>
    );
  }
}


export default App;
