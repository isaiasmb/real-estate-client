import { GetStaticProps } from 'next'

import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import {
  QUERY_BANNERS_SLIDERS,
  QUERY_PARALLAX,
  QUERY_PARTNERS,
  QUERY_RECENT_PROPERTIES
} from 'graphql/queries/home'
import { QueryBannersSliders } from 'graphql/generated/QueryBannersSliders'
import { QueryRecentProperties } from 'graphql/generated/QueryRecentProperties'
import { QueryParallax } from 'graphql/generated/QueryParallax'
import { QueryPartners } from 'graphql/generated/QueryPartners'

const apolloClient = initializeApollo()

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const bannersResp = await apolloClient.query<QueryBannersSliders>({
    query: QUERY_BANNERS_SLIDERS
  })

  const { bannerSliders } = bannersResp.data

  const propertiesResp = await apolloClient.query<QueryRecentProperties>({
    query: QUERY_RECENT_PROPERTIES
  })

  const { properties } = propertiesResp.data

  const parallaxResp = await apolloClient.query<QueryParallax>({
    query: QUERY_PARALLAX
  })

  const { parallax } = parallaxResp.data

  const partnersResp = await apolloClient.query<QueryPartners>({
    query: QUERY_PARTNERS
  })

  const { partners } = partnersResp.data

  return {
    props: {
      banners: bannerSliders.map(({ banner }) => ({
        img: `http://localhost:1337${banner?.image?.url}`,
        title: banner?.title,
        subtitle: banner?.description,
        buttonLabel: banner?.button?.label,
        buttonLink: banner?.button?.link
      })),
      recentProperties: properties.map((property) => ({
        img: `http://localhost:1337${property?.cover?.url}`,
        title: property.title,
        slug: property.slug,
        amountOfPhotos: property.gallery?.length,
        amountOfBedrooms: property.bedrooms,
        amountOfBathrooms: property.bathrooms,
        amountOfGarages: property.garages,
        measures: property.measures,
        ribbon: property.operation,
        ribbonColor: property.operation === 'Rent' ? 'primary' : 'secondary'
      })),
      parallax: {
        img: `http://localhost:1337${parallax?.image?.url}`,
        title: parallax?.title,
        description: parallax?.description
      },
      partners: partners.map((partner) => ({
        name: partner.name,
        link: partner.link,
        logo: `http://localhost:1337${partner?.logo?.url}`
      }))
    }
  }
}
