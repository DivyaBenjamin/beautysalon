import React from 'react'
import { Route, Routes } from 'react-router-dom' 
import Userreg from './Userreg' 
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/Userreg/*' element={<Userreg/>}/>
      </Routes>
    </div>
    
  )
}

export default App