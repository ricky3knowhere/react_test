import React, { useState} from 'react'
import { register } from '../service/api'
import { connect } from 'react-redux'

function Register(){

  const [data, setData] = useState({email: '', password: ''});

  function getEmail(e){
    setData((data) => {
      data.email = e.target.value
      return data
    })
  }

  function getPassword(e){
    setData((data) => {
      data.password = e.target.value
      return data
    })
  }

  return(
    <div>
      <h3>Form Register</h3>
      <form>
        Email : <input name="email" onChange={getEmail} /><br /><br />
        Password : <input name="password" onChange={getPassword} /><br /><br />
        <button type="button" onClick={()=> register(data)} >Register</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => (
  { user: state.user }
  )
const mapDispatchToProps = (dispatch) => (
  { login: () => dispatch({ type: 'LOGIN'}) }
  )

  const connecting = connect(mapStateToProps, mapDispatchToProps)
  const ConnectedRegister = connecting(Register)

export default ConnectedRegister
