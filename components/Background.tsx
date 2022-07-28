import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from '../lib/hooks'

const Background = () => {
  const router = useRouter()
  const pathname = router.pathname

  const [background, setBackground] = useState("")

  const isMobile = useMediaQuery(600)
  const isTablet = useMediaQuery(900)
  const isDesktop = useMediaQuery(1200)

  const setResponsiveBackground = (url: string) => {
    if (isMobile) {
      setBackground(url + "-mobile.jpg")
    } else if (isTablet) {
      setBackground(url + "-tablet.jpg");
    } else {
      setBackground(url + "-desktop.jpg");
    }
  }

  useEffect(() => {
    switch (pathname) {
      case "/":
        setResponsiveBackground("/images/home/background-home")
        break;
      case "/crew":
        setResponsiveBackground("/images/crew/background-crew")
        break;
      case "/destination":
        setResponsiveBackground("/images/destination/background-destination")
        break;
      case "/technology":
        setResponsiveBackground("/images/technology/background-technology")
        break;
      default:
        break;
    }
  }, [pathname, isMobile, isTablet, isDesktop])

  return (
    <StyledBackground background={background}/>
  )
}

export default Background

type Props = {
  background: string;
};

const StyledBackground = styled.div`
  background-image: url(${(props: Props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: absolute;
  z-index: -1;
  inset: 0;
`;
