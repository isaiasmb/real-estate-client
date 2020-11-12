import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Properties</S.MenuLink>
          <S.MenuLink href="#">About us</S.MenuLink>
          <S.MenuLink href="#">Contact</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
        {!!username && (
          <MediaMatch greaterThan="medium">
            <Button minimal as="a" href="#">
              My account
            </Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Properties</S.MenuLink>
          <S.MenuLink href="#">About us</S.MenuLink>
          <S.MenuLink href="#">Contact</S.MenuLink>

          {!!username && <S.MenuLink href="#">My account</S.MenuLink>}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
