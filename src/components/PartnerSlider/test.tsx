import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import partnersMock from './mocks'

import GameCardSlider from '.'

describe('<PartnerSlider />', () => {
  it('should render with 4 items', () => {
    const { container } = renderWithTheme(
      <GameCardSlider items={partnersMock} />
    )
    expect(container.querySelectorAll('.slick-active')).toHaveLength(5)
    expect(screen.getByLabelText(/previous partners/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next partners/i)).toBeInTheDocument()
  })
})
