import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { signInUser } from '../../features/user/user.thunks'
import {
  FacebookLogIn,
  GoogleLogIn
} from './'
import Form from './Form'
import FormTitle from './FormTitle'
import InputText from './InputText'

const LogIn = () => {
  const dispatch = useDispatch()

  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signInUser(credentials))
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6
      space-y-10 h-full'
    >
      <Form onSubmit={handleSubmit}>
        <FormTitle title='Log-in' />
        <InputText
          value={credentials.email}
          handleChange={handleChange}
          displayText='Email'
          name='email'
          type='email'
        />
        <InputText
          value={credentials.password}
          handleChange={handleChange}
          displayText='Password'
          name='password'
          type='password'
        />
        <button type='submit' className='button mx-auto'>Log in</button>
      </Form>
      <div className='flex flex-col gap-2'>
        <div className='w-full relative mb-2'>
          <hr />
          <div className='text-center -translate-y-3 w-6 bg-white mx-auto'>
            OR
          </div>
        </div>
        <GoogleLogIn />
        <FacebookLogIn />
      </div>
    </div>
  )
}

export default LogIn
