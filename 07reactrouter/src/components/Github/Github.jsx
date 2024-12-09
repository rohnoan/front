import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Github() {

  const [data,setData]=useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/rohnoan')
    .then((respone)=>respone.json())
    .then(data=>{
      console.log(data)
      setData(data)
    })
  }, [])
  

  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl 
    '>
      <img src={data.avatar_url} alt="" />
      followers:{data.followers}
      following:{data.following}
      repos:{data.public_repos}
    </div>
  )
}
