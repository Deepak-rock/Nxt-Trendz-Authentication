// Write your JS code here
import {Component} from 'react'
import './index.css'

/*  
  username: rahul
  password: rahul@2021 
*/

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMassage: false,
  }

  submitedSuccessfuly = () => {
    const {history} = this.props
    history.push('/')
  }

  renderError = () => {
    const {errorMassage} = this.state
    return (
      <>{errorMassage ? <p className="error">*Username is not found</p> : ''}</>
    )
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.submitedSuccessfuly()
    } else {
      this.setState({errorMassage: true})
    }
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="login-page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <div className="logo-page-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="image"
          />
        </div>
        <form className="login-form" onSubmit={this.onSubmitLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-lg"
          />
          <label className="label" htmlFor="username">
            USERNAME
          </label>
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            placeholder="Username"
            onChange={this.onChangeUsername}
          />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={this.onchangePassword}
          />
          <button className="login-button" type="submit">
            Login
          </button>
          {this.renderError()}
        </form>
      </div>
    )
  }
}
export default LoginForm
