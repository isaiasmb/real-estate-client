import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from 'components/Container'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.large} 0;

    ${Container} {
      display: flex;
      align-items: center;

      & > * {
        flex-grow: 1;
        margin-left: ${theme.spacings.xsmall};
        margin-right: ${theme.spacings.xsmall};
      }

      & > *:first-child {
        margin-left: 0;
      }

      & > *:last-child {
        margin-right: 0;
      }

      ${media.lessThan('medium')`
        display: block;

        & > * {
          flex-grow: 1;
          margin: 0 0 ${theme.spacings.xsmall} 0;
        }

        & > *:last-child {
          margin-bottom: 0;
        }
      `}
    }
  `}
`
