import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import houseCardsMock from 'components/HouseCard/mock'

import HouseSlider from '.'

describe('<PartnerSlider />', () => {
  it('should render with 4 items', () => {
    const { container } = renderWithTheme(
      <HouseSlider items={houseCardsMock} />
    )
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
    expect(screen.getByLabelText(/previous partners/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next partners/i)).toBeInTheDocument()
  })
})
