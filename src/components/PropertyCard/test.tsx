import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PropertyCard from '.'

jest.mock('components/PropertyInfoPreview', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PropertieInfoPreview"></div>
    }
  }
})

const props = {
  title: 'House on the Arcadia',
  img: 'https://source.unsplash.com/user/fromitaly/1042x580',
  slug: 'slug'
}

describe('<PropertyCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<PropertyCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByTestId('Mock PropertieInfoPreview')).toBeInTheDocument()
  })

  it('should render the amount of photos', () => {
    renderWithTheme(<PropertyCard {...props} amountOfPhotos={15} />)

    const amountOfPhotos = screen.getByLabelText(/Icon with a camera/i)
    expect(amountOfPhotos).toBeInTheDocument()
    expect(amountOfPhotos.parentElement?.parentElement).toHaveTextContent('15')
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <PropertyCard {...props} ribbon="My Ribbon" ribbonColor="secondary" />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      fontSize: '1.2rem'
    })
    expect(ribbon.parentElement).toHaveStyle({ backgroundColor: '#43C370' })
  })
})
