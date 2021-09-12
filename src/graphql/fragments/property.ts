import { gql } from '@apollo/client'

export const PropertyFragment = gql`
  fragment PropertyFragment on Property {
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
      id
    }
  }
`
