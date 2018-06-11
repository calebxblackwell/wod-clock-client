import React, {Component} from 'react'

class ProgramContainer extends Component {
 constructor(){
   super();
   this.state = {
     wod: []
   }
 }
      componentDidMount(){
        fetch('/api/wod')
        .then(wod => console.log(wod))
        .then(results => results.json())
        .then(data => {
          let wod = data.results.map(data);
          this.setState({wod:wod});
          console.log("state", this.state.wod);
        })
        .catch(err => console.log(err));

    }

    render(){
      return(
        <div>
          {this.state.wod}
        </div>
      )
    }


}
export default ProgramContainer
