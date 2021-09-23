import styled, { css } from 'styled-components'

import * as IconInfoStyles from 'components/IconInfo/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${IconInfoStyles.Wrapper} {
      margin-right: ${theme.spacings.xsmall};

      &:last-child {
        margin-right: 0;
      }
    }
  `}
`
