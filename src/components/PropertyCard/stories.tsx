import { Story, Meta } from '@storybook/react/types-6-0'
import PropertyCard, { PropertyCardProps } from '.'

export default {
  title: 'PropertyCard',
  component: PropertyCard,
  args: {
    title: 'House on the Arcadia',
    img: 'https://source.unsplash.com/user/fromitaly/1042x580',
    amountOfPhotos: 10,
    amountOfBedrooms: 3,
    amountOfBathrooms: 2,
    amountOfGarages: 1,
    measures: 110,
    ribbon: 'Rent',
    ribbonColor: 'primary'
  },
  argTypes: {
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: Story<PropertyCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <PropertyCard {...args} />
  </div>
)
