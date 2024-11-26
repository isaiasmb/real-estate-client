import {
  QueryProperties,
  QueryPropertiesVariables
} from 'graphql/generated/QueryProperties'
import { QUERY_PROPERTIES } from 'graphql/queries/property'
import { GetServerSidePropsContext } from 'next'
import PropertiesTemplate, {
  PropertiesTemplateProps
} from 'templates/Properties'
import { initializeApollo } from 'utils/apollo'
import { parseQueryStringToWhere } from 'utils/filter'

export default function PropertiesPage(props: PropertiesTemplateProps) {
  return <PropertiesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterItems = [
    {
      title: 'Type operation',
      name: 'operation',
      type: 'radio',
      fields: [
        {
          label: 'Buy',
          name: 'buy'
        },
        {
          label: 'Rent',
          name: 'rent'
        }
      ]
    },
    {
      title: 'Type',
      name: 'type',
      type: 'checkbox',
      fields: [
        {
          label: 'Apartment',
          name: 'apartment'
        },
        {
          label: 'House',
          name: 'house'
        },
        {
          label: 'Villa',
          name: 'villa'
        }
      ]
    },
    {
      title: 'Bedrooms',
      name: 'bedrooms',
      type: 'radio',
      fields: [
        {
          label: '1',
          name: '1'
        },
        {
          label: '2',
          name: '2'
        },
        {
          label: '3',
          name: '3'
        },
        {
          label: '4+',
          name: '4'
        }
      ]
    },
    {
      title: 'Bathrooms',
      name: 'bathrooms',
      type: 'radio',
      fields: [
        {
          label: '1',
          name: '1'
        },
        {
          label: '2',
          name: '2'
        },
        {
          label: '3',
          name: '3'
        },
        {
          label: '4+',
          name: '4'
        }
      ]
    }
  ]

  console.log(
    'query: ',
    parseQueryStringToWhere({ queryString: query, filterItems })
  )

  await apolloClient.query<QueryProperties, QueryPropertiesVariables>({
    query: QUERY_PROPERTIES,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
