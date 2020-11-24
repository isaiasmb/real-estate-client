import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonTypes } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Apartment'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<RibbonTypes> = (args) => <Ribbon {...args} />
