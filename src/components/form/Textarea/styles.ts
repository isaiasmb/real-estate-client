import styled, { css, DefaultTheme } from 'styled-components'

import { TextareaProps } from '.'

type WrapperProps = Pick<TextareaProps, 'disabled'> & { error?: boolean }

export const TextareaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    border-radius: 0.2rem;
    border: 0.1rem solid;
    border-color: ${theme.colors.lightGray};
    padding: 0 ${theme.spacings.xsmall};
    margin: ${theme.spacings.xxxsmall} 0;
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    resize: none;
    outline: none;
    background: transparent;
    border: 0;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
