import React from 'react'
import { ContactSectionContainer, SectionHeader } from './styled'
import { Label, Input, TextArea, Button } from '~/components/Form'

export default () => {
  return (
    <ContactSectionContainer>
      <SectionHeader>Get in Touch</SectionHeader>
      <Label htmlFor="name">Name</Label>
      <Input name="name" placeholder="John Doe" />

      <Label htmlFor="email">Email</Label>
      <Input name="email" placeholder="john.doe@acme.com" />

      <Label htmlFor="message">Message</Label>
      <TextArea
        name="message"
        placeholder="Hey Mate! I have this really cool idea I want to discuss..."
      />
      <div>
        <Button>Send</Button>
      </div>
    </ContactSectionContainer>
  )
}
