import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HouseCard from '.'

const props = {
  title: 'House on the Arcadia',
  img: 'https://source.unsplash.com/user/fromitaly/1042x580'
}

describe('<HouseCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<HouseCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
  })

  it('should render all icon infos', () => {
    renderWithTheme(
      <HouseCard
        {...props}
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

  it('should render the amount of photos', () => {
    renderWithTheme(<HouseCard {...props} amountOfPhotos={15} />)

    const amountOfPhotos = screen.getByLabelText(/Icon with a camera/i)
    expect(amountOfPhotos).toBeInTheDocument()
    expect(amountOfPhotos.parentElement?.parentElement).toHaveTextContent('15')
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <HouseCard {...props} ribbon="My Ribbon" ribbonColor="secondary" />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      fontSize: '1.2rem'
    })
    expect(ribbon.parentElement).toHaveStyle({ backgroundColor: '#43C370' })
  })
})
