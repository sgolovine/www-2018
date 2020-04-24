import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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

export const MenuButton = styled.button``

export const MobileNav = ({ onClose }: { onClose: () => void }) => {
  return (
    <MenuContainer>
      <TopContainer>
        <MenuHeader>Menu</MenuHeader>
        <div>
          <button onClick={onClose}>CLOSE</button>
        </div>
      </TopContainer>
      <MenuItemsContainer>
        {links.map((item, index) => {
          return (
            <MenuItem key={index} onClick={onClose} to={item.path}>
              {item.name}
            </MenuItem>
          )
        })}
      </MenuItemsContainer>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em;
`

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 75vh;
  align-items: center;
`

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 0;
  align-items: center;
`

const MenuHeader = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`

const MenuItem = styled(Link)`
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
  }
  line-height: 2.5em;
`
