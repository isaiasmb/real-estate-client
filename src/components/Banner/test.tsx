import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/fromitaly/1042x580',
  title: 'Nemo enim ipsam',
  subtitle: '<p>Ut labore et <strong>dolore magnam</strong> aliquam',
  buttonLabel: 'Buy now',
  buttonLink: '/properties/nemo-enim-ipsam'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Nemo enim ipsam/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Ut labore et dolore magnam aliquam/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Nemo enim ipsam/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
