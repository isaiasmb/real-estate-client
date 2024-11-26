import { ItemProps } from '.'

export default [
  {
    title: 'Type operation',
    name: 'typeOperation',
    type: 'radio',
    fields: [
      {
        label: 'Buy',
        name: 'buy'
      },
      {
        label: 'Rent',
        name: 'rent'
      }
    ]
  },
  {
    title: 'Type',
    name: 'type',
    type: 'checkbox',
    fields: [
      {
        label: 'Apartment',
        name: 'apartment'
      },
      {
        label: 'House',
        name: 'house'
      },
      {
        label: 'Villa',
        name: 'villa'
      }
    ]
  },
  {
    title: 'Bedrooms',
    name: 'bedrooms',
    type: 'radio',
    fields: [
      {
        label: '1',
        name: '1'
      },
      {
        label: '2',
        name: '2'
      },
      {
        label: '3',
        name: '3'
      },
      {
        label: '4+',
        name: '4'
      }
    ]
  },
  {
    title: 'Bathrooms',
    name: 'bathrooms',
    type: 'radio',
    fields: [
      {
        label: '1',
        name: '1'
      },
      {
        label: '2',
        name: '2'
      },
      {
        label: '3',
        name: '3'
      },
      {
        label: '4+',
        name: '4'
      }
    ]
  }
] as ItemProps[]
