import styled, { css } from 'styled-components'
import * as TextFieldStyles from 'components/form/TextField/styles'
import * as TextareaStyles from 'components/form/Textarea/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    box-shadow: 10px 11px 30px rgb(0 0 0 / 25%);
  `}
`

export const AgentWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Name = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const Phone = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-bottom: ${theme.spacings.xxxsmall};
    font-size: ${theme.font.sizes.small};

    svg {
      width: 16px;
      height: 16px;
      margin-bottom: -5px;
      margin-right: ${theme.spacings.xxxsmall};
      color: ${theme.colors.primary};
    }
  `}
`

export const FormContact = styled.form`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper}, ${TextareaStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
