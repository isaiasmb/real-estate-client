import * as S from './styles'

export type IconInfo = {
  icon: JSX.Element
  value: string | number
}

const IconInfo = ({ icon, value }: IconInfo) => (
  <S.Wrapper>
    <S.IconWrapper>{icon}</S.IconWrapper>
    <S.Value>{value}</S.Value>
  </S.Wrapper>
)

export default IconInfo
