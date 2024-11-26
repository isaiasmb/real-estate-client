import { useRouter } from 'next/router'

import PropertiesSidebar, { ItemProps } from 'components/PropertiesSidebar'
import Base from 'templates/Base'
import { useQueryProperties } from 'graphql/queries/property'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { ParsedUrlQueryInput } from 'querystring'

import * as S from './styles'

export type PropertiesTemplateProps = {
  filterItems: ItemProps[]
}

const PropertiesTemplate = ({ filterItems }: PropertiesTemplateProps) => {
  const { push, query } = useRouter()

  console.log(parseQueryStringToWhere({ queryString: query, filterItems }))

  const { data } = useQueryProperties({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>loading...</p>

  const { properties } = data

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/properties',
      query: items
    })
    return
  }

  console.log('properties: ', properties)

  return (
    <Base>
      <S.Main>
        <PropertiesSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
      </S.Main>

      <section>Items</section>
    </Base>
  )
}

export default PropertiesTemplate
