import { AccordionType } from 'components/Accordion'
import * as S from './styles'

type FloorPlanHeaderAccordionProps = {
  infoFloor: InfoFloor[]
}

const FloorPlanHeaderAccordion = ({
  infoFloor
}: FloorPlanHeaderAccordionProps) => (
  <S.HeaderAccordionWrapper>
    {infoFloor.map((item) => (
      <S.InfoFloor key={`${item.propertyPart}-${item.amount}`}>
        <S.PropertyPartAmount>{item.amount}</S.PropertyPartAmount>
        <S.PropertyPart>{item.propertyPart}</S.PropertyPart>
      </S.InfoFloor>
    ))}
  </S.HeaderAccordionWrapper>
)

export type InfoFloor = {
  amount: number
  propertyPart: 'bed' | 'bath' | 'garage'
}

export type FloorPlan = {
  title: string
  img: string
  infoFloor: InfoFloor[]
  floorMeasure: number
}

export const getFloorPlansAccordion = (
  floorPlans: FloorPlan[]
): AccordionType[] =>
  floorPlans.map((floorPlan) => ({
    title: floorPlan.title,
    header: <FloorPlanHeaderAccordion infoFloor={floorPlan.infoFloor} />,
    content: (
      <div>
        <img
          style={{ width: '100%' }}
          src={floorPlan.img}
          alt={floorPlan.title}
        />
      </div>
    ),
    isOpen: false
  }))
