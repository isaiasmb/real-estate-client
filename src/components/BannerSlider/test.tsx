import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerSlider from '.'
import items from './mock'

describe('<BannerSlider />', () => {
  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(
      container.querySelectorAll('.slick-slide:not(.slick-cloned)')
    ).toHaveLength(3)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getAllByRole('heading', {
        name: /Nemo enim ipsam 1/i,
        hidden: false
      })[0]
    ).toBeInTheDocument()

    expect(
      screen.getAllByRole('heading', {
        name: /Nemo enim ipsam 2/i,
        hidden: true
      })[0]
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
