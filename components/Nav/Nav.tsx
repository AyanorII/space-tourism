import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../lib/hooks";
import { Link as LinkInterface } from "../../lib/types";
import NavButton from "./NavButton";
import NavLink from "./NavLink";

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
            <NavListItem key={href} className={isActive(href)}>
              <NavLink href={href} className={isActive(href)}>
                {name}
              </NavLink>
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
  backdrop-filter: blur(30px);
  transition: all 0.35s;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  z-index: 10;

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
  counter-set: links -1;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4.875rem;
  }
`;

const NavListItem = styled.li`
  text-transform: uppercase;
  list-style: none;
  letter-spacing: 2.7px;
  padding-block: 0.5rem;

  @media (min-width: 1200px) {
    padding-block: 2.5rem;
  }
`;
