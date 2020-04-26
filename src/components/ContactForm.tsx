import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const ContactForm = () => {
  return (
    <Container>
      <Section>
        <Label>Name</Label>
        <Input name="name" placeholder="Name" />
      </Section>

      <Section>
        <Label>Email</Label>
        <Input name="email" placeholder="Email" />
      </Section>

      <Section>
        <Label>Message</Label>
        <TextArea wrap="soft" rows={4} name="message" placeholder="Message" />
      </Section>
    </Container>
  )
}

const Container = styled.div``

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
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

const Input = styled.input`
  :focused {
    border: 3px solid red;
  }
`

const TextArea = styled.textarea`
  :focused {
    border: 3px solid red;
  }
`
