import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import Textarea from '.'

describe('<Textarea />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<Textarea label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<Textarea />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<Textarea placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <Textarea
        onInput={onInput}
        label="Textarea"
        labelFor="Textarea"
        id="Textarea"
      />
    )

    const textarea = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(textarea, text)

    await waitFor(() => {
      expect(textarea).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <Textarea
        onInput={onInput}
        label="Textarea"
        labelFor="Textarea"
        id="Textarea"
        disabled
      />
    )

    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(textarea, text)

    await waitFor(() => {
      expect(textarea).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('Renders with error', () => {
    const { container } = renderWithTheme(
      <Textarea label="Textarea" labelFor="Textarea" error="Error message" />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <Textarea label="Textarea" labelFor="Textarea" id="Textarea" />
    )

    const textarea = screen.getByLabelText('Textarea')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(textarea).toHaveFocus()
  })
})

it('Is not accessible by tab when disabled', () => {
  renderWithTheme(
    <Textarea label="Textarea" labelFor="Textarea" id="Textarea" disabled />
  )

  const textarea = screen.getByLabelText('Textarea')
  expect(document.body).toHaveFocus()

  userEvent.tab()
  expect(textarea).not.toHaveFocus()
})
