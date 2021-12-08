import { gql } from '@apollo/client'

export const QUERY_FOOTER = gql`
  query QueryFooter {
    footer {
      labelContactUs
      email
      labelSocial
      social {
        name
        link
      }
      labelLinks
      links {
        label
        link
      }
      labelAddress
      address
    }
  }
`
