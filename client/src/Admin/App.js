import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddWork from './AddWork'
import Staffreg from './Staffreg'
import Typesofservice from './Typesofservice'
const App = () => {
  return (
    <Routes>
    <Route path='/AddWork' element={<AddWork/>}/>
    <Route path='/Staffreg' element={<Staffreg/>}/>
    <Route path='/Typesofservice' element={<Typesofservice/>}/>
    </Routes>
  )
}

export default App