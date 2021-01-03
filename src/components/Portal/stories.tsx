import { Story, Meta } from '@storybook/react/types-6-0'
import Portal from '.'

export default {
  title: 'Portal',
  component: Portal
} as Meta

export const Default: Story = () => {
  return (
    <div>
      <Portal>
        <h1>Portal text 1</h1>
      </Portal>
      <Portal>
        <h1>Portal text 2</h1>
      </Portal>
    </div>
  )
}
