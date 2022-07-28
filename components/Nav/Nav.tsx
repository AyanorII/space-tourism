import React, { useState } from 'react'
import { Link } from '../../lib/types';
import MobileNav from './MobileNav';
import NavButton from './NavButton';
import styled from 'styled-components';

export const LINKS: Link[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: "Destination",
    href: "/destination",
  },
  {
    name: "Crew",
    href: "/crew",
  },
  {
    name: "Technology",
    href: "/technology",
  }
]

const Nav = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <nav>
      <NavButton open={open} onClick={toggleOpen} />
      <MobileNav open={open} />
    </nav>
  );
  }

export default Nav
