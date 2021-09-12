import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as PartnerSliderStyles from 'components/PartnerSlider/styles'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0;
    ${media.greaterThan('medium')`
      margin: 0;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionRecentProperties = styled.section`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.huge};
    padding-bottom: ${theme.spacings.huge};
  `}
`

export const PropertiesGrig = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: ${theme.spacings.medium};
    max-width: 130rem;
    margin-left: auto;
    margin-right: auto;

    ${media.lessThan('medium')`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${media.lessThan('small')`
      grid-template-columns: repeat(1, 1fr);
    `}
  `}
`

export const SectionPartner = styled.section`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.huge};
    padding-bottom: ${theme.spacings.huge};

    ${PartnerSliderStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`
