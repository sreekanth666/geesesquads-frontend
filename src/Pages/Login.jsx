import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../Services/allApi';

function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleLogin = async(e) => {
    e.preventDefault()
    const result = await loginAPI(user)
    console.log(result);
    if (result.status === 200) {
      navigate('/dashboard')
    } else {
      alert("Username of password is incorrect")
    }
  }
  return (
    <div className='container register-form d-flex flex-column justify-content-center' style={{height: '100dvh'}}>
      <h2 className='text-center pb-3'>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Enter username" style={{height: '4rem'}} className='rounded-4' onChange={(e) => setUser({...user, username: e.target.value})} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Enter password" style={{height: '4rem'}} className='rounded-4' onChange={(e) => setUser({...user, password: e.target.value})} />
        </Form.Group>

        <Button variant="primary" type="submit" style={{height: '3rem', fontWeight: '500'}} className='rounded-4 px-5 mx-auto d-block' onClick={(e) => {handleLogin(e)}}>
          Login
        </Button>
      </Form>
      <p className='text-center mt-3' style={{textDecoration:'none',fontSize:'small'}}>Don't have and account? <Link to={'/register'}>Register</Link></p>
    </div>
  )
}

export default Login