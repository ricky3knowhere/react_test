import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

function ButtonLogout({logOut}){

  const history = useHistory()

  function onlogOut(){
    logOut()
    history.push('/login')
  }

  return (
    <button onClick={onlogOut}>Logout</button>
  )
}

const mapDispatchToProps = (dispatch) => (
  { logOut: () => dispatch({ type: 'LOGOUT'}) }
)

const connecting = connect(null, mapDispatchToProps)
const ConnectedButton = connecting(ButtonLogout)

export default ConnectedButton
