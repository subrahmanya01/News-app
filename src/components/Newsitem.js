import React, { Component } from 'react'
import '../styles/Newsitem.css'

export default class Newsitem extends Component {
  
    
  render() 
  {
    let {imageurl,news_title,news_desc,news_auth,news_url,source_name}=this.props;
    
    return (
        <div className='news-card'>
        <div className='site-info'>{source_name}</div>
        <img src={!imageurl?'blank.jpg':imageurl} alt="news" id='card-image'/>
        <h4 id='card-title'>"{news_title}"</h4>
        <p className='card-desc'>{news_desc}</p>
        <h5 className='card-sub'><b className='card-auth'>Auther:</b> {news_auth}</h5>
        <a href={news_url}><div className='read-more'>Read More</div></a>
      </div>
    )
  }
}
