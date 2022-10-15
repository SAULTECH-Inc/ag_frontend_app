import React from 'react';
import { ag_background } from '../../assets/images';
import './login.css';

const LoginView = () => {
  return (
    <div className='login'>
        <div className='loginWrapper'>
          <img src={ag_background} alt='' className="loginImg"/>
            <div className="loginBox">
              <h1 className='loginText'>LOGIN</h1>
              <div className="border_bottom"></div>
              <input placeholder="Email" type="email" className="loginInput" />
              <input placeholder="Password" type="password" className="loginInput" />
              <span className="loginForgotPassword">Forgot Password?</span>
              <button className="loginButton">Log in</button>
              
            </div>
        </div>
    </div>
  )
}

export default LoginView
