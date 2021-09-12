import { gql } from '@apollo/client'
import { PropertyFragment } from 'graphql/fragments/property'

export const QUERY_BANNERS_SLIDERS = gql`
  query QueryBannersSliders {
    bannerSliders {
      banner {
        id
        title
        description
        image {
          url
          name
        }
        button {
          label
          link
        }
      }
    }
  }
`

export const QUERY_RECENT_PROPERTIES = gql`
  query QueryRecentProperties {
    properties(sort: "created_at:asc", limit: 8) {
      ...PropertyFragment
    }
  }
  ${PropertyFragment}
`

export const QUERY_PARALLAX = gql`
  query QueryParallax {
    parallax {
      title
      description
      image {
        url
      }
    }
  }
`
