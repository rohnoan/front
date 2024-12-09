import React from 'react'
import {useParams} from "react-router-dom"

export default function User() {
    const {userid}=useParams()
  
  return (
    <div className='bg-orange-700 text-4xl'>
        user{userid? `:${userid}`:''}
    </div>
  )
}
