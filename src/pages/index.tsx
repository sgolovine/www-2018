import React from 'react'
import Heading from '~/components/Heading'
import AboutSection from '~/components/index/About'
import ProjectSection from '~/components/index/Projects'
import ContactForm from '~/components/index/ContactForm'
import LinksSection from '~/components/index/Links'

export default () => {
  return (
    <>
      <Heading />
      <p>
        My name is Sunny Golovine and I&apos;m a Software Engineer living in
        Atlanta, GA
      </p>
      <AboutSection />
      <ProjectSection />
      <LinksSection />
      <ContactForm />
    </>
  )
}
