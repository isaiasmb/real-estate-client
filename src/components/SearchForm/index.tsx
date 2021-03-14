import { useState } from 'react'
import { Search } from '@styled-icons/material-outlined/Search'

import TextField from 'components/form/TextField'
import Select from 'components/form/Select'
import Button from 'components/Button'
import { Container } from 'components/Container'
import { OptionType } from 'components/form/Dropdown'

import * as S from './styles'

const houseOptions: OptionType[] = [
  { value: 'apartments', label: 'Apartment' },
  { value: 'house', label: 'House' },
  { value: 'villa', label: 'Villa' }
]

const bedroomsOptions: OptionType[] = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6+' }
]

const SearchForm = () => {
  const [houseSelected, setHouseSelected] = useState<OptionType | null>(null)
  const [bedroomSelected, setBedroomSelected] = useState<OptionType | null>(
    null
  )

  const handleHouseSelected = (value: OptionType | null) => {
    setHouseSelected(value)
  }

  const handleBedroomSelected = (value: OptionType | null) => {
    setBedroomSelected(value)
  }

  return (
    <S.Wrapper>
      <Container>
        <TextField icon={<Search />} />
        <Select
          id="house-filter"
          placeholder="Type"
          options={houseOptions}
          selected={houseSelected}
          handleSelected={handleHouseSelected}
        />
        <Select
          id="bedrooms-filter"
          placeholder="Bedrooms"
          options={bedroomsOptions}
          selected={bedroomSelected}
          handleSelected={handleBedroomSelected}
        />
        <Button>Search</Button>
      </Container>
    </S.Wrapper>
  )
}

export default SearchForm
