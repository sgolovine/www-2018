import { useState, useEffect } from 'react'

type WindowDimensions = {
  height: number
  width: number
}

const _getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    _getWindowDimensions()
  )

  const setDimensions = (wd: WindowDimensions) => {
    if (
      wd.height !== windowDimensions.height ||
      wd.width !== windowDimensions.width
    ) {
      setWindowDimensions(wd)
    }
  }

  useEffect(() => {
    const handleResize = () => setDimensions(_getWindowDimensions())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return windowDimensions
}
