import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { useContext } from 'react'
import baseContext from './baseContext'

import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  const { footer } = useContext(baseContext)

  return (
    <section>
      <Container>
        <Menu />
      </Container>

      {children}

      <S.SectionFooter>
        <Footer {...footer} />
      </S.SectionFooter>
    </section>
  )
}

export default Base
