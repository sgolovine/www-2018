import { Link } from 'gatsby'
import React from 'react'
import { Heading1, Text } from '~/components/Text'

export default () => (
  <div>
    <Heading1>Uh oh! Page not found</Heading1>
    <Text>
      Well this sucks, the page you were trying to reach could not be found
    </Text>
    <Link className="my-5 text-lg text-blue-600 hover:underline" to="/">
      Return home
    </Link>
  </div>
)
