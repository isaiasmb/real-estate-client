import { useRouter } from 'next/dist/client/router'
import Property, { PropertyProps } from 'templates/Property'
import { initializeApollo } from 'utils/apollo'
import { GetStaticProps } from 'next'
import {
  QueryPropertyBySlug,
  QueryPropertyBySlugVariables
} from 'graphql/generated/QueryPropertyBySlug'
import {
  QUERY_PROPERTIES,
  QUERY_PROPERTY_BY_SLUG
} from 'graphql/queries/property'
import { QueryRecommendedProperties } from 'graphql/generated/QueryRecommendedProperties'
import { QUERY_RECOMMENDED_PROPERTIES } from 'graphql/queries/recommended'
import {
  QueryProperties,
  QueryPropertiesVariables
} from 'graphql/generated/QueryProperties'

const apolloClient = initializeApollo()

export default function Index(props: PropertyProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Property {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    QueryProperties,
    QueryPropertiesVariables
  >({
    query: QUERY_PROPERTIES,
    variables: { limit: 9 }
  })

  const paths = data.properties.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryPropertyBySlug,
    QueryPropertyBySlugVariables
  >({
    query: QUERY_PROPERTY_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.properties.length) {
    return { notFound: true }
  }

  const property = data.properties[0]

  const { data: recommendedProperties } = await apolloClient.query<
    QueryRecommendedProperties
  >({
    query: QUERY_RECOMMENDED_PROPERTIES
  })

  return {
    props: {
      gallery: property.gallery?.map((item) => ({
        src: `http://localhost:1337${item?.image?.url}`,
        label: item?.label
      })),
      agent: property.agents[0],
      title: property.title,
      description: property.description,
      amountOfBedrooms: property.bedrooms,
      amountOfBathrooms: property.bathrooms,
      amountOfGarages: property.garages,
      measures: property.measures,
      ribbon: property.operation,
      ribbonColor: property.operation === 'Rent' ? 'primary' : 'secondary',
      floorPlans:
        property.floorPlans?.map((item) => ({
          title: item?.title,
          img: `http://localhost:1337${item?.image?.url}`,
          floorMeasure: item?.measure,
          infoFloor: item?.infoFloor || []
        })) || [],
      otherPropertiesTitle: recommendedProperties.recommended?.title,
      otherProperties: recommendedProperties.recommended?.properties.map(
        (property) => ({
          slug: property.slug,
          title: property.title,
          img: `http://localhost:1337${property.cover?.url}`,
          amountOfPhotos: property.gallery?.length,
          amountOfBedrooms: property.bedrooms,
          amountOfBathrooms: property.bathrooms,
          amountOfGarages: property.garages,
          measures: property.measures,
          ribbon: property.operation,
          ribbonColor: property.operation === 'Rent' ? 'primary' : 'secondary'
        })
      )
    }
  }
}
