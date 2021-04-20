import { Story, Meta } from '@storybook/react/types-6-0'

import Textarea, { TextareaProps } from '.'

export default {
  title: 'Form/Textarea',
  component: Textarea,
  args: {
    label: 'Description',
    labelFor: 'description',
    id: 'description',
    initialValue: '',
    placeholder: 'Type the description'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<TextareaProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Textarea {...args} />
  </div>
)

export const WithError: Story<TextareaProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Textarea {...args} />
  </div>
)

WithError.args = {
  error: 'Ops...something is wrong'
}
