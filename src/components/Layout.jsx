import GlobalStyle from "./GlobalStyle"
import { ThemeProvider } from "styled-components"
import Header from "./Header"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/GlobalProvider"
import CustomCursor from "./CustomCursor"
import Navigation from "./Navigation"
import { useState } from "react"

import HomePage from "../pages/HomePage"
import HomeContent from "./HomeContent"
import HomeFeatured from "./HomeFeatured"
import HomeAbout from "./HomeAbout"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const [toggleMenu, setToggleMenu] = useState(false)
  const [hamburgerPos, setHamburgerPos] = useState({ x: 0, y: 0 })

  const onCursorHover = (cursorType) => {
    cursorType = cursorStyles.includes(cursorType) && cursorType
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const darkTheme = {
    background: "#000000",
    text: "#ffff",
    red: "#ea291e",
    left: `${hamburgerPos.x}px`,
    top: `${hamburgerPos.y}px`,
  }
  const lightTheme = {
    background: "#fff",
    text: "#000000",
    red: "#ea291e",
    left: `${hamburgerPos.x}px`,
    top: `${hamburgerPos.y}px`,
  }

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursorHover={onCursorHover}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburger={hamburgerPos}
        setHamburger={setHamburgerPos}
      />
      <Navigation
        onCursorHover={onCursorHover}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <main>
        <HomePage />
        <HomeContent />
        <HomeFeatured
          onCursorHover={onCursorHover}
          setToggleMenu={setToggleMenu}
        />
        <HomeAbout />
      </main>
      <Footer onCursorHover={onCursorHover} />
    </ThemeProvider>
  )
}

export default Layout
