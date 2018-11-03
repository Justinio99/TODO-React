import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authAction'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    passwordRepeat: '',
    firstName: '',
    lastName: '',
    error: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.password == this.state.passwordRepeat){
      this.props.signUp(this.state);
    }else{
      alert("Password Does Not Match");
      this.inputPasswordRep.value = '';
      this.inputPassword.value = '';
    }
    
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange}  ref={el => this.inputPassword = el}/>
          </div>
          <div className="input-field">
            <label htmlFor="passwordRepeat">Password Repeat</label>
            <input type="password" id='passwordRepeat' onChange={this.handleChange} ref={el => this.inputPasswordRep = el}/>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : <p>{}</p> }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)