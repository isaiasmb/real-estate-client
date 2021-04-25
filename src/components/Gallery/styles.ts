import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      cursor: pointer;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
  `}
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 100%;
    height: 23rem;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
      height: 48rem;
    `}
  `}
`

type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};

    .slick-slider {
      max-width: 80%;
      margin: 0 auto;

      ${media.lessThan('small')`
        max-width: 100%;
      `}
    }

    .slick-track {
      display: flex;
      align-items: center;
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${theme.spacings.small};
  `}
`
export const PaginationFraction = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    height: 100%;
    text-align: right;
  `}
`

export const Content = styled.div`
  max-width: min(120rem, 100%);
  max-height: 80rem;
`

export const ThumbList = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
  margin: 0 -5px;
`

export const ThumbWrapper = styled.div`
  width: 10%;
  cursor: pointer;

  ${media.lessThan('medium')`
    width: 20%;
  `}

  ${media.lessThan('small')`
    width: 25%;
  `}
`

export const LastThumbCover = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: ${theme.layers.base};
    background-color: rgba(0, 0, 0, 0.5);
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const ThumbLink = styled.a`
  margin: 5px;
  display: block;
  position: relative;
  overflow: hidden;
  height: 100px;

  ${media.lessThan('large')`
    height: 60px;
  `}

  img {
    max-width: 150%;
    position: absolute;
    top: -9999px;
    left: -9999px;
    right: -9999px;
    bottom: -9999px;
    margin: auto;
  }
`
