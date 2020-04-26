import React from 'react'
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
      <Button>Submit</Button>
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
