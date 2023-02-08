import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <>
            <div>
                <div className="container">
                    <div className="main">
                        <h1>Login</h1>
                        <form action="" autocomplete="off">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password">
                            <br>
                            <input type="checkbox" name="show" id="show" className="showpass">
                            <label htmlFor="show" className="showp">Show password</label>
                            <button type="submit" id="button" >Login</button>

                            <a href="#">Forgot Password?</a>
                            <a href="#">Create account</a>
                            <a href="#">Sign in</a>
                         </form>
                    </div>
                </div>
            </div>
            </>
    )
  }
}
