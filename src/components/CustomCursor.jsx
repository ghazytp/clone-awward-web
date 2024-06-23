import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { useGlobalStateContext } from "../context/GlobalProvider"

const Cursor = styled.div`
  position: fixed;
  top: 400;
  left: 200;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme.red};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${(props) => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 42px;
    height: 42px;
    border: 4px solid ${(props) => props.theme.red};
  }

  &.nav-open {
    background: ${(props) => props.theme.text};
  }

  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${(props) => props.theme.red};
    top: ${(props) => props.theme.top};
    left: ${(props) => props.theme.left};
  }
`

const CustomCursor = ({ toggleMenu }) => {
  const cursorRef = useRef(null)
  const { cursorType } = useGlobalStateContext()

  const onMouseMove = (ev) => {
    cursorRef.current.style.left = `${ev.clientX}px`
    cursorRef.current.style.top = `${ev.clientY}px`
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  return (
    <>
      <Cursor
        ref={cursorRef}
        className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${
          toggleMenu ? "nav-open" : ""
        }`}
      />
    </>
  )
}

export default CustomCursor
