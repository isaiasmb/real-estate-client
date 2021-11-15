import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import propertiesMock from 'components/PropertyCard/mock'

import Home, { HomeTemplateProps } from '.'

const props: HomeTemplateProps = {
  banners: bannerMock,
  recentProperties: propertiesMock,
  parallax: {
    img: 'http://image.com',
    title: 'Parallax title',
    description: 'Parallax description'
  },
  partners: [
    {
      logo: 'http://logo.com',
      link: 'http://link.com',
      name: 'partner name'
    }
  ]
}

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()
  })
})
