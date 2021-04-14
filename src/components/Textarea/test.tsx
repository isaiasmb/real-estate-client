import { render, screen } from '@testing-library/react'

import Textarea from '.'

describe('<Textarea />', () => {
  it('should render the heading', () => {
    const { container } = render(<Textarea />)
    expect(
      screen.getByRole('heading', { name: /Textarea/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
