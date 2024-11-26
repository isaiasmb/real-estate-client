import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="first"
        labelFor="first"
        id="first"
        name="nome"
        value="first"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="second"
        labelFor="second"
        id="second"
        name="nome"
        value="second"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="third"
        labelFor="third"
        id="third"
        name="nome"
        value="third"
        {...args}
      />
    </div>
  </>
)
