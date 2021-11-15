import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Partner from '.'

describe('<Partner />', () => {
  it('should render logo and link', () => {
    renderWithTheme(
      <Partner
        link="http://parnerlink.com"
        logo="http://parnerlink.com/parnerlogo"
        name="partnerName"
      />
    )

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'http://parnerlink.com'
    )

    expect(screen.getByRole('img', { name: /partnerName/i })).toHaveAttribute(
      'src',
      'http://parnerlink.com/parnerlogo'
    )
  })
})
