import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { Nav } from '~/components/Nav'
import { MobileNav } from '~/components/MobileNav'
import { fadeInContent } from '~/helpers/animation'

export const PageLayout = ({ children }: { children: ReactNode }) => {
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false)

  if (mobileHeaderOpen) {
    return <MobileNav onClose={() => setMobileHeaderOpen(false)} />
  }
  return (
    <OuterContainer>
      <InnerContainer>
        <Nav onMenuOpen={() => setMobileHeaderOpen(true)} />
        <AnimatedContent>{children}</AnimatedContent>
      </InnerContainer>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`

const InnerContainer = styled.div`
  max-width: 1440px;
  flex-grow: 1;
`

const ContentContainer = styled.div`
  @media (max-width: 1439px) {
    padding-left: 1em;
    padding-right: 1em;
  }
  @media (max-width: 500px) {
    margin-top: 10em;
  }
`

const AnimatedContent = styled(ContentContainer)`
  animation: ${fadeInContent} ease-in 500ms;
`
