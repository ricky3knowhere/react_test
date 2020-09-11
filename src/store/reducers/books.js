const intialState = {
  accessToken: '',
  loggedin: false,
  id: null,
  email: null,
  exp: null
}

export default function user(state = intialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      const { loggedin, ...rest} = action
      return { loggedin: true , ...rest}
    }
    case 'LOGOUT': {
      const { loggedin, ...rest} = state
      return { loggedin: false , ...rest}
    }
    default:
      return state
  }
}
