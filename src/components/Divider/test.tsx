import { renderWithTheme } from 'utils/tests/helpers'

import { Divider } from '.'

describe('<Divider />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 1.6rem auto 5.6rem;
        height: 0.1rem;
        background: rgba(181,181,181,0.3);
        border: 0;
      }

      <hr
        class="c0"
      />
    `)
  })
})
