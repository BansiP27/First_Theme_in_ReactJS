// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//       super(props);
      
//       this.state = {
//         name: '',
//         email: '',
//         contact: '',
//         city: ''
//       }
//    }

//   handleChange = (event) => {
//        this.setState({[event.target.name] :  event.target.value });
//    }


//   handleSubmit = (event) => {

//         alert("Name is " + this.state.name + 
//               ", Email is " + this.state.email + 
//               ", Contact Number is " + this.state.contact + 
//               ", City is " + this.state.city + ".");
//         event.preventDefault(); //Function Will Print Data as it is
//     }
   
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input type = "text" name='name' placeholder='Enter Name' value = {this.state.name} onChange = {this.handleChange} />
//           <input type = "email" name='email' placeholder='Enter Email' value = {this.state.email} onChange = {this.handleChange} />
//           <input type = "text" name='contact' placeholder='Enter Contact Number' value = {this.state.contact} onChange = {this.handleChange} />
//           <input type = "text" name='city' placeholder='Enter City' value = {this.state.city} onChange = {this.handleChange} />
//           <input type="submit"></input>
//         </form>
//             {/* <h4>{this.state.textdata}</h4> */}
//       </div>
//       );
//    }
// }
// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './style.css';

import Home from './Home'; 
import About from './About'; 

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Link to={'/'}></Link>
      <Link to={'/about'}></Link>
       <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/about' component={About} /> 
       </Switch>
     </div>
     </Router>
    );
  }
}
export default App;