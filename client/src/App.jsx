import React, { useEffect } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { userApi } from './api/usersApi'
import { logOutUser, updateUser } from './features/user/userSlice'
import { auth } from './firebase/firebase.utils'
import Router from './Router'
import Layout from './components/layout'
import SignInPage from './pages/SignInPage'

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const user = useSelector(state => state.user)

  useEffect(() => {
    onAuthStateChanged(auth, async (userLogged) => {
      if (userLogged) {
        // TODO: this don't work the authentication require changes
        const user = await userApi.getByUid(userLogged.uid)
        dispatch(updateUser(user))
        navigate('/')
      } else {
        navigate('/login')
        dispatch(logOutUser())
      }
    })
  }, [])

  if (location.pathname === '/login' || !!user.current) {
    return <SignInPage />
  }

  return (
    <div className='bg-slate-50 min-h-screen overflow-clip p-4'>
      <Layout>
        <Router />
      </Layout>
    </div>
  )
}

export default App
