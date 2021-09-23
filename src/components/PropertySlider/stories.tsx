import { Story, Meta } from '@storybook/react/types-6-0'

import propertyCardsMock from 'components/PropertyCard/mock'

import PropertySlider, { PropertySliderProps } from '.'

export default {
  title: 'PropertySlider',
  component: PropertySlider,
  args: {
    items: propertyCardsMock
  },
  argTypes: {
    items: { type: 'string' }
  }
} as Meta

export const Default: Story<PropertySliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '10rem auto' }}>
    <PropertySlider {...args} />
  </div>
)
