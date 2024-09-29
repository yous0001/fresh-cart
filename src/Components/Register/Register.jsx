import React from 'react'

export default function Register() {
  return (
    <div className='w-75 mx-auto'>
      <h2 className='my-3 fw-bold'>Register Now:</h2>
      <form action="">
        <div className='mb-3'>
          <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className='form-control'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" className='form-control'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="phone">phone</label>
          <input type="tel" name="phone" id="phone" className='form-control'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" className='form-control'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="repassword">repassword</label>
          <input type="password" name="repassword" id="repassword" className='form-control'/>
        </div>

        
        <button className='btn text-light bg-main float-end' type="submit">submit</button>
      </form>
    </div>
  )
}
