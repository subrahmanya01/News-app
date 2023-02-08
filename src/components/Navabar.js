import React, { Component } from 'react'
import '../styles/Navbar.css'
import {
    Link
  } from "react-router-dom";
export default class Navabar extends Component {

    handinp=(event)=>
    {
        console.log(event.value);
    }
    
    render() {
        return (
            <div className='nav-main'>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">Newsify</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="/">Home</a></li>

                                {/* If you want drop down later enable this */}


                                {/* <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="/">About Us <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/">P</a></li>
                                        <li><a href="/">Page 1-2</a></li>
                                        <li><a href="/">Page 1-3</a></li>
                                    </ul>
                                </li> */}
                                <li><Link to='/business'>Business</Link></li>
                                <li><Link to='/entertainment'>Entertainment</Link></li>
                                <li><Link to='/general'>General</Link></li>
                                <li><Link to='/health'>Health</Link></li>
                                <li><Link to='/science'>Science</Link></li>
                                <li><Link to='/sports'>Sports</Link></li>
                                <li><Link to='/technology'>Technology</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="options">
                        <form >
                            <label htmlFor="country" >Select Country: </label>
                            <select  name='country' id='country' >
                                <option value="in" onClick={this.handinp}>India</option>
                                <option value="us">US</option>
                            </select>
                            <label htmlFor="pagesize">Select pagesize:</label>
                            <select name="pagesize" id="pagesize">
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="18">18</option>
                                <option value="24">24</option>
                                <option value="30">30</option>
                                <option value="36">36</option>
                                <option value="42">42</option>
                                <option value="48">48</option>
                                <option value="54">54</option>
                            </select>
                        </form>
                </div>
            </div>
        )
    }
}
