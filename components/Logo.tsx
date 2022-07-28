import Image from 'next/image'
import React from 'react'
import logoSrc from "../public/images/shared/logo.svg";

const Logo = () => {
  return (
    <Image src={logoSrc} alt="logo"/>
  )
}

export default Logo
