import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Logo = styled.img`
  ${({ theme }) => css`
    ${media.greaterThan('large')`
      filter: brightness(100%) contrast(100%) saturate(0%) blur(0px)
        hue-rotate(0deg);

      &:hover {
        filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
          hue-rotate(0deg);
        transform: translateY(-${theme.spacings.xxsmall});
      }

      transition-duration: 0.3s;
      transition-property: transform;
      transition-timing-function: ease-out;
    `}
  `}
`
