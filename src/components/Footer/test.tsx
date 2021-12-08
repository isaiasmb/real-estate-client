import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

const props = {
  labelAddress: 'Label Address',
  labelContactUs: 'Label Contact Us',
  labelLinks: 'Label Links',
  labelSocial: 'Label Social',
  address: 'address 1234',
  email: 'email@test.com',
  links: [
    {
      label: 'label link 1',
      link: '/link/test/1'
    },
    {
      label: 'label link 2',
      link: '/link/test/2'
    }
  ],
  social: [
    {
      name: 'name link 1',
      link: '/link/test/1'
    },
    {
      name: 'name link 2',
      link: '/link/test/2'
    }
  ]
}

describe('<Footer />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Footer {...props} />)

    expect(screen.getByText('Label Address')).toBeInTheDocument()
    expect(screen.getByText('Label Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Label Links')).toBeInTheDocument()
    expect(screen.getByText('Label Social')).toBeInTheDocument()

    expect(screen.getByText('address 1234')).toBeInTheDocument()
    expect(screen.getByText('email@test.com')).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /label link 1/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /label link 2/ })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /name link 1/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /name link 2/ })
    ).toBeInTheDocument()
  })

  it('should render 4 columns topics when props is not passed', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()
  })
})
