import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Navigation from './Navigation/Navigation';
//import person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { id: '1', name: 'sanchit', age: 28 },
      { id: '2', name: 'ankit', age: 32 },
      { id: '3', name: 'hitu', age: 63 }
    ],
    showPersons: false
  }
  toggelPersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.person;
    const persons = [...this.state.person];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  changeHandler = (event, id) => {
    
    /*const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });*/
    console.log("clicked",id);
    const person = {
      ...this.state.person[id]
    };
    console.log(person);
    
   // person.name = event.target.value;


    //this.setState({
      //person: person
    //})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.person.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changeHandler(event, person.id)} />
            })
          }
        </div>
      )
      style.backgroundColor = 'red';
    }
    let classes = [];
    if (this.state.person.length <= 2) {
      classes.push('red')
    }
    if (this.state.person.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <Navigation />
        <h1>Hello is my first react</h1>
        <p className={classes.join(' ')}>It is working !!</p>
        <button
          style={style}
          onClick={this.toggelPersonHandler}>Toggel Persons
      </button>
        {persons}

      </div>

    )
  }
}

export default App;
