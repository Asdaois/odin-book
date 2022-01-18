import React from 'react'

import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import { signUpUser } from '../../features/user/user.thunks'
import Form from './Form'
import FormTitle from './FormTitle'
import InputText from './InputText'

const SignUp = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      dateOfBirth: Date.now(),
      gender: 'Other'
    },
    onSubmit: (values) => {
      dispatch(signUpUser(values))
    },
    validate: (values) => {
      const errors = {}
      if (values.password !== values.confirmPassword) { errors.confirmPassword = 'Passwords are different' }
      return errors
    },
    validateOnChange: false,
    validateOnBlur: false
  })

  return (
    <div
      className='max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6
      space-y-10 h-full'
    >
      <Form onSubmit={formik.handleSubmit}>
        <FormTitle title='Sign-up' />
        <InputText
          formik={formik}
          displayText='Display Name'
          name='displayName'
        />
        <InputText
          formik={formik}
          displayText='Email'
          name='email'
          type='email'
        />
        <InputText
          formik={formik}
          displayText='Password'
          name='password'
          type='password'
        />
        <InputText
          formik={formik}
          displayText='Confirm Password'
          name='confirmPassword'
          type='password'
        />
        <div className='flex items-center justify-between'>
          <label htmlFor='' className=''>
            Gender
          </label>
          <div className='block relative w-64'>
            <select
              className='block appearance-none w-full bg-white border
         border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow
          leading-tight focus:outline-none focus:shadow-outline'
              name='gender'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            >
              {['Other', 'Female', 'Male'].map((gender, index) => (
                <option key={index}>{gender}</option>
              ))}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='relative flex justify-between mt-3'>
          <label htmlFor='dateBirth'>Date of Birth</label>
          <input
            type='date'
            name='dateOfBirth'
            className='block bg-white border
         border-gray-400 hover:border-gray-500  rounded shadow
          leading-tight focus:outline-none focus:shadow-outline'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
          />
        </div>
        <button type='submit' className='button'>Sign Up</button>
      </Form>
    </div>
  )
}

export default SignUp
