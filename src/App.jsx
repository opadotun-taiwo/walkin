import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './pages/Profile'
import AllDeals from './pages/AllDeals'
import Singledeal from './pages/Singledeal'
import Singledealproduct from './pages/Singledealproduct'


function App() {

  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/alldeals' element={<AllDeals />}/>
        <Route path='/viewmore' element={<Singledeal />}/>
        <Route path='/viewmoreproduct' element={<Singledealproduct />}/>
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute> }/>
      </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
