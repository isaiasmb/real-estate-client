import { User } from '@styled-icons/boxicons-regular/User'
import { Email } from '@styled-icons/material-outlined/Email'
import { Phone } from '@styled-icons/boxicons-regular/Phone'

import TextField from 'components/form/TextField'
import Button from 'components/Button'

import * as S from './styles'
import Textarea from 'components/form/Textarea'

export type AgentType = {
  name: string
  phone: string
  email: string
}

export type ContactCardProps = {
  agent: AgentType
}

const ContactCard = ({ agent }: ContactCardProps) => (
  <S.Wrapper>
    <S.AgentWrapper>
      <S.Name>{agent.name}</S.Name>
      <S.Phone href={`tel:${agent.phone}`}>{agent.phone}</S.Phone>
      <S.Email>{agent.email}</S.Email>
    </S.AgentWrapper>

    <S.FormContact>
      <TextField placeholder="First Name, Last Name" icon={<User />} />

      <TextField placeholder="Your E-mail address" icon={<Email />} />

      <TextField placeholder="Your Phone" icon={<Phone />} />

      <Textarea rows={3} />

      <Button fullWidth>Contact</Button>
    </S.FormContact>
  </S.Wrapper>
)

export default ContactCard
