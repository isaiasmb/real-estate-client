import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Partner from '.'

describe('<Partner />', () => {
  it('should render logo and link', () => {
    renderWithTheme(
      <Partner
        partnerLink="http://parnerlink.com"
        partnerLogo="http://parnerlink.com/parnerlogo"
        partnerName="partnerName"
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
