import { Story, Meta } from '@storybook/react/types-6-0'
import { Bed } from '@styled-icons/ionicons-outline/Bed'
import IconInfo from '.'

export default {
  title: 'IconInfo',
  component: IconInfo,
  argTypes: {
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = () => <IconInfo icon={<Bed />} value={5} />
