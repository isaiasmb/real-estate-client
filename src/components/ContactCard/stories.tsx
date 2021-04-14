import { Story, Meta } from '@storybook/react/types-6-0'
import ContactCard, { ContactCardProps } from '.'

export default {
  title: 'ContactCard',
  component: ContactCard,
  args: {
    agent: {
      name: 'John Joe',
      phone: '99-999-9999'
    }
  }
} as Meta

export const Default: Story<ContactCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <ContactCard {...args} />
  </div>
)
