import React from "react";
import github from "../media/github.svg";
import linkedin from "../media/linkedin.svg";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="interface">
        <div className="footer-left">
          <h5>Eruditum</h5>
          <h6>Is a project built on the the Open Opus Api</h6>
        </div>
        <div className="footer-right">
          <h5>Author: João Avelino</h5>
          <div className="links">
            <a
              href="https://github.com/joaolavelino/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="GitHub Logo" />
            </a>
            <a
              href="https://github.com/joaolavelino/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  width: 100vw;
  height: 128px;
  padding: 0 3rem;
  background-color: #363636;
  color: white;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.2);

  .interface {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-right {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 1rem;

    img {
      height: 1.5rem;
      transition: 0.5s;
      :hover {
        transform: scale(1.2);
      }
    }

    .links {
      display: flex;
      gap: 1rem;
      justify-content: end;
    }
  }
`;

export default Footer;
