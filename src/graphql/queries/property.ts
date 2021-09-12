import { gql } from '@apollo/client'
import { PropertyFragment } from 'graphql/fragments/property'

export const QUERY_PROPERTIES = gql`
  query QueryProperties($limit: Int!, $start: Int) {
    properties(limit: $limit, start: $start) {
      ...PropertyFragment
    }
  }
  ${PropertyFragment}
`

export const QUERY_PROPERTY_BY_SLUG = gql`
  query QueryPropertyBySlug($slug: String!) {
    properties(where: { slug: $slug }) {
      slug
      title
      cover {
        url
      }
      bathrooms
      bedrooms
      garages
      measures
      operation
      gallery {
        image {
          url
        }
        label
      }
      description
      agents {
        name
        phone
        email
      }
      floorPlans {
        title
        image {
          url
        }
        measure
        infoFloor {
          amount
          propertyPart
        }
      }
    }
  }
`
