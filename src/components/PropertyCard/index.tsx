import Link from 'next/link'
import { Camera } from '@styled-icons/boxicons-regular/Camera'

import * as S from './styles'

import Ribbon, { RibbonColors } from 'components/Ribbon'
import PropertyInfoPreview, {
  PropertyInfoPreviewProps
} from 'components/PropertyInfoPreview'

export type PropertyCardProps = {
  img: string
  title: string
  slug: string
  amountOfPhotos?: number
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
} & PropertyInfoPreviewProps

const PropertyCard = ({
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
}: PropertyCardProps) => (
  <Link href={`/property/${slug}`} passHref>
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
      <PropertyInfoPreview
        amountOfBedrooms={amountOfBedrooms}
        amountOfBathrooms={amountOfBathrooms}
        amountOfGarages={amountOfGarages}
        measures={measures}
      />
    </S.Wrapper>
  </Link>
)

export default PropertyCard
