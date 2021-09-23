import Accordion from 'components/Accordion'
import ContactCard, { AgentType } from 'components/ContactCard'
import { Divider } from 'components/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import Heading from 'components/Heading'
import { PropertyCardProps } from 'components/PropertyCard'
import PropertyInfoPreview, {
  PropertyInfoPreviewProps
} from 'components/PropertyInfoPreview'
import PropertySlider from 'components/PropertySlider'
import Ribbon, { RibbonColors } from 'components/Ribbon'
import Base from 'templates/Base'
import { getFloorPlansAccordion, FloorPlan } from './floorPlansAccordion'

import * as S from './styles'

export type PropertyProps = {
  title: string
  gallery: GalleryImageProps[]
  agent: AgentType
  description: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  floorPlans: FloorPlan[]
  otherProperties: PropertyCardProps[]
} & PropertyInfoPreviewProps

const Property = ({
  gallery,
  agent,
  title,
  description,
  amountOfBedrooms,
  amountOfBathrooms,
  amountOfGarages,
  measures,
  ribbon,
  ribbonColor,
  floorPlans,
  otherProperties
}: PropertyProps) => {
  return (
    <Base>
      <S.SectionGallery>
        <Gallery items={gallery} />
      </S.SectionGallery>
      <S.Main>
        <S.Content>
          <S.SectionsWrapper>
            <S.SectionTitle>
              <Heading size="huge" color="black">
                {title}
              </Heading>
              <S.InfoWrapper>
                <PropertyInfoPreview
                  amountOfBedrooms={amountOfBedrooms}
                  amountOfBathrooms={amountOfBathrooms}
                  amountOfGarages={amountOfGarages}
                  measures={measures}
                />
                {!!ribbon && <Ribbon color={ribbonColor}>{ribbon}</Ribbon>}
              </S.InfoWrapper>
            </S.SectionTitle>
            <Divider />
            <S.SectionDescription>
              <Heading color="black">Description</Heading>
              {description && (
                <S.Description
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </S.SectionDescription>
            <Divider />
            {floorPlans?.length > 0 && (
              <S.SectionFloorPlans>
                <Heading color="black">Floor plans</Heading>
                <Accordion accordions={getFloorPlansAccordion(floorPlans)} />
              </S.SectionFloorPlans>
            )}
          </S.SectionsWrapper>
          <S.ContactBox>
            <ContactCard agent={agent} />
          </S.ContactBox>
        </S.Content>
        <S.SectionOtherProperties>
          <Heading color="black">Other properties</Heading>
          {otherProperties && <PropertySlider items={otherProperties} />}
        </S.SectionOtherProperties>
      </S.Main>
    </Base>
  )
}

export default Property
