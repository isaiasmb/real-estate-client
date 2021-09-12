import Link from 'next/link'
import { Camera } from '@styled-icons/boxicons-regular/Camera'

import * as S from './styles'

import Ribbon, { RibbonColors } from 'components/Ribbon'
import HouseInfoPreview, {
  HouseInfoPreviewProps
} from 'components/HouseInfoPreview'

export type HouseCardProps = {
  img: string
  title: string
  slug: string
  amountOfPhotos?: number
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
} & HouseInfoPreviewProps

const HouseCard = ({
  img,
  title,
  slug,
  amountOfPhotos = 0,
  amountOfBedrooms,
  amountOfBathrooms,
  amountOfGarages,
  measures,
  ribbon,
  ribbonColor
}: HouseCardProps) => (
  <Link href={`house/${slug}`} passHref>
    <S.Wrapper>
      <S.OverImageBox>
        {!!ribbon && <Ribbon color={ribbonColor}>{ribbon}</Ribbon>}
        <S.AmountOfPhotosWrapper>
          <div>
            <Camera aria-label="Icon with a camera" />
          </div>
          <S.AmountOfPhotos>{amountOfPhotos}</S.AmountOfPhotos>
        </S.AmountOfPhotosWrapper>
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
  </Link>
)

export default HouseCard
