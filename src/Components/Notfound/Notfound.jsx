import React from 'react'
import error404 from "../../assets/error.svg"

export default function Notfound() {
  return (
    <div className='text-center py-5'>
      <img src={error404} alt='page not found' />
    </div>
  )
}
