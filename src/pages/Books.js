import React, { useEffect, useState} from 'react'
import { books } from '../service/api'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Books(){

  const accessToken = useSelector(state => state.user.accessToken)
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    console.log(accessToken);

    if(accessToken){
      books(accessToken).then((res) => setData(res.data))
    }else{
      dispatch({ type: 'LOGOUT' })
      history.push('/login')
    }
  });
  return (
    <div>
      {
        data.map((el) => <h3>{el.title}</h3>)
      }
    </div>
  )
}

export default Books
