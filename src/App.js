import React from "react";
//Pages
import Home from "./pages/Home.js";
//components
import Footer from "./components/Footer";
import Header from "./components/Header";

//themes
import { GlobalStyles, darkTheme, lightTheme } from "./components/GlobalStyles";
import { useDarkmode } from "./util/useDarkMode";
import styled, { ThemeProvider } from "styled-components";
import bgLight from "./media/bgLight.png";
import Explorer from "./pages/Explorer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Composer from "./pages/Composer";
import ComposerWorks from "./pages/ComposerWorks.js";
import SearchResults from "./pages/SearchResults.js";
import OpenOpus from "./pages/OpenOpus.js";
import Playlists from "./pages/Playlist.js";
import Page404 from "./pages/Page404.js";
import { AnimatePresence } from "framer-motion";

function App() {
  const [theme, toggleTheme] = useDarkmode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <div className="App interface">
        <BrowserRouter>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Bg>
            <img src={bgLight} alt="" />
            <div className="themeColor" />
          </Bg>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/explorer/:type" element={<Explorer />} />
              <Route path="/explorer/:type" element={<Explorer />} />
              <Route path="/composer/:id" element={<Composer />} />
              <Route path="/composer/:id/works" element={<ComposerWorks />} />
              <Route path="/search/:terms" element={<SearchResults />} />
              <Route path="/open_opus" element={<OpenOpus />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

const Bg = styled.div`
  img {
    width: 100vw;
    height: 100vh;
    z-index: -2;
    position: fixed;
    transition: 0.5s;
    top: 0;
    left: 0;
  }

  .themeColor {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.bg};
    z-index: -1;
    transition: 0.5s;
  }
`;

export default App;
