import React from 'react'
import Header from './components/Header'
import Navabar from './components/Navabar'
import News from './components/News'
import Footer from './components/Footer'
import Terms from './components/Terms'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  
  return (
    <div>
      <Router>
      <Header/>
      <Navabar/>
      <Routes>
         
        <Route exact path='/' element={<News key={'general'} category='general'/>}></Route>
        <Route exact path='/general' element={<News key={'general'} category='general'/>}></Route>
        <Route exact path='/business' element={<News key={'business'} category='business'/>}></Route>
        <Route exact path='/entertainment' element={<News key={'entertainment'} category='entertainment'/>}></Route>
        <Route exact path='/health' element={<News  key={'helath'} category='health'/>}></Route>
        <Route exact path='/science' element={<News key={'science'} category='science'/>}></Route>
        <Route exact path='/sports' element={<News key={'sports'} category='sports'/>}></Route>
        <Route exact path='/technology' element={<News key={'technology'} category='technology'/>}></Route>
        <Route exact path='/terms-and-conditions' element={<Terms/>}></Route>
        

      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}
