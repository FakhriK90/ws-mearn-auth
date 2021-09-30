import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {currentUser,logout} from '../../redux/action/actions'
const Dashboard = () => {
    const history=useHistory()
const dispatch=useDispatch()
    useEffect(() => {
        dispatch(currentUser())
    }, [])
    const user = useSelector(state => state.userReducer.user)
    const loading = useSelector(state => state.userReducer.loading)

    return (
        loading?<h1>loading...</h1>:
        <div>
<button onClick={()=>{dispatch(logout());history.push("/login")}}>Logout</button>
           <h1>Welcome {user&&user.name}</h1>
        </div>
    )
}

export default Dashboard
