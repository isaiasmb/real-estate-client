import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Select from '.'
import { OptionType } from '../Dropdown'

const options: OptionType[] = [
  { value: 'brazil', label: 'Brazil', disabled: false },
  { value: 'italy', label: 'Italy', disabled: false },
  { value: 'ireland', label: 'Ireland', disabled: true }
]

describe('<Select />', () => {
  let consoleSpy: jest.SpyInstance
  let handleSelected: jest.Mock

  beforeEach(() => {
    if (consoleSpy) {
      consoleSpy.mockRestore()
    }

    handleSelected = jest.fn()
  })

  it('should render the select with label and placeholder', () => {
    renderWithTheme(
      <Select
        id="country-select"
        options={options}
        label="Country"
        labelFor="country-select"
        placeholder="Select the country..."
        selected={null}
        handleSelected={handleSelected}
      />
    )

    expect(screen.getByLabelText('Country')).toBeInTheDocument()
    expect(screen.getByText('Select the country...')).toBeInTheDocument()
  })

  it('should render the select without label and placeholder', () => {
    renderWithTheme(
      <Select
        id="country-select"
        options={options}
        selected={null}
        handleSelected={handleSelected}
      />
    )

    expect(screen.queryByLabelText('Country')).not.toBeInTheDocument()
    expect(screen.queryByText('Select the country...')).not.toBeInTheDocument()
  })

  it('should render the option label', () => {
    renderWithTheme(
      <Select
        id="country-select"
        options={options}
        selected={{ value: 'italy', label: 'Italy', disabled: false }}
        handleSelected={handleSelected}
      />
    )

    expect(screen.getByText('Italy')).toBeInTheDocument()
  })

  it('should call handleSelected with null', () => {
    renderWithTheme(
      <Select
        id="country-select"
        options={options}
        label="Country"
        labelFor="country-select"
        placeholder="Select the country..."
        selected={{ value: 'italy', label: 'Italy', disabled: false }}
        handleSelected={handleSelected}
        clearable
      />
    )

    const buttonRemove = screen.getByLabelText(/clear option/i).parentElement
    buttonRemove && fireEvent.click(buttonRemove)

    expect(handleSelected).toBeCalled()
    expect(handleSelected).toBeCalledWith(null)
  })

  it('should not call handleSelected when is disabled', () => {
    renderWithTheme(
      <Select
        id="country-select"
        options={options}
        label="Country"
        labelFor="country-select"
        placeholder="Select the country..."
        selected={{ value: 'italy', label: 'Italy', disabled: false }}
        handleSelected={handleSelected}
        disabled
        clearable
      />
    )

    const buttonRemove = screen.getByLabelText(/clear option/i).parentElement
    buttonRemove && fireEvent.click(buttonRemove)

    expect(handleSelected).not.toBeCalled()
  })

  it('should toggle dropdown and select an option', () => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    const { container } = renderWithTheme(
      <Select
        id="country-select"
        options={options}
        label="Country"
        labelFor="country-select"
        placeholder="Select the country..."
        selected={{ value: 'italy', label: 'Italy', disabled: false }}
        handleSelected={handleSelected}
      />,
      {
        container: document.body
      }
    )

    expect(container.querySelectorAll('#portal-root ul')).toHaveLength(0)

    const buttonRemove = screen.getByLabelText(/toggle dropdown/i).parentElement
    buttonRemove && fireEvent.click(buttonRemove)

    expect(container.querySelectorAll('#portal-root ul')).toHaveLength(1)

    fireEvent.click(container.querySelectorAll('#portal-root ul > li').item(0))

    expect(handleSelected).toBeCalled()
    expect(handleSelected).toBeCalledWith({
      value: 'brazil',
      label: 'Brazil',
      disabled: false
    })
  })

  it('should toggle dropdown when click in the option', () => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    const { container } = renderWithTheme(
      <Select
        id="country-select"
        options={options}
        label="Country"
        labelFor="country-select"
        placeholder="Select the country..."
        selected={{ value: 'italy', label: 'Italy', disabled: false }}
        handleSelected={handleSelected}
      />,
      {
        container: document.body
      }
    )

    expect(container.querySelectorAll('#portal-root ul')).toHaveLength(0)

    fireEvent.click(screen.getByText('Italy'))

    expect(container.querySelectorAll('#portal-root ul')).toHaveLength(1)

    const buttonRemove = screen.getByLabelText(/toggle dropdown/i).parentElement
    buttonRemove && fireEvent.click(buttonRemove)

    expect(container.querySelectorAll('#portal-root ul')).toHaveLength(0)
  })

  it('should not toggle dropdown when is disabled', () => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    const { container } = renderWithTheme(
      <Select
        id="country-select"
        options={options}
        label="Country"
        labelFor="country-select"
        placeholder="Select the country..."
        selected={{ value: 'italy', label: 'Italy', disabled: false }}
        handleSelected={handleSelected}
        disabled
      />,
      {
        container: document.body
      }
    )

    expect(container.querySelectorAll('#portal-root ul')).toHaveLength(0)

    fireEvent.click(screen.getByText('Italy'))

    expect(container.querySelectorAll('#portal-root ul')).toHaveLength(0)

    const buttonRemove = screen.getByLabelText(/toggle dropdown/i).parentElement
    buttonRemove && fireEvent.click(buttonRemove)

    expect(container.querySelectorAll('#portal-root ul')).toHaveLength(0)
  })

  it('should render the error when has an error', () => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    renderWithTheme(
      <Select
        id="country-select"
        options={options}
        label="Country"
        labelFor="country-select"
        placeholder="Select the country..."
        selected={{ value: 'italy', label: 'Italy', disabled: false }}
        handleSelected={handleSelected}
        error="Field required"
      />
    )

    expect(screen.getByText(/field required/i))
  })
})
