//render login page 

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
const $ = window.$;
class Login extends Component {
    constructor(props)
    {
      super(props);
      this.state={
      email:'',
      password:'',
      }
    }
    handleClick(e)
    {
        e.preventDefault();
        const User={
        email:this.state.email,
        password:this.state.password,        
        }
        console.log(User);
        const { history } = this.props;
        fetch('http://localhost:5000/login', 
        {        
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(User)
        }).then((res) => res.json())
          .catch((err) => console.log("this error triggered" + err))              
    }  
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
              <br/>
              <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <h3>Login here!!</h3>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <button className="btn btn-outline-light bg-primary my-2 my-sm-0" type="submit" onClick={(event) => this.handleClick(event)}>Submit</button>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Login;