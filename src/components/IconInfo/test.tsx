import { screen } from '@testing-library/react'
import { Bed } from '@styled-icons/ionicons-outline/Bed'
import { renderWithTheme } from 'utils/tests/helpers'

import IconInfo from '.'

describe('<IconInfo />', () => {
  it('should render the icon and the value', () => {
    const { container } = renderWithTheme(
      <IconInfo icon={<Bed data-testid="icon" />} value={5} />
    )

    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
