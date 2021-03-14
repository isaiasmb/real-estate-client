import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a black label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Real Estate/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white when color is passed', () => {
    renderWithTheme(<Logo color="white" />)
    expect(screen.getByLabelText(/Real Estate/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a bigger logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Real Estate/i).parentElement).toHaveStyle({
      width: '14rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Real Estate/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Real Estate/i).parentElement).toHaveStyleRule(
      'width',
      '9.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
