import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Accordion = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background-color: ${theme.colors.lightGray};
    cursor: pointer;
    border-top: 2px solid ${theme.colors.black};

    &:hover {
      border-top-color: ${theme.colors.primary};

      ${Title}, ${ArrowBox} {
        color: ${theme.colors.primary};
      }
    }
  `}
`

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h4`
  text-transform: uppercase;
`

export const Header = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.small};
  `}
`

export const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
