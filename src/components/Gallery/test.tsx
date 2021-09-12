import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import mockItems from './mock'
import Gallery from '.'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    const img = await screen.findByRole('img', { name: /Gallery Image 1/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when Escape clicked', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle modal when ArrowRight clicked', async () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    fireEvent.keyUp(container, { key: 'ArrowRight' })

    const img = await screen.findByRole('img', {
      name: /Modal - Gallery Image 2/i
    })

    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle modal when ArrowLeft clicked', async () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    fireEvent.click(
      screen.getByRole('button', { name: /List - Gallery Image 2/i })
    )

    fireEvent.keyUp(container, { key: 'ArrowLeft' })

    const img = await screen.findByRole('img', {
      name: /Modal - Gallery Image 1/i
    })

    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should render +9 when maxThumbs is equal thumbs.length', async () => {
    renderWithTheme(<Gallery items={mockItems} maxThumbs={9} />)

    expect(screen.getByText('+9')).toHaveStyle({
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: '#FAFAFA'
    })
  })
})
