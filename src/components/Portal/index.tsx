import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: React.ReactNode
}

const Portal = ({ children }: PortalProps) => {
  const [mount, setMount] = useState<HTMLElement | null>(null)
  useEffect(() => {
    const portalRoot = document.getElementById('portal-root')

    if (!portalRoot) {
      const newPortal = document.createElement('div')
      newPortal.setAttribute('id', 'portal-root')
      document.body.appendChild(newPortal)
    }

    setMount(document.getElementById('portal-root'))
  }, [])

  const el = document.createElement('div')

  useEffect(() => {
    if (!mount) {
      return
    }

    mount.appendChild(el)
    return () => {
      mount.removeChild(el)
    }
  }, [el, mount])

  return createPortal(children, el)
}

export default Portal
