import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import House from '.'

describe('<House />', () => {
  it.skip('should render the heading', () => {
    const { container } = render(<House />)
    expect(screen.getByRole('heading', { name: /House/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
