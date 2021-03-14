import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({
  children,
  color = 'white',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
