import { Parallax as ReactParallax } from 'react-parallax'

import { Container } from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

export type ParallaxProps = {
  img: string
  height?: number
  title: string
  description: string
}

const ParallaxWrapper = ({
  img,
  height = 500,
  title,
  description
}: ParallaxProps) => (
  <S.Wrapper>
    <ReactParallax strength={height} bgImage={img}>
      <S.Content>
        <Container>
          <Heading color="white" size="huge">
            {title}
          </Heading>
          <S.Description>{description}</S.Description>
        </Container>
      </S.Content>
    </ReactParallax>
  </S.Wrapper>
)

export default ParallaxWrapper
