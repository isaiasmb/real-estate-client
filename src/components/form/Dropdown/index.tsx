import React, { useState, useEffect } from 'react'
import Portal from 'components/Portal'
import * as S from './styles'

export type OptionType = {
  value: string
  label: string
  disabled?: boolean
}

type DropdownProps = {
  node: React.RefObject<HTMLDivElement>
  refId: string
  refIdDropdown: string
  options: OptionType[]
  selected: OptionType | null
  handleSelected: (value: OptionType | null) => void
  setOpenDropdown: (isOpenDropdown: boolean) => void
}

const Dropdown = ({
  node,
  refId,
  refIdDropdown,
  options,
  selected,
  handleSelected,
  setOpenDropdown
}: DropdownProps) => {
  const newNode = document.getElementById(refId)
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  const [minWidth, setMinWidth] = useState(0)

  useEffect(() => {
    if (newNode) {
      const rect = newNode.getBoundingClientRect()
      setLeft(rect.left)
      setTop(rect.top + rect.height + window.scrollY + 3)
      setMinWidth(rect.width)
    }
  }, [newNode])

  return (
    <Portal>
      <S.Wrapper
        top={top}
        left={left}
        minWidth={minWidth}
        ref={node}
        id={refIdDropdown}
      >
        <S.Options>
          {options.map((option) => (
            <S.Option
              key={option.value}
              id={option.value}
              selected={!!selected && selected.value === option.value}
              disabled={!!option.disabled}
              onClick={() => {
                if (option.disabled) {
                  return
                }

                handleSelected(option)
                setOpenDropdown(false)
              }}
            >
              {option.label}
            </S.Option>
          ))}
        </S.Options>
      </S.Wrapper>
    </Portal>
  )
}

export default Dropdown
