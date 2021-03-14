import { ThemeProvider } from 'styled-components'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'

export const renderWithTheme = (
  children: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => {
  const rendered = render(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    options
  )
  return {
    ...rendered,
    rerender: (ui, options?: Omit<RenderOptions, 'queries'>) =>
      renderWithTheme(ui, { container: rendered.container, ...options })
  }
}
