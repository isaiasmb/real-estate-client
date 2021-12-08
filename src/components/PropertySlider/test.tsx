import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import propertyCardsMock from 'components/PropertyCard/mock'

import PropertySlider from '.'

describe('<PropertySlider />', () => {
  it('should render with 4 items', () => {
    const { container } = renderWithTheme(
      <PropertySlider items={propertyCardsMock} />
    )
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
    expect(screen.getByLabelText(/previous partners/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next partners/i)).toBeInTheDocument()
  })
})
