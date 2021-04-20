import { useState, TextareaHTMLAttributes } from 'react'

import * as S from './styles'

export type TextareaProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  disabled?: boolean
  error?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = ({
  label,
  labelFor = '',
  initialValue = '',
  disabled = false,
  error,
  onInput,
  rows = 5,
  ...props
}: TextareaProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.TextareaWrapper>
        <S.Textarea
          onChange={onChange}
          value={value}
          disabled={disabled}
          rows={rows}
          {...props}
        />
      </S.TextareaWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Textarea
