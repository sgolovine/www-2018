import React, { useState } from 'react'
import { Heading1, Text, Link } from '~/components/Text'
import { handleNetlifyFormsRequest } from '~/services/handleSend'

export default () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSend = () => {
    if (!name) {
      alert('Please enter your name')
      return
    }
    if (!email) {
      alert('Please enter your email')
      return
    }
    if (!message) {
      alert('Please enter a message')
      return
    }

    handleNetlifyFormsRequest(name, email, message)
      .then(() => {
        alert('message sent successfully')
      })
      .catch((err) => {
        alert('could not send message')
      })

    // TODO: Send it!
  }

  const handleClear = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div>
      <Heading1>Contact Me</Heading1>
      <Text>
        If you would like to reach out you can send me a message below. If you
        prefer to send and email, send me a message at{' '}
        <Link href="mailto:sunny@glvn.co">sunny@glvn.co</Link>. If you are a
        recruiter the best place to reach me is on{' '}
        <Link href="https://linkedin.com/in/sunnygolovine/">LinkedIn</Link>
        <div className="px-4 my-4">
          <label className="text-sm font-bold">Your name</label>
          <input
            className="border w-full h-12 mb-2 p-2"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="text-sm font-bold">Your email</label>
          <input
            className="border w-full h-12 mb-2 p-2"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="text-sm font-bold">Message</label>
          <textarea
            className="border w-full h-32 p-2"
            placeholder="Hey Sunny..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div>
            <button
              onClick={handleSend}
              className="w-36 border rounded-md p-2 mr-2 bg-green-200"
            >
              Send Message
            </button>
            <button
              onClick={handleClear}
              className="w-36 border rounded-md p-2 mr-2 bg-red-200"
            >
              Clear
            </button>
          </div>
        </div>
      </Text>
    </div>
  )
}
