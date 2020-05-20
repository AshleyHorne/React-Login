import React, { Component } from "react";
import'./styles.css';

class App extends Component {


  
 state = {
   isOn: false,
   imageURL:
    'https://www.booksie.com/files/profiles/22/mr-anonymous.png'
  }

switch = () =>{
  this.switchImage()
 console.log('click')
  this.setState(state => ({
    isOn:  !state.isOn
  }));
}

switchImage=()=>{
 

  if(this.state.imageURL === 'https://www.booksie.com/files/profiles/22/mr-anonymous.png')
         this.setState({imageURL:'https://66.media.tumblr.com/2cc73ba385510f2301e5c053bdb3e6eb/tumblr_neahl0jnrF1rogx6xo1_400.png'})
     else
         this.setState({imageURL:'https://www.booksie.com/files/profiles/22/mr-anonymous.png'})
  }

 /*  componentDidMount =() =>{
    setTimeout(()=>{
      this.setState(prevState => {
        return{
          load: false
        }
      });
    }, 5000);
  } */

render(){
  return(
    <div>
      <div class='log'>
       <img src= {this.state.imageURL}/>
      <h1>{this.state.isOn ? 'Welcome User':'Thank you for visiting'}</h1>
  <button onClick = {this.switch}>{this.state.isOn ? 'logout': 'login'}</button>
  </div>
    </div>
  )
}

};
export default App;