import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import accordionsMock from './mock'

import Accordion from '.'

describe('<Accordion />', () => {
  it('should render the Accordions', () => {
    renderWithTheme(<Accordion accordions={[accordionsMock[0]]} />)

    expect(screen.getByText(/First Floor/i)).toBeInTheDocument()
    expect(screen.getByText(/Beds/i)).toBeInTheDocument()
    expect(screen.getByText(/Bath/i)).toBeInTheDocument()
    expect(screen.getByText(/m2/i)).toBeInTheDocument()
  })

  it('should toggle the Accordions', () => {
    renderWithTheme(<Accordion accordions={accordionsMock} />)

    expect(screen.queryByText(/First Floor Content/i)).not.toBeInTheDocument()

    fireEvent.click(screen.getByText(/First Floor/i))
    expect(screen.getByText(/First Floor Content/i)).toBeInTheDocument()
    expect(screen.queryByText(/Second Floor Content/i)).not.toBeInTheDocument()

    fireEvent.click(screen.getByText(/Second Floor/i))
    expect(screen.getByText(/Second Floor Content/i)).toBeInTheDocument()
    expect(screen.queryByText(/First Floor Content/i)).not.toBeInTheDocument()
  })
})
