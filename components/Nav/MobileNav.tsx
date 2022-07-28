import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { LINKS } from "./Nav";

type Props = {
  open: boolean;
};

const MobileNav = ({ open }: Props) => {
  const router = useRouter();
  const isActive = (link: string) => {
    return router.pathname === link ? "active" : "";
  }

  return (
    <Nav open={open}>
      <NavList>
        {LINKS.map(({ name, href }, index) => (
          <NavListItem key={href} index={index} className={isActive(href)}>
            <Link href={href}>{name}</Link>
          </NavListItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default MobileNav;

const Nav = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  padding: 7.375rem 0 7.375rem 2rem;
  backdrop-filter: blur(2px);
  transition: all 0.35s;
  transform: ${props => props.open ? "translateX(0)" : "translateX(100%)"};
`;

const NavList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  counter-reset: links;
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
    background-color: ${props => props.theme.color.light};
    transition: all 0.35s;
  }

  &.active:after {
    top: 0;
    height: 100%;
  }

`;
