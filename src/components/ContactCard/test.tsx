import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ContactCard from '.'

jest.mock('components/form/Textarea', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Textarea"></div>
    }
  }
})

describe('<ContactCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <ContactCard agent={{ name: 'John Joe', phone: '99 9999 9999' }} />
    )

    expect(screen.getByText('99 9999 9999')).toHaveAttribute(
      'href',
      'tel:99 9999 9999'
    )

    expect(screen.getByText(/John Joe/i)).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/First Name, Last Name/i)
    ).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/Your E-mail address/i)
    ).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/Your Phone/i)).toBeInTheDocument()

    expect(screen.getByTestId('Mock Textarea')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument()
  })
})
