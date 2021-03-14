import styled, { css, DefaultTheme } from 'styled-components'
import { SelectProps } from '.'

type WrapperProps = Pick<SelectProps, 'disabled' | 'error'>

export const SelectContainer = styled.div`
  position: relative;
`

export const SelectRelative = styled.div`
  ${({ theme }) => css`
    position: relative;
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const SelectWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border-radius: 0.2rem;
    border: 0.1rem solid;
    border-color: ${theme.colors.lightGray};
    padding: 0 ${theme.spacings.xsmall};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    width: 100%;
    height: 40px;
    margin: ${theme.spacings.xxxsmall} 0;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const LabelSelected = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
`

export const ButtonsWrapper = styled.div`
  display: flex;
`

export const ButtonRemove = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    &:hover {
      color: ${theme.colors.red};
    }

    svg {
      width: 16px;
    }
  `}
`

export const ButtonToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  svg {
    width: 16px;
  }
`

export const Separator = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    margin: 0 0.4rem;
    width: 1px;
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
    ${SelectWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${SelectWrapper} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }

    ${SelectWrapper} {
      background-color: ${theme.colors.lightGray};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
