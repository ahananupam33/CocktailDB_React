import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <section className="section error-page">
        <div className="error-container">
          <h1>Oops!! Its a ded end!</h1>
          <Link to="/" className='btn btn-primary'>
            Back Home
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Error
