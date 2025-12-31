import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Serviceform from './components/Serviceform'
import { Logout } from './pages/Logout'
import AdminRoute from './components/admin/AdminRoute'
import User from './components/admin/User'
import ContactData from './components/admin/ContactData'
import AdminProtectedRoute from './components/admin/AdminProtectedRoute'
import Error from './components/Error'
function App() {

  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/register' element={<Register />} />
        <Route path="serviceform" element={
          <AdminProtectedRoute>
            <Serviceform />
          </AdminProtectedRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<Error />} />

        <Route path="/admin" element={
          <AdminProtectedRoute>
            <AdminRoute />
          </AdminProtectedRoute>
        }>
          <Route path="user" element={<User />} />
          <Route path="contactdata" element={<ContactData />} />
        </Route>


      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App
