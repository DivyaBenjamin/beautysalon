import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Blog from './Blog'
import Feedback from './Feedback'
import Contactus from './Contact'
const App = () => {
  return (
    <div>
      <div className='Header'>
      <Header/>
      </div>
    
      <div className='Navbar'>
        
      </div>
      <div className='Home'>
        
      </div>
    
    <Routes>
        <Route path='/Blog/*' element={<Blog/>}/>
        <Route path='/Feedback/*' element={<Feedback/>}/>
        <Route path='/Contactus/*' element={<Contactus/>}/>
    </Routes>
    </div>
  )
}

export default App