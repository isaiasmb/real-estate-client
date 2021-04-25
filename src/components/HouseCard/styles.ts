import styled, { css } from 'styled-components'
import * as HouseInfoPreviewStyles from 'components/HouseInfoPreview/styles'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xsmall};
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
    }

    ${HouseInfoPreviewStyles.Wrapper} {
      padding-top: ${theme.spacings.xxsmall};
      border-top: 1px solid ${theme.colors.lightGray};
    }
  `}
`

export const OverImageBox = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: ${theme.spacings.small};
    right: ${theme.spacings.small};
    left: ${theme.spacings.small};
  `}
`

export const ImageBox = styled.div`
  height: 16rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const AmountOfPhotos = styled.div`
  ${({ theme }) => css`
    display: none;
    color: ${theme.colors.white};
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius.large};

    svg {
      width: 1.6rem;
      margin-right: 0.6rem;
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
