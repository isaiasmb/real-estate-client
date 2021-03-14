import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import { Container } from 'components/Container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <S.FooterContainer>
        <Logo color="white" />
        <S.Content>
          <S.Column>
            <Heading color="white" size="small">
              Contact us
            </Heading>

            <a href="mailto:sac@athleta.com">sac@athleta.com</a>
          </S.Column>

          <S.Column>
            <Heading color="white" size="small">
              Follow us
            </Heading>

            <nav aria-labelledby="social media">
              <a
                href="https://www.instagram.com/athleta"
                target="_blank"
                rel="noopenner, noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com/athleta"
                target="_blank"
                rel="noopenner, noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.youtube.com/athleta"
                target="_blank"
                rel="noopenner, noreferrer"
              >
                Youtube
              </a>
              <a
                href="https://www.facebook.com/athleta"
                target="_blank"
                rel="noopenner, noreferrer"
              >
                Facebook
              </a>
            </nav>
          </S.Column>

          <S.Column>
            <Heading color="white" size="small">
              Links
            </Heading>

            <nav aria-labelledby="footer resources">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/properties">
                <a>Properties</a>
              </Link>
              <Link href="/search">
                <a>Search</a>
              </Link>
            </nav>
          </S.Column>

          <S.Column aria-labelledby="footer-contact">
            <Heading color="white" size="small">
              Location
            </Heading>
            <span>Lorem ipsum dolor sit.</span>
            <span>Lorem Ipsum</span>
            <span>Lorem, ipsum dolor.</span>
          </S.Column>
        </S.Content>
      </S.FooterContainer>
    </Container>

    <S.Copyright>Athleta Management 2020 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
