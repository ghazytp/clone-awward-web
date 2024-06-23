import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { Container, Flex } from "./ui/ui.styles"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/GlobalProvider"
import useElementPosition from "../hooks/useElementPosition"

const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`

const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${(props) => props.theme.text};
  }
  span {
    height: 1rem;
    width: 1rem;
    background: ${(props) => props.theme.red};
    margin: 0 4px;
    display: inline-block;
    border-radius: 100%;
    position: relative;
    bottom: 2px;
  }
`

const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${(props) => props.theme.text};
      margin: 8px;
    }
  }
`

const Header = ({ onCursorHover, setToggleMenu, hamburger, setHamburger }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const hamburgerRef = useRef(null)

  const position = useElementPosition(hamburgerRef)

  const menuHover = () => {
    onCursorHover("locked")
    setHamburger({ x: position.x, y: position.y + 72 })
  }

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else if (currentTheme === "light") {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}>
      <Container>
        <Flex $spaceBetween $noHeight>
          <Logo
            onMouseEnter={() => onCursorHover("hovered")}
            onMouseLeave={onCursorHover}>
            <a href="#">FURR</a>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursorHover("pointer")}
              onMouseLeave={onCursorHover}></span>
            <a href="#">W</a>
          </Logo>
          <Menu
            ref={hamburgerRef}
            onClick={() => setToggleMenu((prev) => !prev)}
            onMouseEnter={menuHover}
            onMouseLeave={onCursorHover}>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
