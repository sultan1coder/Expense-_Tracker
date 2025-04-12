import React from 'react'
import {
BrowserRouter as Router,
Routes,
Route,
Navigate,
} from "react-router-dom"
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login' exact element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App