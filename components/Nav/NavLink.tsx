import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({href, children, className}: Props) => {
  return (
    <Link href={href} passHref>
      <StyledLink className={className}>{children}</StyledLink>
    </Link>
  )
}

export default NavLink

const StyledLink = styled.a`
  position: relative;
  padding-right: 4rem;
  display: block;

  &::before {
    content: "0" counter(links);
    counter-increment: links;
    margin-right: 0.75rem;
    font-weight: 700;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    height: 0;
    width: 4px;
    background-color: ${(props) => props.theme.color.light};
    transition: all 0.35s;
  }

  &.active:after {
    top: 0;
    height: 100%;
  }

  @media (min-width: 768px) {
    padding-right: 0;
    padding-block: 2.5rem;

    &::before {
      display: none;
    }

    &::after {
      bottom: 0;
      width: 0;
      left: 50%;
      top: 100%;
    }

    &.active:after {
      left: 0;
      width: 100%;
      height: 4px;
      top: 100%;
    }
  }

  @media (min-width: 1200px) {
    &::before {
      display: inline;
    }
  }
`;
