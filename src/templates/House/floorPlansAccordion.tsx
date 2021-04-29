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
      <S.InfoFloor key={`${item.housePart}-${item.amount}`}>
        <S.HousePartAmount>{item.amount}</S.HousePartAmount>
        <S.HousePart>{item.housePart}</S.HousePart>
      </S.InfoFloor>
    ))}
  </S.HeaderAccordionWrapper>
)

export type InfoFloor = {
  amount: number
  housePart: 'bed' | 'bath' | 'garage'
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
