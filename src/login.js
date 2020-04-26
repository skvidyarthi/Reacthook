import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Fade  } from 'reactstrap';

class Login extends Component {
    constructor(props){
    super(props);
    this.state={
        username: '',
        password: '',
        error: '',
    }
this.handleUserChange = this.handleUserChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.handlePassChange = this.handlePassChange.bind(this);
this.dismissError = this.dismissError.bind(this);
}



// simple way submit
handleSubmit(evt) {
    evt.preventDefault();
     if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    return this.setState({ error: '' });
  }



    handleUserChange(evt) {
        this.setState({
          username: evt.target.value,
        });
      };
    
      handlePassChange(evt) {
        this.setState({
          password: evt.target.value,
        });
      }

      dismissError() {
        this.setState({ error: '' });
      }

render() {
    return (    
        
            <div className=" container Login">
              <Form onSubmit={this.handleSubmit}>
              {
                this.state.error &&
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              }
              <FormGroup>
                <label>User Name</label>
                <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                </FormGroup>
                <FormGroup>
                <label>Password</label>
                <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
                </FormGroup>
                <Button>login</Button>
                </Form>
            </div>
          );

  
}
}

export default Login;


