import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { MenuButton } from './MobileNav'
import { useWindowDimensions } from '~/hooks/useWindowDimensions'

/*
 * TODO:
 * This should all go into CMS
 */

const headerBrand = 'Sunny Golovine'

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

export const Header = ({ onMenuOpen }: { onMenuOpen: () => void }) => {
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
        <HeaderLink key={index} to={link.path}>
          {link.name}
        </HeaderLink>
      )
    })

  return (
    <HeaderContainer>
      {showMobileMenu ? (
        <MenuButton onClick={onMenuOpen}>MENU</MenuButton>
      ) : (
        <HeaderLinkContainer>{renderLinks()}</HeaderLinkContainer>
      )}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 50px;
  align-items: center;
  padding-top: 1.5em;
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
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`

const HeaderLink = styled(Link)`
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
