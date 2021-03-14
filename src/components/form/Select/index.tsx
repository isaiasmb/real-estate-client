import React, { useEffect, useRef, useState, RefObject } from 'react'
import { v4 } from 'uuid'
import {
  ArrowIosDownwardOutline,
  ArrowIosUpwardOutline,
  CloseOutline
} from '@styled-icons/evaicons-outline'

import { useMouseDown } from 'components/common'
import Dropdown, { OptionType } from 'components/form/Dropdown'
import * as S from './styles'

export type SelectProps = {
  id: string
  options: OptionType[]
  selected: OptionType | null
  handleSelected: (value: OptionType | null) => void
  label?: string
  labelFor?: string
  clearable?: boolean
  disabled?: boolean
  error?: string
  placeholder?: string
}

const Select = ({
  id,
  options,
  selected,
  handleSelected,
  label,
  labelFor = '',
  clearable = false,
  disabled = false,
  error = '',
  placeholder = ''
}: SelectProps) => {
  const [refIdDropdown, setRefIdDropdown] = useState(v4())
  const [openDropdown, setOpenDropdown] = useState(false)
  const [clicked, setClicked] = useState(false)

  const ref = useRef() as RefObject<HTMLDivElement>
  const refDropdown = useRef() as RefObject<HTMLDivElement>

  useEffect(() => {
    setRefIdDropdown(v4())
  }, [])

  useMouseDown(
    [ref, refDropdown],
    () => {
      setOpenDropdown(false)
    },
    [clicked]
  )

  const IconToggle = openDropdown
    ? ArrowIosUpwardOutline
    : ArrowIosDownwardOutline

  return (
    <S.Wrapper disabled={disabled} error={error}>
      <S.SelectContainer aria-labelledby={id} ref={ref} id={id}>
        {!!label && (
          <S.Label id={id} htmlFor={labelFor} aria-label={label}>
            {label}
          </S.Label>
        )}

        <S.SelectRelative>
          <S.SelectWrapper
            onClick={() => {
              if (disabled) {
                return
              }
              setClicked(true)
            }}
          >
            <S.LabelSelected
              onClick={() => {
                if (disabled) {
                  return
                }
                setOpenDropdown(!openDropdown)
              }}
            >
              {selected ? selected.label : placeholder}
            </S.LabelSelected>
            <S.ButtonsWrapper>
              {clearable && selected && (
                <S.ButtonRemove
                  onClick={() => {
                    if (disabled) {
                      return
                    }
                    if (handleSelected) {
                      handleSelected(null)
                    }
                  }}
                >
                  <CloseOutline aria-label="Clear option" />
                </S.ButtonRemove>
              )}
              {clearable && selected && <S.Separator />}
              <S.ButtonToggle
                onClick={() => {
                  if (disabled) {
                    return
                  }
                  setOpenDropdown(!openDropdown)
                }}
              >
                <IconToggle aria-label="Toggle dropdown" />
              </S.ButtonToggle>
            </S.ButtonsWrapper>
          </S.SelectWrapper>
        </S.SelectRelative>

        {openDropdown && (
          <Dropdown
            refId={id}
            refIdDropdown={refIdDropdown}
            node={refDropdown}
            options={options}
            handleSelected={handleSelected}
            selected={selected}
            setOpenDropdown={setOpenDropdown}
          />
        )}

        <input
          type="hidden"
          value={selected ? selected.value : ''}
          disabled={disabled}
        />
      </S.SelectContainer>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Select
