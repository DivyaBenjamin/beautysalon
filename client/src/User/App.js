import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feedback from './Feedback'
import Contactus from './Contact'
const App = () => {
  return (
<Routes>
        <Route path='/Feedback/*' element={<Feedback/>}/>
        <Route path='/Contactus/*' element={<Contactus/>}/>
    </Routes>
  )
}

export default App