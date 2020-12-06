import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    color: ${theme.colors.gray};
  `}
`

export const IconWrapper = styled.div`
  svg {
    width: 2rem;
  }
`

export const Value = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxxsmall};
  `}
`
