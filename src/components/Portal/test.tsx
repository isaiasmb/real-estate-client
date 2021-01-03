import { render, screen } from '@testing-library/react'

import Portal from '.'

describe('<Portal />', () => {
  let consoleSpy: jest.SpyInstance

  beforeEach(() => {
    if (consoleSpy) {
      consoleSpy.mockRestore()
    }
  })

  it('should render the portal with children', () => {
    const { container } = render(
      <Portal>
        <h1>Portal Text</h1>
      </Portal>
    )
    expect(
      screen.getByRole('heading', { name: /Portal Text/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the portal only once', async () => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    const { container } = render(
      <div>
        <Portal>
          <h1>Portal Text 1</h1>
        </Portal>
        <Portal>
          <h1>Portal Text 2</h1>
        </Portal>
      </div>,
      { container: document.body }
    )

    expect(
      screen.getByRole('heading', { name: /Portal Text 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Portal Text 1/i })
    ).toBeInTheDocument()
    expect(container.querySelectorAll('#portal-root')).toHaveLength(1)
  })
})
