import { Story, Meta } from '@storybook/react/types-6-0'

import partnersMock from './mocks'

import PartnerSlider, { PartnerSliderProps } from '.'

export default {
  title: 'PartnerSlider',
  component: PartnerSlider,
  args: {
    items: partnersMock
  },
  argTypes: {
    items: { type: 'string' }
  }
} as Meta

export const Default: Story<PartnerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '10rem auto' }}>
    <PartnerSlider {...args} />
  </div>
)
