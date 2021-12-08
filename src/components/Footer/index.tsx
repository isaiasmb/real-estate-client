import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import { Container } from 'components/Container'

import * as S from './styles'

type BrandLink = {
  label: string
  link: string
}

type Social = {
  name: string
  link: string
}

export type FooterProps = {
  labelAddress?: string
  labelContactUs?: string
  labelLinks?: string
  labelSocial?: string
  address?: string
  email?: string
  links?: BrandLink[]
  social?: Social[]
}

const Footer = ({
  labelAddress,
  labelContactUs,
  labelLinks,
  labelSocial,
  address,
  email,
  links = [],
  social = []
}: FooterProps) => (
  <S.Wrapper>
    <Container>
      <S.FooterContainer>
        <Logo color="white" />
        <S.Content>
          <S.Column>
            <Heading color="white" size="small">
              {labelContactUs || 'Contact us'}
            </Heading>

            {email && <a href={`mailto:${email}`}>{email}</a>}
          </S.Column>

          <S.Column>
            <Heading color="white" size="small">
              {labelSocial || 'Follow us'}
            </Heading>

            {social.length && (
              <nav aria-labelledby="social media">
                {social.map((item) => (
                  <a
                    key={`${item.name}-${item.link}`}
                    href={item.link}
                    target="_blank"
                    rel="noopenner, noreferrer"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            )}
          </S.Column>

          <S.Column>
            <Heading color="white" size="small">
              {labelLinks || 'Links'}
            </Heading>

            {links.length && (
              <nav aria-labelledby="footer resources">
                {links.map((link) => (
                  <Link key={`${link.label}-${link.link}`} href={link.link}>
                    <a>{link.label}</a>
                  </Link>
                ))}
              </nav>
            )}
          </S.Column>

          <S.Column aria-labelledby="footer-contact">
            <Heading color="white" size="small">
              {labelAddress || 'Location'}
            </Heading>
            {address && <p>{address}</p>}
          </S.Column>
        </S.Content>
      </S.FooterContainer>
    </Container>

    <S.Copyright>Athleta Management 2020 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
