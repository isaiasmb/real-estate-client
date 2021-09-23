import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import Property from '.'

describe('<Property />', () => {
  it.skip('should render the heading', () => {
    const { container } = render(<Property />)
    expect(
      screen.getByRole('heading', { name: /Property/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
