import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'
import { PrevIcon, NextIcon } from 'components/NavigationIcon'

import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: true,
  prevArrow: <PrevIcon />,
  nextArrow: <NextIcon />
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
