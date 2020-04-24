import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Modal from 'react-modal'
import { GrClose, GrMenu } from 'react-icons/gr'

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

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClose = () => setIsOpen(false)

  return (
    <>
      <GrMenu onClick={() => setIsOpen(true)} />
      <StyledModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Mobile Menu"
      >
        <MenuContainer>
          <HeaderContainer>
            <GrClose onClick={handleClose} />
          </HeaderContainer>
          <MenuItemsContainer>
            {links.map((item, index) => {
              return (
                <MenuItem key={index} onClick={handleClose} to={item.path}>
                  {item.name}
                </MenuItem>
              )
            })}
          </MenuItemsContainer>
        </MenuContainer>
      </StyledModal>
    </>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1em;
`

const StyledModal = styled(Modal)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white !important;
  outline: none !important;
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 75vh;
  align-items: center;
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
