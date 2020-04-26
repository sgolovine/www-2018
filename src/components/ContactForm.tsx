import React, { useState } from 'react'
import styled from 'styled-components'
import isBlank from 'is-blank'
import { postContactForm } from '~/requests/postContactForm'

export const ContactForm = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = () => {
    if (isBlank(name)) {
      alert('Please enter a name')
      return
    }
    if (isBlank(email)) {
      alert('Please enter an email')
      return
    }
    if (isBlank(message)) {
      alert('Please enter a message')
      return
    }
    postContactForm({ name, email, message }).then((resp) => console.log(resp))
  }

  const handleClear = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <Container>
      <Section>
        <Label>Name</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Name"
        />
      </Section>

      <Section>
        <Label>Email</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
        />
      </Section>

      <Section>
        <Label>Message</Label>
        <TextArea
          wrap="soft"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          name="message"
          placeholder="Message"
        />
      </Section>
      <ButtonContainer>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button onClick={handleClear}>Clear</Button>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  @media (max-width: 900px) {
    margin-left: 1em;
    margin-right: 1em;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-top: 1em;
  margin-bottom: 1em;
  textarea {
    resize: none;
  }
`
const Label = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
`

const Input = styled.input``

const TextArea = styled.textarea``

const Button = styled.button`
  background-color: transparent;
  border-width: 0;
  :hover {
    border: 1px solid;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 250px;
  justify-content: space-between;
`
