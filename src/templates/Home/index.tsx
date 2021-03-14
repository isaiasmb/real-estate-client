import { Parallax } from 'react-parallax'

import Base from 'templates/Base'
import { BannerProps } from 'components/Banner'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import SearchForm from 'components/SearchForm'
import Heading from 'components/Heading'
import HouseCard, { HouseCardProps } from 'components/HouseCard'
import PartnerSlider from 'components/PartnerSlider'
import partnersMock from 'components/PartnerSlider/mocks'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  recentProperties: HouseCardProps[]
}

const Home = ({ banners, recentProperties }: HomeTemplateProps) => (
  <Base>
    <S.SectionBanner>
      <BannerSlider items={banners} />
      <SearchForm />
    </S.SectionBanner>

    <S.SectionRecentProperties>
      <Container>
        <Heading color="black" size="huge">
          Recent Properties
        </Heading>
      </Container>
      <S.PropertiesGrig>
        {recentProperties.map((recentProperty, index) => (
          <HouseCard key={index} {...recentProperty} />
        ))}
      </S.PropertiesGrig>
    </S.SectionRecentProperties>

    <S.SectionParallax>
      <Parallax
        strength={500}
        bgImage="https://source.unsplash.com/user/therawhunter/YKqJ1ejmX5E/1920x1080"
      >
        <S.ParallaxContent>
          <Container>
            <Heading color="white" size="huge">
              Sed ut perspiciatis unde omnis iste natus error
            </Heading>
            <S.ParallaxText>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet.
            </S.ParallaxText>
          </Container>
        </S.ParallaxContent>
      </Parallax>
    </S.SectionParallax>

    <S.SectionPartner>
      <Container>
        <Heading color="black" size="huge">
          Our partners
        </Heading>
        <PartnerSlider items={partnersMock} />
      </Container>
    </S.SectionPartner>
  </Base>
)

export default Home
