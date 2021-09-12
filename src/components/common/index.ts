/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

export const useMouseDown = (
  nodes: React.RefObject<HTMLDivElement> | React.RefObject<HTMLDivElement>[],
  callback: () => void,
  propsToWait: (string | number | boolean)[] = []
) => {
  const handleClick = (event: MouseEvent) => {
    if (Array.isArray(nodes)) {
      const resultNodes = nodes.map((node) => {
        return containsTarget(event, node)
      })

      if (
        callback &&
        typeof callback === 'function' &&
        !resultNodes.includes(true)
      ) {
        callback()
      }
    } else {
      const contains = containsTarget(event, nodes)
      if (callback && typeof callback === 'function' && !contains) {
        callback()
      }
    }
  }

  const containsTarget = (
    event: MouseEvent,
    node: React.RefObject<HTMLDivElement>
  ) => {
    if (!node || !node.current) {
      return false
    }
    if (node.current.contains(<Node>event.target)) {
      return true
    }
    return false
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, propsToWait)
}

export const useScroll = (
  id: string,
  callback: () => void,
  propsToWait: string[] = []
) => {
  const handleScroll = () => {
    if (callback && typeof callback === 'function') {
      callback()
    }
  }

  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) {
      return
    }

    el.addEventListener('scroll', handleScroll)

    return () => {
      el.removeEventListener('scroll', handleScroll)
    }
  }, propsToWait)
}
