import React, { ReactNode, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Nav } from '~/components/Nav'
import { fadeInContent } from '~/helpers/animation'

export const RootLayout = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <RootContainer>{children}</RootContainer>
}

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <PageContainer>
    <Nav />
    <ContentContainer>{children}</ContentContainer>
  </PageContainer>
)

const PageContainer = styled.div`
  animation: ${fadeInContent} ease-in 500ms;
`

const RootContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5em;
`

const ContentContainer = styled.div`
  max-width: 800px;
`
