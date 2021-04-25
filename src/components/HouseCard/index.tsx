import * as S from './styles'
import { Camera } from '@styled-icons/boxicons-regular/Camera'

import Ribbon, { RibbonColors } from 'components/Ribbon'
import HouseInfoPreview, {
  HouseInfoPreviewProps
} from 'components/HouseInfoPreview'

export type HouseCardProps = {
  img: string
  title: string
  amountOfPhotos?: number
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
} & HouseInfoPreviewProps

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
    <HouseInfoPreview
      amountOfBedrooms={amountOfBedrooms}
      amountOfBathrooms={amountOfBathrooms}
      amountOfGarages={amountOfGarages}
      measures={measures}
    />
  </S.Wrapper>
)

export default HouseCard
