import * as S from './styles'

export type PartnerProps = {
  logo: string
  link: string
  name: string
}

const Partner = ({ logo, link, name }: PartnerProps) => (
  <S.Wrapper>
    <a href={link}>
      <S.Logo src={logo} alt={name} />
    </a>
  </S.Wrapper>
)

export default Partner
