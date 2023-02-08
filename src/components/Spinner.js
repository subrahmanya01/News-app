import React, { Component } from 'react'
import '../styles/Spinner.css'

export default class Spinner extends Component {
    render() {
        return (
            <div className='spinner-class'>
               <img src="spinner.gif" alt="spinner" />
            </div>
        )
    }
}
