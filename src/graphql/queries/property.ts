import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { PropertyFragment } from 'graphql/fragments/property'
import {
  QueryProperties,
  QueryPropertiesVariables
} from 'graphql/generated/QueryProperties'

export const QUERY_PROPERTIES = gql`
  query QueryProperties(
    $limit: Int!
    $start: Int
    $where: JSON
    $sort: String
  ) {
    properties(limit: $limit, start: $start, where: $where, sort: $sort) {
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

export function useQueryProperties(
  options?: QueryHookOptions<QueryProperties, QueryPropertiesVariables>
) {
  return useQuery<QueryProperties, QueryPropertiesVariables>(
    QUERY_PROPERTIES,
    options
  )
}
