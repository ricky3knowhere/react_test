import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(){
  return (
    <nav>
      <Link to="/" >Root</Link> |
      <Link to="/login" >login</Link> |
      <Link to="/register" >Register</Link> |
      <Link to="/home" >Home</Link> |
      <Link to="/books" >Books</Link> |
    </nav>
  )
}

export default Navigation
