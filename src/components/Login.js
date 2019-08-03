import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      errors: false,
      errorMessage: {password: '', email: ''}
    };
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(e) {
    e.preventDefault();
    const emailText = e.target.querySelector('input[type=email]').value;
    const passwordLength = e.target.querySelector('input[type=password]').value.length;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordError = '';
    let emailError = '';

    if (!emailRegex.test(emailText))  {  
      emailError = "You have entered an invalid email address";
    }  

    if (passwordLength < 6) {
      passwordError = "Your password must be at least 6 characters";
    }

    const errorMessages = {...this.state.errorMessage, password: passwordError, email: emailError};
    const errors = (passwordError === '' && emailError === '');
    this.setState({ errors: errors, errorMessage: errorMessages });
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="wrapper" >
        <div id="bg">
          <img src="https://cdn.goreadymade.com/ml/homepage/MainImage-1.jpg" alt="" />
        </div>
        <div className="row">
          <div className="column-2"></div>
          <div className="column-8">
            <form className="login" action="/login" onSubmit={this.validateForm} >
              <h1 className="login-title">Log In</h1>
              <div>
                <input type="email" className="login-input" placeholder="Email Address" autoFocus required/>
                <p className="error__message">{errorMessage.email}</p>
              </div>
              <div>
                <input type="password" className="login-input" placeholder="Password" required />
                <p className="error__message">{errorMessage.password}</p>
              </div>
              <input type="submit" value="Log In" className="login-button"/>
            </form>
          </div>
          <div className="column-2"></div>
        </div>
      </div>
    );
  }
}

export default Login;
