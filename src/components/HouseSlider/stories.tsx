import { Story, Meta } from '@storybook/react/types-6-0'

import houseCardsMock from 'components/HouseCard/mock'

import HouseSlider, { HouseSliderProps } from '.'

export default {
  title: 'HouseSlider',
  component: HouseSlider,
  args: {
    items: houseCardsMock
  },
  argTypes: {
    items: { type: 'string' }
  }
} as Meta

export const Default: Story<HouseSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '10rem auto' }}>
    <HouseSlider {...args} />
  </div>
)
