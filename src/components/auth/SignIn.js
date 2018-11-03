
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authAction'

export class SignIn extends Component {
    state = {
      email: '',
      password: ''
    }

    handleChange = (e) =>{
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) =>{
     e.preventDefault();
     this.props.signIn(this.state);
      this.props.history.push('/');
 
     
    }

  render() {
    const { authError } = this.props;
    const redirect = () =>{
      this.props.history.push('/signup');
    }
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <button onClick={redirect} className="btn blue lighten-1 z-depth-0">SignUp</button>
            <div className="center red-text">
              { authError ? <p >{authError}</p> : null }
            </div>
          </div>
        </form>
        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError
  }
}
const mapDispachToProps = (dispatch) =>{
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispachToProps)(SignIn)
