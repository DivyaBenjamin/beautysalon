import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/App'
import Guest from './Guest/App'
import User from './User/App'
import Shop from './Shop/App'

const App = () => {
  return (
    <Routes>
        <Route path='/*' element={<Guest/>}/>
        <Route path='/User/*' element={<User/>}/>
        <Route path='/Admin/*' element={<Admin/>}/>
        <Route path='/Shop/*' element={<Shop/>}/>
    </Routes>
  )
}

export default App