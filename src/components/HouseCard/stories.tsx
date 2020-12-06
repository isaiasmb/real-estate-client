import { Story, Meta } from '@storybook/react/types-6-0'
import HouseCard, { HouseCardProps } from '.'

export default {
  title: 'HouseCard',
  component: HouseCard,
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

export const Default: Story<HouseCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <HouseCard {...args} />
  </div>
)
