import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  
  const [personsState,setPersonsState] = useState({
      persons :[
        {name: "Uday" , age: 23},
        {name: "singh" , age: 26}
      ],
      otherState: 'some other state'
    });

    const swithNameHandler = () => {
      // console.log("clicked")
      setPersonsState({
          persons :[
            {name: "Uday" , age: 23},
            {name: "Pratap" , age: 25}
          ]
        });
    };

    return (
      <div className="App">
        <h1>Hi, I am uday</h1>
        <p>This is working</p>
        <button onClick={swithNameHandler}>Click Here</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I'm a Software Developer</Person>
      </div>
    );
}
export default App;


