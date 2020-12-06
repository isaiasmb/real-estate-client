import * as S from './styles'
import { Bed } from '@styled-icons/boxicons-regular/Bed'
import { Bath } from '@styled-icons/boxicons-regular/Bath'
import { Car } from '@styled-icons/boxicons-regular/Car'
import { Ruler2 as Ruler } from '@styled-icons/remix-line/Ruler2'
import { Camera } from '@styled-icons/boxicons-regular/Camera'

import Ribbon, { RibbonColors } from 'components/Ribbon'
import IconInfo from 'components/IconInfo'

export type HouseCardProps = {
  img: string
  title: string
  amountOfPhotos?: number
  amountOfBedrooms?: number
  amountOfBathrooms?: number
  amountOfGarages?: number
  measures?: number
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
}

const HouseCard = ({
  img,
  title,
  amountOfPhotos = 0,
  amountOfBedrooms,
  amountOfBathrooms,
  amountOfGarages,
  measures,
  ribbon,
  ribbonColor
}: HouseCardProps) => (
  <S.Wrapper>
    <S.OverImageBox>
      {!!ribbon && <Ribbon color={ribbonColor}>{ribbon}</Ribbon>}
      <S.AmountOfPhotos>
        <Camera aria-label="Icon with a camera" />
        {amountOfPhotos}
      </S.AmountOfPhotos>
    </S.OverImageBox>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Title>{title}</S.Title>
    <S.InfoWrapper>
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
    </S.InfoWrapper>
  </S.Wrapper>
)

export default HouseCard
