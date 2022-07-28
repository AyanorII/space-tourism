import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../lib/hooks";
import { Link as LinkInterface } from "../../lib/types";
import NavButton from "./NavButton";

export const LINKS: LinkInterface[] = [
  {
    name: "Home",
    href: "/",
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
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const isMobile = useMediaQuery(768);

  const router = useRouter();

  // Checks if the current path is the same as the link
  const isActive = (link: string) => {
    return router.pathname === link ? "active" : "";
  };

  return (
    <nav>
      {isMobile && <NavButton open={open} onClick={toggleOpen} />}
      <NavContainer open={open}>
        <NavList>
          {LINKS.map(({ name, href }, index) => (
            <NavListItem key={href} index={index} className={isActive(href)}>
              <Link href={href}>{name}</Link>
            </NavListItem>
          ))}
        </NavList>
      </NavContainer>
    </nav>
  );
};

export default Nav;

type Props = {
  open: boolean;
};

const NavContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  padding: 7.375rem 0 7.375rem 2rem;
  backdrop-filter: blur(2px);
  transition: all 0.35s;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 768px) {
    position: relative;
    inset: unset;
    min-height: unset;
    transform: none;
    padding: 0;
  }
`;

const NavList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  counter-reset: links;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4.875rem;
  }
`;

type NavListItemType = {
  index: number;
};

const NavListItem = styled.li<NavListItemType>`
  text-transform: uppercase;
  list-style: none;
  letter-spacing: 2.7px;
  padding-block: 0.5rem;
  padding-right: 4rem;
  position: relative;

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
