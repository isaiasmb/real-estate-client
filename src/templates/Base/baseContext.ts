import { createContext } from 'react'
import { FooterProps } from 'components/Footer'

export type BaseContextData = {
  footer?: FooterProps
}

export default createContext<BaseContextData>({})
