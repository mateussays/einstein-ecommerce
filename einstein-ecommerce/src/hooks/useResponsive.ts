import { useEffect, useState } from 'react'

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const theme = {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
}

const useResponsive = (breakpoint: Breakpoint) => {
  const [state, setState] = useState(true)

  const expectedScreenWidth = Number(theme.screens[breakpoint].replace('px', ''))

  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => {}
    }

    const setResponsiveState = () => {
      if (expectedScreenWidth >= window.innerWidth) {
        setState(true)
      } else {
        setState(false)
      }
    }

    setResponsiveState()

    window.addEventListener('resize', setResponsiveState)

    return () => {
      window.removeEventListener('resize', setResponsiveState)
    }
  }, [expectedScreenWidth])

  return state
}

export { useResponsive }
export default useResponsive
