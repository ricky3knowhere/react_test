import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://localhost:4000'
})


function register(data){
  return api.post('/register',data)
}

function onlogin(data){
  return api.post('/login',data)
}

function books(accessToken){
  const config = { headers: { Authorization: `Bearer ${accessToken}` } }
  return api.get('/books', config)
}

export {
  register,
  onlogin,
  books
}
