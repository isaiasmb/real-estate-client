import { Story, Meta } from '@storybook/react/types-6-0'
import Accordion, { AccordionProps } from '.'
import accordionsMock from './mock'

export default {
  title: 'Accordion',
  component: Accordion,
  args: {
    accordions: accordionsMock
  }
} as Meta

export const Default: Story<AccordionProps> = (args) => (
  <div style={{ width: '52rem' }}>
    <Accordion {...args} />
  </div>
)
