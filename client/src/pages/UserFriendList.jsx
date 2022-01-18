import React from 'react'
import { useParams } from 'react-router-dom'

export const UserFriendList = () => {
  const { id } = useParams()
  return (
    <div>
      <p>Hello from {id}'s friend list!</p>
    </div>
  )
}
