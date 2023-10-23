import React from 'react'

export default function Index({children}) {
  return (
    <div className='bg-primary-subtle text-primary-emphasis py-5 my-3'>
      <div className="container">
        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </div>
    </div>
  )
}
