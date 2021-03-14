import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { NavigateNext } from '@styled-icons/material-outlined/NavigateNext'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      position: absolute;
      bottom: 10px;
      display: block;
      width: 100%;
      margin: 0;
      list-style: none;
      text-align: center;
      li {
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          background: ${theme.colors.primary};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
    ${media.greaterThan('large')`

    `}
  `}
`

const NavigationIcon = styled(NavigateNext)`
  ${({ theme }) => css`
    max-width: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: ${theme.layers.base};
    &.slick-disabled {
      display: none !important;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.7);
    }
  `}
`

export const NextIcon = styled(NavigationIcon)`
  right: 20px;
`

export const PrevIcon = styled(NavigationIcon)`
  left: 20px;
  transform: translateY(-50%) rotate(180deg);
`
