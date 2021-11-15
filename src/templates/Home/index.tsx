import Base from 'templates/Base'
import { BannerProps } from 'components/Banner'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import SearchForm from 'components/SearchForm'
import Heading from 'components/Heading'
import PropertyCard, { PropertyCardProps } from 'components/PropertyCard'
import PartnerSlider from 'components/PartnerSlider'
import { PartnerProps } from 'components/Partner'
import Parallax, { ParallaxProps } from 'components/Parallax'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  recentProperties: PropertyCardProps[]
  parallax: ParallaxProps
  partners: PartnerProps[]
}

const Home = ({
  banners,
  recentProperties,
  parallax,
  partners
}: HomeTemplateProps) => (
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
          <PropertyCard key={index} {...recentProperty} />
        ))}
      </S.PropertiesGrig>
    </S.SectionRecentProperties>

    <Parallax {...parallax} />

    <S.SectionPartner>
      <Container>
        <Heading color="black" size="huge">
          Our partners
        </Heading>
        <PartnerSlider items={partners} />
      </Container>
    </S.SectionPartner>
  </Base>
)

export default Home
