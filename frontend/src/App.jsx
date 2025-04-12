import React from 'react'
import {
BrowserRouter as Router,
Routes,
Route,
Navigate,
} from "react-router-dom"
import Login from './pages/auth/Login';
import signUp from "./pages/auth/signUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/signUp' exact element={<signUp />} />
          <Route path='/dashboard' exact element={<Home />} />
          <Route path='/income' exact element={<Income />} />
          <Route path='/expense' exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App