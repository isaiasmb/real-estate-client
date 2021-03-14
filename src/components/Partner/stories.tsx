import { Story, Meta } from '@storybook/react/types-6-0'
import Partner, { PartnerProps } from '.'

export default {
  title: 'Partner',
  component: Partner,
  args: {
    partnerLogo:
      'https://homepress.stylemixthemes.com/wp-content/uploads/elementor/thumbs/partner_one-o9msuoa20z56rsfxhjopdagsv8asjv0t098ji4smjw.png',
    partnerLink: '#',
    partnerName: 'partnerName'
  }
} as Meta

export const Default: Story<PartnerProps> = (args) => <Partner {...args} />
