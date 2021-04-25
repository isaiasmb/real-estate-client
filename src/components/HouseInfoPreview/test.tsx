import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HouseInfoPreview from '.'

describe('<HouseInfoPreview />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <HouseInfoPreview
        amountOfBedrooms={3}
        amountOfBathrooms={2}
        amountOfGarages={1}
        measures={110}
      />
    )

    const bedroomsInfo = screen.getByLabelText(/Amount of bedrooms/i)
    expect(bedroomsInfo).toBeInTheDocument()
    expect(bedroomsInfo.parentElement?.parentElement).toHaveTextContent('3')

    const bathroomsInfo = screen.getByLabelText(/Amount of bathrooms/i)
    expect(bathroomsInfo).toBeInTheDocument()
    expect(bathroomsInfo.parentElement?.parentElement).toHaveTextContent('2')

    const garagesInfo = screen.getByLabelText(/Amount of garages/i)
    expect(garagesInfo).toBeInTheDocument()
    expect(garagesInfo.parentElement?.parentElement).toHaveTextContent('1')

    const measuresInfo = screen.getByLabelText(/Measures/i)
    expect(measuresInfo).toBeInTheDocument()
    expect(measuresInfo.parentElement?.parentElement).toHaveTextContent('110')
  })
})
