import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the value', () => {
    renderWithTheme(<Ribbon>Apartment</Ribbon>)
    expect(screen.getByText(/Apartment/i)).toBeInTheDocument()
  })

  it('should render with the primary color', () => {
    renderWithTheme(<Ribbon>Apartment</Ribbon>)
    expect(screen.getByText(/Apartment/i).parentElement).toHaveStyle({
      backgroundColor: '#234DD4'
    })
  })

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Apartment</Ribbon>)
    expect(screen.getByText(/Apartment/i).parentElement).toHaveStyle({
      backgroundColor: '#43C370'
    })
  })
})
