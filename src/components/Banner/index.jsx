import React from 'react'

export default function index({ children }) {
  return (
    <div className='container my-4 py-4 border text-center bg-secondary-subtle'>
      {children}
    </div>
  )
}
