import { fireEvent } from '@testing-library/react'
import React, { RefObject } from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown, { OptionType } from '.'

const options: OptionType[] = [
  { value: 'brazil', label: 'Brazil', disabled: false },
  { value: 'italy', label: 'Italy', disabled: false },
  { value: 'ireland', label: 'Ireland', disabled: true }
]

describe('<Dropdown />', () => {
  let consoleSpy: jest.SpyInstance
  let refDropdown: RefObject<HTMLDivElement>
  let handleSelected: jest.Mock
  let setOpenDropdown: jest.Mock

  beforeEach(() => {
    if (consoleSpy) {
      consoleSpy.mockRestore()
    }

    refDropdown = React.createRef() as RefObject<HTMLDivElement>
    handleSelected = jest.fn()
    setOpenDropdown = jest.fn()
  })

  it('should render the dropdown with options', () => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    const { container, rerender } = renderWithTheme(
      <div id="containerId"></div>,
      {
        container: document.body
      }
    )

    rerender(
      <Dropdown
        refId="containerId"
        refIdDropdown="dropdown"
        node={refDropdown}
        options={options}
        handleSelected={handleSelected}
        selected={null}
        setOpenDropdown={setOpenDropdown}
      />
    )

    expect(container.querySelectorAll('#portal-root ul')).toHaveLength(1)
    expect(container.querySelectorAll('#portal-root ul > li')).toHaveLength(3)
    container.querySelectorAll('#portal-root ul > li').forEach((item, key) => {
      const option = options[key]
      expect(item).toHaveProperty('id', option.value)
      expect(item).toHaveTextContent(option.label)

      if (option.value === 'ireland') {
        expect(item).toHaveStyle({ cursor: 'not-allowed' })
        expect(item).toHaveStyle({ backgroundColor: '#EAEAEA' })
      }
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should call handleSelected method when options is clicked', () => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    const { container, rerender } = renderWithTheme(
      <div id="containerId"></div>,
      {
        container: document.body
      }
    )

    rerender(
      <Dropdown
        refId="containerId"
        refIdDropdown="dropdown"
        node={refDropdown}
        options={options}
        handleSelected={handleSelected}
        selected={null}
        setOpenDropdown={setOpenDropdown}
      />
    )

    fireEvent.click(container.querySelectorAll('#portal-root ul > li').item(0))

    expect(handleSelected).toBeCalled()
    expect(handleSelected).toBeCalledWith({
      value: 'brazil',
      label: 'Brazil',
      disabled: false
    })
  })

  it('should not call handleSelected method if the option is disabled', () => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    const { container, rerender } = renderWithTheme(
      <div id="containerId"></div>,
      {
        container: document.body
      }
    )

    rerender(
      <Dropdown
        refId="containerId"
        refIdDropdown="dropdown"
        node={refDropdown}
        options={options}
        handleSelected={handleSelected}
        selected={null}
        setOpenDropdown={setOpenDropdown}
      />
    )

    fireEvent.click(container.querySelectorAll('#portal-root ul > li').item(2))

    expect(handleSelected).not.toBeCalled()
  })
})
