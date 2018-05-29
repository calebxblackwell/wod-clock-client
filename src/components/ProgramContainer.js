import React, { Component } from 'react';

class programContainer extends Component  {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <ul>
          {this.props.GymProgram.map((name, id)=> {
            <li key={id}>""</li>
          })
        }
        </ul>
      </div>
    )
  }
}
export default programContainer



// So in order to do that I would recommend creating a
//component, like ProgramModule and have it receive the information
//you want to display for each program as props.
//Then you need to create a variable called something like `programs` and
//assign it to `this.props.GymProgram.map(program => 
//return <ProgramModule name='program.name' and so on/>)`
