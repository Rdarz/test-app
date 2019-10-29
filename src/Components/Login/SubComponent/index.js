import React, { Component } from 'react';
import './../style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
    }
  }

  componentDidMount = () => {
    const { setUserDetails, loggedIn } = this.props
    if( loggedIn === true ){
      this.props.history.push('/home')
    } else {
      setUserDetails({
        username:'shaadi',
        password:'123'
      })
    }
  }
  
  onUserNameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  onSubmit = () => {
    const { username, password } = this.state
    const { userCredential, setLoggedIn } = this.props
    if ( 
      username === userCredential.username && 
      password === userCredential.password){
      setLoggedIn(true)
      this.props.history.push('/home')
    } else {
      setLoggedIn(false)
      this.setState({
        error: 'Please check username & password again.'
      })
    } 
  }

  render() {
    const { username, password, error } = this.state

    return (
      <div className="login">
        <div className="login-box">
          <div className="text-header">
            Please Login...
          </div>
          <div className="form">
            <div className="form-input">
              <div className="label">
                Username
              </div>
              <input type="text" placeholder="Username" value={username} onChange={this.onUserNameChange}/>
            </div>
            <div className="form-input">
              <div className="label">
                Password
              </div>
              <input type="password" placeholder="Password" value={password} onChange={this.onPasswordChange}/>
            </div>
            <div className="form-submit">
              {
                error &&
                <div className="error-text">{error}</div>
              }
              <button type="button" onClick={this.onSubmit} >Log In</button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Login;
