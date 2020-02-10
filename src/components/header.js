import { Link } from "gatsby";
import * as React from "react";
import { css } from "@emotion/core";
import { button } from "../utils/css/themes";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  position: relative;
  z-index: 4;
`;
const LinkContainer = styled.div`
  display: flex;
`;

const Header = () => {
  const [isHeaderMoved, setIsHeaderMoved] = useState();

  const Header = styled.div`
    margin: 0 auto;
    padding: 0.5rem 0;
    width: 100%;
    display: flex;
    position: fixed;
    background-color: white;
    transition: 0.3s;
    @media (max-width: 600px) {
      position: relative;
      justify-content: space-around;
    }
    @media (min-width: 600px) {
      box-shadow: ${isHeaderMoved ? "0 -1px 4px .5px black" : "none"};
    }
  `;

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderMoved(window.pageYOffset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderMoved]);

  return (
    <HeaderContainer>
      <Header>
        <LinkContainer>
          <Link activeClassName="active" to="/" css={button}>
            Home
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Link activeClassName="active" to="/projects/" css={button}>
            Projects
          </Link>
        </LinkContainer>
        <LinkContainer
          css={css`
            margin-left: auto;
            @media (max-width: 600px) {
              margin-left: 0;
            }
          `}
        >
          <Link activeClassName="active" to="/contact/" css={button}>
            Contact
          </Link>
        </LinkContainer>
      </Header>
    </HeaderContainer>
  );
};

export default Header;
