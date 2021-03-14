import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import houseCardsMock from 'components/HouseCard/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps = () => ({
  props: {
    banners: bannersMock,
    recentProperties: houseCardsMock
  }
})
