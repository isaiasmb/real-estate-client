import React, { useState, useEffect } from 'react'

import { usePortal } from 'hooks/usePortal'

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
  const [show, setShow] = useState(false)
  const { Portal } = usePortal()

  useEffect(() => {
    if (newNode) {
      const rect = newNode.getBoundingClientRect()
      setLeft(rect.left)
      setTop(rect.top + rect.height + window.scrollY + 3)
      setMinWidth(rect.width)
      setShow(true)
    }
  }, [newNode])

  return (
    <Portal>
      <S.Wrapper
        show={show}
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
