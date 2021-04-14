import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ContactCard from '.'

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

    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument()
  })
})
