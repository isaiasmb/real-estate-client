import styled, { css } from 'styled-components'

import * as IconInfoStyles from 'components/IconInfo/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxsmall};
    border-top: 1px solid ${theme.colors.lightGray};
    ${IconInfoStyles.Wrapper} {
      margin-right: ${theme.spacings.xsmall};

      &:last-child {
        margin-right: 0;
      }
    }
  `}
`
