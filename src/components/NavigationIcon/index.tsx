import styled, { css } from 'styled-components'
import { NavigateNext } from '@styled-icons/material-outlined/NavigateNext'

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
