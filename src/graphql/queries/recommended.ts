import { gql } from '@apollo/client'
import { PropertyFragment } from 'graphql/fragments/property'

export const QUERY_RECOMMENDED_PROPERTIES = gql`
  query QueryRecommendedProperties {
    recommended {
      title
      properties {
        ...PropertyFragment
      }
    }
  }
  ${PropertyFragment}
`
