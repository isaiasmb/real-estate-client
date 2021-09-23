import { Bed } from '@styled-icons/boxicons-regular/Bed'
import { Bath } from '@styled-icons/boxicons-regular/Bath'
import { Car } from '@styled-icons/boxicons-regular/Car'
import { Ruler2 as Ruler } from '@styled-icons/remix-line/Ruler2'

import IconInfo from 'components/IconInfo'

import * as S from './styles'

export type PropertyInfoPreviewProps = {
  amountOfBedrooms?: number
  amountOfBathrooms?: number
  amountOfGarages?: number
  measures?: number
}

const PropertyInfoPreview = ({
  amountOfBedrooms,
  amountOfBathrooms,
  amountOfGarages,
  measures
}: PropertyInfoPreviewProps) => (
  <S.Wrapper>
    {!!amountOfBedrooms && (
      <IconInfo
        icon={<Bed aria-label="Amount of bedrooms" />}
        value={amountOfBedrooms}
      />
    )}
    {!!amountOfBathrooms && (
      <IconInfo
        icon={<Bath aria-label="Amount of bathrooms" />}
        value={amountOfBathrooms}
      />
    )}
    {!!amountOfGarages && (
      <IconInfo
        icon={<Car aria-label="Amount of garages" />}
        value={amountOfGarages}
      />
    )}
    {!!measures && (
      <IconInfo
        icon={<Ruler aria-label="Measures" />}
        value={`${measures} m²`}
      />
    )}
  </S.Wrapper>
)

export default PropertyInfoPreview
