import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { MobileNav } from './MobileNav'
import { useWindowDimensions } from '~/hooks/useWindowDimensions'
import { fadeInHeader } from '~/helpers/animation'

/*
 * TODO:
 * This should all go into CMS
 */

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Links',
    path: '/links',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
]

export const Nav = () => {
  const windowDimensions = useWindowDimensions()

  const [showMobileMenu, setShowMobileMenu] = useState(
    windowDimensions.width < 900 ? true : false
  )

  useEffect(() => {
    if (windowDimensions.width < 900) {
      setShowMobileMenu(true)
    } else {
      setShowMobileMenu(false)
    }
  }, [windowDimensions])

  const renderLinks = () =>
    links.map((link, index) => {
      return (
        <NavLink key={index} to={link.path}>
          {link.name}
        </NavLink>
      )
    })

  return (
    <NavContainer>
      <HeaderLinkContainer>
        {showMobileMenu ? <MobileNav /> : renderLinks()}
      </HeaderLinkContainer>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 50px;
  align-items: center;
  @media (max-width: 1439px) {
    padding-left: 1em;
    padding-right: 1em;
  }
`

const HeaderLinkContainer = styled.div`
  @media (max-width: 900px) {
    padding-top: 1em;
    padding-bottom: 1em;
  }
  animation: ${fadeInHeader} ease-in 500ms;
`

const NavLink = styled(Link)`
  margin-left: 1em;
  margin-right: 1em;
  @media (max-width: 500px) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  font-size: 16px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 0.25em;
  :hover {
    text-decoration: none;
    color: white;
    background-color: black;
  }
`
