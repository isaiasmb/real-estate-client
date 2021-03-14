import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Partner, { PartnerProps } from 'components/Partner'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type PartnerSliderProps = {
  items: PartnerProps[]
}

const settings: SliderSettings = {
  slidesToShow: 5,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 4.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3.2
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

const PartnerSlider = ({ items }: PartnerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Partner key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default PartnerSlider
