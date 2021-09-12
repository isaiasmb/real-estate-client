import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Parallax from '.'

describe('<Parallax />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <Parallax
        img="http://image-test.jpg"
        title="Title parallax"
        description="Description parallax"
      />
    )

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'http://image-test.jpg'
    )

    expect(screen.getByRole('img').parentElement).toHaveStyle({
      height: '30rem'
    })

    expect(screen.getByText('Title parallax'))

    expect(screen.getByText('Description parallax'))
  })
})
