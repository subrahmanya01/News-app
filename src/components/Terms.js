import React, { Component } from 'react'
import '../styles/News.css'

export default class Terms extends Component {
  render() {
    return (
      <div className='container-main1'>
        <h3>Terms and Conditions For the Newsify:</h3>
        <p className='paragraph'>The Newsify news application is api based application we are the one who developed this application is not maintaining the news updates. If any news regarding religious or any fake news subjected to any threatening or causing problems will not be taken care by us, we are just showing information through this rect based application.</p>
        <h3>Cockies and Other Data</h3>
        <p className='paragraph'>We are not using any cockies and other user data for giving best expirience to the user yet.
            This is Just frontend application wich will take the data from news api and render it on screen.
          In future we may use user cockies data and other browser data for the betterment of user experience.
        </p>
        <h3>Copyrights</h3>
        <p className='paragraph'>This is the followed up Project from the youtube channel code with harry. Learned things which are thought in the videos and implemented own code and styling by my side.</p>
      </div>
    )
  }
}
