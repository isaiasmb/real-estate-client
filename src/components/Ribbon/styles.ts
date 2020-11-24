import styled, { css } from 'styled-components'

import { RibbonTypes } from '.'

type WrapperProps = Pick<RibbonTypes, 'color'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color }) => css`
    display: inline-block;
    padding: ${theme.spacings.xxxsmall};
    background-color: ${theme.colors[color]};
    border-radius: ${theme.border.radius.large};
    line-height: ${theme.font.sizes.xsmall};
  `}
`

export const Value = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
  `}
`
