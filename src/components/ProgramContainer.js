import React, {Component} from 'react';

class ProgramContainer extends Component {
 constructor(){
   super();
   this.state = {
     wod: {}
   }
 }
      componentDidMount(){
        fetch('/api/wod')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({wod:data});
            setTimeout(() => console.log("state", this.state.wod), 4000)
          })
        .catch(err => console.log("err"))

    }

    render(){
      return(
        <div>
          {this.state.wod.data ? this.state.wod.data : ''}
        </div>
      )
    }


}
export default ProgramContainer
