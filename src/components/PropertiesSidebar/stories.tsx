import { Story, Meta } from '@storybook/react/types-6-0'
import PropertiesSidebar, { ExploreSidebarProps } from '.'

import items from './mock'

export default {
  title: 'PropertiesSidebar',
  component: PropertiesSidebar,
  args: {
    items,
    onFilter: () => console.log('onFilter')
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <PropertiesSidebar {...args} />
  </div>
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <PropertiesSidebar
      {...args}
      initialValues={{
        bedrooms: '2',
        bathrooms: '2',
        typeOperation: 'buy',
        type: ['apartment', 'house']
      }}
    />
  </div>
)
