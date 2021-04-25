import styled, { css } from 'styled-components'

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} auto ${theme.spacings.xxlarge};
    height: 0.1rem;
    background: rgba(181, 181, 181, 0.3);
    border: 0;
  `}
`
