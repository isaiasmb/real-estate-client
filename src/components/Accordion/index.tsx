import { useEffect, useState } from 'react'
import { ArrowDownS, ArrowUpS } from '@styled-icons/remix-fill'

import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type AccordionType = {
  title: string
  header?: React.ReactNode
  content: React.ReactNode
  isOpen: boolean
}

export type AccordionProps = {
  accordions: AccordionType[]
}

const Accordion = ({ accordions }: AccordionProps) => {
  const [accordionsMap, setAccordionsMap] = useState<
    Map<number, AccordionType>
  >(new Map())

  useEffect(() => {
    const newAccordionsMap = new Map()
    accordions.forEach((accordion, index) => {
      newAccordionsMap.set(index, accordion)
    })
    setAccordionsMap(newAccordionsMap)
  }, [accordions])

  const toggleAccordion = (currentKey: number, accordion: AccordionType) => {
    accordionsMap.forEach((accordion, key) => {
      if (currentKey !== key) {
        accordion.isOpen = false
      }
    })

    accordionsMap.set(currentKey, {
      ...accordion,
      isOpen: !accordion.isOpen
    })
    const newAccordionsMap = new Map(accordionsMap)
    setAccordionsMap(newAccordionsMap)
  }

  return (
    <S.Wrapper>
      {Array.from(accordionsMap).map(([key, accordion]) => (
        <S.Accordion key={key}>
          <S.HeaderWrapper onClick={() => toggleAccordion(key, accordion)}>
            <S.HeaderContent>
              <S.Title>{accordion.title}</S.Title>
              <MediaMatch greaterThan="small">
                {accordion.header && <S.Header>{accordion.header}</S.Header>}
              </MediaMatch>
            </S.HeaderContent>
            <S.ArrowBox>
              {!accordion.isOpen && <ArrowDownS size={16} />}
              {accordion.isOpen && <ArrowUpS size={16} />}
            </S.ArrowBox>
          </S.HeaderWrapper>
          {accordion.isOpen && <S.Content>{accordion.content}</S.Content>}
        </S.Accordion>
      ))}
    </S.Wrapper>
  )
}

export default Accordion
