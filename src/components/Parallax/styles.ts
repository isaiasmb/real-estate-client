import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    .react-parallax {
      height: 30rem;

      img {
        opacity: 0.3;
      }
    }

    .react-parallax-content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  `}
`

export const Content = styled.div`
  text-align: center;
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
