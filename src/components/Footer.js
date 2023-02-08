import React, { Component } from 'react'
import '../styles/Footer.css'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
        <>
        <div className="footer">
      <div className='main-grid'>
            <div className="first-grid">
                <h1 className='heading'>Newsify</h1>
            </div>
            <div className="second-grid">
                <h4>Links</h4>
                
                <a href="/">Business</a>
                <a href="/">Entertainment</a>
                <a href="/">General</a>
                <a href="/">Health</a>
                <a href="/">Science</a>
                <a href="/">Sports</a>
                <a href="/">Technology</a>
            </div>
            <div className="third-grid">
              <h4>Support</h4>
                <a href="/">About US</a>
                <a href="/">Developer Contact</a>
                <a href="/">Help</a>
                <Link to="/terms-and-conditions">Terms and conditions</Link>
                <a href="/">Login</a>
            </div>
            
      </div>
      <div className='copyright'>Copyright @ 2022</div>
      </div>
      </>
    )
  }
}
