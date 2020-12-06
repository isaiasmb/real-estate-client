import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'

export type RibbonTypes = {
  children: React.ReactNode
  color?: RibbonColors
}

const Ribbon = ({ children, color = 'primary' }: RibbonTypes) => (
  <S.Wrapper color={color}>
    <S.Value>{children}</S.Value>
  </S.Wrapper>
)

export default Ribbon
