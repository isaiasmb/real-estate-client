import * as S from './styles'

export type RibbonTypes = {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
}

const Ribbon = ({ children, color = 'primary' }: RibbonTypes) => (
  <S.Wrapper color={color}>
    <S.Value>{children}</S.Value>
  </S.Wrapper>
)

export default Ribbon
