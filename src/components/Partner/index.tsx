import * as S from './styles'

export type PartnerProps = {
  partnerLogo: string
  partnerLink: string
  partnerName: string
}

const Partner = ({ partnerLogo, partnerLink, partnerName }: PartnerProps) => (
  <S.Wrapper>
    <a href={partnerLink}>
      <S.PartnerLogo src={partnerLogo} alt={partnerName} />
    </a>
  </S.Wrapper>
)

export default Partner
