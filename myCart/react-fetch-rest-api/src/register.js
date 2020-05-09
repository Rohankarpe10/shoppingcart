// render the sign up page

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
const $ = window.$;
class Register extends Component {
      constructor(props){
        super(props);
        this.state={
          email:'',
          password:''
          }
      } 
      handleClick(e){
        e.preventDefault();
        console.log("44444444444444");
        const newUser={        
          email:this.state.email,
          password:this.state.password,
        }
        console.log(newUser);
        const { history } = this.props;
        fetch('http://localhost:5000/signup', {        
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            "Content-Type": "application/json",
          },        
          body:JSON.stringify(newUser)
        }).then((res) => res.json())
          .then((data) =>  console.log(data))            
          .catch((err)=>console.log("this error triggered" + err))
          history.push("/login");            
      }
      render() {
        return (
          <div>
            <MuiThemeProvider>
              <div>              
                <h3>Register here!!</h3>
                <TextField
                  hintText="Enter your Email"
                  type="email"
                  floatingLabelText="Email"
                  onChange = {(event,newValue) => this.setState({email:newValue})}
                />              
                <TextField
                  type = "password"
                  hintText="Enter your Password"
                  floatingLabelText="Password"
                  onChange = {(event,newValue) => this.setState({password:newValue})}
                />              
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
export default Register;