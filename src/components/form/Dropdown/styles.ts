import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  top: number
  left: number
  minWidth: number
}

type OptionProps = {
  selected: boolean
  disabled: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, top, left, minWidth }) => css`
    border-radius: 0.2rem;
    border: 0.1rem solid;
    border-color: ${theme.colors.lightGray};
    position: absolute;
    z-index: 999999;
    top: ${top}px;
    left: ${left}px;
    min-width: ${minWidth}px;
  `}
`

export const Options = styled.ul`
  ${({ theme }) => css`
    overflow: auto;
    max-height: 230px;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
  `}
`

const optionModifiers = {
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    background-color: ${theme.colors.lightGray};
  `
}

export const Option = styled.li<OptionProps>`
  ${({ theme, disabled }) => css`
    padding: 8px 15px;
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    &:hover {
      background-color: ${theme.colors.lightGray};
    }

    ${disabled && optionModifiers.disabled(theme)}
  `}
`
