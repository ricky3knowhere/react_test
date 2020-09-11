import React, { useState} from 'react'
import { onlogin } from '../service/api'
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'

function Login({login}){

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

  function onLogin(){
    onlogin(data).then((res) => {
    if(res.status === 200){
      const { accessToken } = res.data
      const decoded = jwtDecode(accessToken)
      const {sub: id, exp, email } = decoded
      const params = { id, exp, email, accessToken }
      login(params)
    }
  })
  }

  return(
    <div>
      <h3>Form Login</h3>
      <form>
        Email : <input name="email" onChange={getEmail} /><br /><br />
        Password : <input name="password" onChange={getPassword} /><br /><br />
        <button type="button" onClick={onLogin}>Login</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => (
  { user: state.user }
  )
const mapDispatchToProps = (dispatch) => (
  { login: (params) => dispatch({ type: 'LOGIN', ...params}) }
  )

  const connecting = connect(mapStateToProps, mapDispatchToProps)
  const ConnectedLogin = connecting(Login)
export default ConnectedLogin
