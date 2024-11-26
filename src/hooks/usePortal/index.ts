import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  id?: string
  container?: HTMLElement
}

export const usePortal = ({ id, container }: PortalProps = {}) => {
  const rootElemRef = useRef<Element | HTMLElement>(container || document.body)

  useEffect(() => {
    const existingParent = id && document.querySelector(`#${id}`)
    const parentElement = container || existingParent || document.body

    rootElemRef.current = parentElement
  }, [rootElemRef, container, id])

  const Portal = ({ children }: { children: React.ReactNode }) => {
    if (rootElemRef.current != null)
      return createPortal(children, rootElemRef.current)
    return null
  }

  return { target: rootElemRef.current, Portal }
}
