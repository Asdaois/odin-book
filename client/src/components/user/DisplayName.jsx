import React from 'react'
import { useSelector } from 'react-redux'

const DisplayName = () => {
  const user = useSelector(state => state.user)

  return (
    <div>
      {user.current.displayName}
    </div>
  )
}

export default DisplayName

