import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as PropertyInfoPreviewStyles from 'components/PropertyInfoPreview/styles'
import { Container } from 'components/Container'

export const Main = styled(Container)``

export const Content = styled.div`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`

export const SectionsWrapper = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('large')`
      width: 75%;
      margin-right: ${theme.spacings.medium};
    `}

    width: 100%;
  `}
`

export const ContactBox = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('large')`
      width: 25%;
    `}

    width: 32rem;
    margin: 0 auto ${theme.spacings.large} auto;
  `}
`

export const SectionGallery = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
  `}
`

export const SectionTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('large')`
      flex-direction: column;
      align-items: start;
  `}
`

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${PropertyInfoPreviewStyles.Wrapper} {
      margin-right: ${theme.spacings.small};
    }

    ${media.lessThan('large')`
      margin-top: ${theme.spacings.xxsmall};
    `}
  `}
`

export const SectionDescription = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }

    margin-bottom: ${theme.spacings.xxlarge};
  `}
`

export const Description = styled.div``

export const SectionFloorPlans = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }

    margin-bottom: ${theme.spacings.xxlarge};
  `}
`

export const HeaderAccordionWrapper = styled.div`
  display: flex;
`

export const InfoFloor = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const PropertyPartAmount = styled.b``

export const PropertyPart = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxxsmall};
  `}
`

export const SectionOtherProperties = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`
