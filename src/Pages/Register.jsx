import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import { registerUser } from '../Services/allApi';
import { useNavigate } from 'react-router';
import validator from "validator";


function Register() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: null,
    username: null,
    phone: "",
    email: null,
    password: null
  })

  const handleRegister = async(e) => {
    e.preventDefault()
    if (user.phone.length !== 10) {
      alert("Please enter valid phone number")
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(user.email)) {
        alert("Enter valid email")
      } else {
        const result = await registerUser(user)
        console.log(result);
        alert("Registration Success")
        navigate("/login")
      }
      
    }
  }
  
  return (
    <div className='container register-form d-flex flex-column justify-content-center' style={{height: '100dvh'}}>
      <h2 className='text-center pb-3'>Register</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter name" style={{height: '4rem'}} className='rounded-4' onChange={(e) => setUser({...user, name: e.target.value})} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="email" placeholder="Enter email" style={{height: '4rem'}} className='rounded-4' onChange={(e) => setUser({...user, email: e.target.value})} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Enter phone number" style={{height: '4rem'}} className='rounded-4' onChange={(e) => setUser({...user, phone: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Enter username" style={{height: '4rem'}} className='rounded-4' onChange={(e) => setUser({...user, username: e.target.value})} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Enter password" style={{height: '4rem'}} className='rounded-4' onChange={(e) => setUser({...user, password: e.target.value})} />
        </Form.Group>

        <Button variant="primary" type="submit" style={{height: '3rem', fontWeight: '500'}} className='rounded-4 px-5 mx-auto d-block' onClick={(e) => handleRegister(e)}>
          Register
        </Button>
      </Form>
    </div>
  )
}

export default Register