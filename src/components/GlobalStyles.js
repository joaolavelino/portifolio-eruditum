import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: ${({ theme }) => theme.bgImage};
    transition: 0.4s all ease;
    overflow-x: hidden;
  }

  .interface{
    max-width: 1440px;
    margin: auto;
    overflow-x: hidden;
  }

  main{
    padding: 120px 6rem 3rem;
    min-height: calc(100vh - 128px);
    overflow-x: hidden;
    @media screen and (max-width: 799px) {
      padding: 120px 1rem 3rem;
    }
  }

  h1, h2, h3, h4 {
    font-family: 'Spectral SC', serif;
    font-weight: 400;
    color:${({ theme }) => theme.text};
  }
  h5, h6 {
    font-family: 'Spectral SC', serif;
    font-weight: 400;
  }



  h1{
    font-size: 2rem;
    color: ${({ theme }) => theme.headerText};
  }
  h2{
    font-size: 3rem;
    color: ${({ theme }) => theme.highlight};
    @media screen and (max-width: 799px) {
      font-size:2rem;
    }
  }
  h3{
    font-size: 1.5rem;
  }
  h4{
    font-size: 1rem;
  }

  h5{
    font-size: 1rem;
    color: ${({ theme }) => theme.highlight};
  }

  h6{
    font-size: 12px;
  }


  a{
    text-decoration: none;
    color: inherit;
  }

  nav ul {
    list-style: none;
    font-size:1rem;
    font-family: 'Spectral SC', serif;
    color:${({ theme }) => theme.headerText};
    li{
      transition:0.4s;
    }
    
  }

  button{
    font-family: 'Spectral SC', serif;
    background: none;
    outline: none;
    border: 2px solid;
    color:${({ theme }) => theme.text};
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: 0.4s all ease;
    cursor: pointer;

    &.btn-small{
      font-size: 0.8rem;
      padding: 0.25rem 1rem;
    }

    &.btn-large{
      font-size: 2rem;
      padding: 0.5rem 2rem;
      @media screen and (max-width: 799px) {
      font-size:90%;
    }
    }

    &.btn-form{
      width: 100px;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      background-color: ${({ theme }) => theme.highlight} ;
      :hover{
        background-color: white;
        color: ${({ theme }) => theme.highlight};
      }
    }

    &.highlight{
      color:${({ theme }) => theme.highlight};
    }

    :hover{
      border-color:${({ theme }) => theme.highlight};
      background-color:${({ theme }) => theme.highlight} ;
      color:${({ theme }) => theme.headerText};
    }
  }

  .full{
    width: 100%;
  }

  .input-line{
    display: flex;
    align-items: center;
  }

  .highlight{
      color:${({ theme }) => theme.highlight};
    }

  input {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-family: 'PT Serif', serif;
      font-style: italic;
      font-weight: bold;
      :focus{
        outline: transparent
        ;
      }
      &.search{
        width: calc(100% - 100px);
        padding-right: 132px;
      }
      
    }

  .body-icon {
    color:${({ theme }) => theme.text};
    transition: 0.2s all ease;
    cursor: pointer;
    :hover{
      color:${({ theme }) => theme.highlight};
      transform: scale(1.2);
    }
  }

  p{
    color:${({ theme }) => theme.text};
    font-family: 'PT Serif', serif;
    text-align: justify;
  }

  span{
    color: ${({ theme }) => theme.highlight};
  }

  .shadow{
    background-color: ${({ theme }) => theme.shadow};
    border:${({ theme }) => theme.border}
  }


  `;

export const lightTheme = {
  bg: "rgba(255,255,255,0)",
  bgImage: "url(src/media/bgLight.png)",
  text: "#333",
  highlight: "#cca43b",
  headerText: "#333",
  shadow: "rgba(255,255,255,0.45)",
  border: "1px solid rgba(0,0,0,1)",
};
export const darkTheme = {
  bg: "rgba(0,0,0,0.8)",
  bgImage: "url(src/media/bgDark.png)",
  text: "#fff",
  highlight: "#cca43b",
  headerText: "#333",
  shadow: "rgba(0,0,0,0.45)",
  border: "1px solid rgba(255,255,255,0)",
};
