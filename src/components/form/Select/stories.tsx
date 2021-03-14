import { Story, Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'
import Select, { SelectProps } from '.'
import { OptionType } from '../Dropdown'

const options: OptionType[] = [
  { value: 'brazil', label: 'Brazil', disabled: false },
  { value: 'italy', label: 'Italy', disabled: false },
  { value: 'ireland', label: 'Ireland', disabled: true },
  { value: 'uk', label: 'UK', disabled: false },
  { value: 'germany', label: 'Germany', disabled: false },
  { value: 'france', label: 'France', disabled: false },
  { value: 'argentina', label: 'Argentina', disabled: false },
  { value: 'uruguay', label: 'Uruguay', disabled: true },
  { value: 'chile', label: 'Chile', disabled: true },
  { value: 'mexico', label: 'Mexico', disabled: true }
]

export default {
  title: 'Form/Select',
  component: Select,
  args: {
    id: 'country-select',
    label: 'Country',
    labelFor: 'country-select',
    placeholder: 'Select the country...',
    options,
    clearable: false,
    disabled: false
  }
} as Meta

export const Default: Story<SelectProps> = (args) => {
  const [selected, setSelected] = useState<OptionType | null>(null)

  const handleSelected = (value: OptionType | null) => {
    setSelected(value)
  }

  return (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <Select {...args} selected={selected} handleSelected={handleSelected} />
    </div>
  )
}

export const WithInitialSelected: Story<SelectProps> = (args) => {
  const [selected, setSelected] = useState<OptionType | null>(options[0])

  const handleSelected = (value: OptionType | null) => {
    setSelected(value)
  }

  return (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <Select {...args} selected={selected} handleSelected={handleSelected} />
    </div>
  )
}

export const WithError: Story<SelectProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Select {...args} />
  </div>
)

WithError.args = {
  error: 'Ops...something is wrong'
}
