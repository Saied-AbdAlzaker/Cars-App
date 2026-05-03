import React from 'react'
import notFound from '../../assets/images/not-found/404-not-found.png';

export default function NotFound() {
  return (
    <>
      <div className='container text-center'>
        <img src={notFound} alt="404-not-found" className='w-50' />
      </div>
    </>
  )
}
