import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import PropertyCard, { PropertyCardProps } from 'components/PropertyCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type PropertySliderProps = {
  items: PropertyCardProps[]
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.3
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.4
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next partners" />,
  prevArrow: <ArrowLeft aria-label="previous partners" />
}

const PropertySlider = ({ items }: PropertySliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <PropertyCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default PropertySlider
