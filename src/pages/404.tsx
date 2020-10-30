import { Link } from 'gatsby'
import React from 'react'

export default () => (
  <div>
    <h1 className="text-5xl">Uh oh! Page not found</h1>
    <p className="leading-loose text-lg">
      Well this sucks, the page you were trying to reach could not be found
    </p>
    <Link className="my-5 text-lg text-blue-600 hover:underline" to="/">
      Return home
    </Link>
  </div>
)
