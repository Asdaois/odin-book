import React from 'react'

function InputText ({ formik, name, displayText, type }) {
  return (
    <div className='relative my-6 border-b-2 focus-within:border-blue-500'>
      <input
        type={type || 'text'}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className='block w-full appearance-none focus:outline-none bg-transparent peer'
        autoComplete='on'
        required
      />
      <label
        htmlFor='displayName'
        className={`absolute top-0 -z-1 peer-focus-within:scale-75 duration-500
        peer-focus-within:text-blue-500 peer-focus-within:-translate-y-6
        origin-[0%]
        ${formik.values[name].length > 0 ? '-translate-y-6' : ''}
        ${formik.errors[name] ? 'text-red-500' : null}`}
      >
        {displayText}
      </label>
      <div className='text-red-500'>{formik.errors[name] || null}</div>
    </div>
  )
}

export default InputText
