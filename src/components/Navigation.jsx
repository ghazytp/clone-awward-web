import React, { useState } from "react"
import styled from "styled-components"
import { Container, Flex } from "./ui/ui.styles"
import { getVideoUrl } from "../utils/getVideoUrl"
import { AnimatePresence, motion } from "framer-motion"
import { FooterContent, FooterSocial } from "./Footer"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #ea281e;
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${(props) => props.theme.background};
  }
`
export const CloseNav = styled.div`
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
      background: ${(props) => props.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      .link {
        color: ${(props) => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${(props) => props.theme.background};
        }
      }
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: ${(props) => props.theme.background};
  }
  svg path {
    fill: ${(props) => props.theme.background};
  }
`

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 28%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: #ea281e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;
    }
  }
`

const navRoutes = [
  {
    id: 0,
    title: "not humble",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "bleeping easy",
    path: "/bleeping-easy",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "it takes an island",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 4,
    title: "50 beaches",
    path: "/50-beaches",
    video: "50-beaches.mp4",
  },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursorHover }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: true,
    video: "easy.mp4",
    key: "0",
  })
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}>
            <Container>
              <NavHeader>
                <Flex $spaceBetween $noHeight>
                  <h2>Projects</h2>
                  <CloseNav
                    onClick={() => setToggleMenu((prev) => !prev)}
                    onMouseEnter={() => onCursorHover("pointer")}
                    onMouseLeave={onCursorHover}>
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((item) => (
                    <motion.li
                      onHoverStart={() =>
                        setRevealVideo({
                          show: true,
                          video: item.video,
                          key: item.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          show: false,
                          video: item.video,
                          key: item.id,
                        })
                      }
                      key={item.id}>
                      <a href="#">
                        <motion.div
                          initial={{ x: -108 }}
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                          className="link">
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57">
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"></path>
                            </svg>
                          </span>
                          {item.title}
                        </motion.div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex $spaceBetween>
                  <FooterContent $wider>
                    <p>902.315.1234</p>
                    <p>info@furrow.studio</p>
                  </FooterContent>
                  <FooterContent>
                    <p>15 Cam Unit B</p>
                    <p>University, PE C32 0E2</p>
                  </FooterContent>
                  <FooterSocial>
                    <span
                      className="icon"
                      onMouseEnter={() => onCursorHover("hovered")}
                      onMouseLeave={onCursorHover}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 24">
                        <path
                          d="M3.625 1.236C4.544.346 5.85.044 7.085.006 8.387-.004 9.691.003 10.995.004c.005 1.4.006 2.802 0 4.203-.843-.001-1.687.002-2.53-.001-.534-.034-1.083.378-1.18.918-.013.937-.004 1.875-.004 2.813 1.236.005 2.472-.002 3.708.003a53.297 53.297 0 01-.45 4.05c-1.091.011-2.183 0-3.275.007-.01 4 .005 8-.008 12-1.622.006-3.244-.004-4.866.004-.03-4 .002-8.003-.017-12.004-.791-.008-1.583.006-2.374-.007.003-1.344.001-2.689.001-4.033.791-.01 1.582.002 2.373-.006.024-1.307-.024-2.616.025-3.922.08-1.035.466-2.077 1.226-2.792z"
                          fill="#EA281E"
                          fillRule="nonzero"></path>
                      </svg>
                    </span>
                    <span
                      className="icon"
                      onMouseEnter={() => onCursorHover("hovered")}
                      onMouseLeave={onCursorHover}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 21 21">
                        <g fill="#EA281E" fillRule="evenodd">
                          <path d="M10.5 0C7.648 0 7.29.012 6.17.063 5.054.114 4.29.292 3.623.551a5.146 5.146 0 00-1.86 1.211 5.147 5.147 0 00-1.21 1.86C.291 4.29.113 5.053.062 6.171.012 7.29 0 7.648 0 10.5c0 2.852.012 3.21.063 4.33.051 1.117.229 1.88.488 2.548.269.69.628 1.276 1.211 1.86.584.583 1.17.942 1.86 1.21.668.26 1.431.438 2.549.489 1.12.05 1.477.063 4.329.063 2.852 0 3.21-.012 4.33-.063 1.117-.051 1.88-.229 2.548-.488a5.146 5.146 0 001.86-1.211 5.147 5.147 0 001.21-1.86c.26-.668.438-1.431.489-2.549.051-1.12.063-1.477.063-4.329 0-2.852-.012-3.21-.063-4.33-.051-1.117-.229-1.88-.488-2.548a5.147 5.147 0 00-1.211-1.86 5.146 5.146 0 00-1.86-1.21c-.668-.26-1.431-.438-2.549-.489C13.71.012 13.352 0 10.5 0m0 1.892c2.804 0 3.136.01 4.243.061 1.024.047 1.58.218 1.95.362.49.19.84.418 1.207.785.367.368.595.717.785 1.207.144.37.315.926.362 1.95.05 1.107.061 1.44.061 4.243 0 2.804-.01 3.136-.061 4.243-.047 1.024-.218 1.58-.362 1.95-.19.49-.418.84-.785 1.207a3.252 3.252 0 01-1.207.785c-.37.144-.926.315-1.95.362-1.107.05-1.44.061-4.243.061-2.804 0-3.136-.01-4.243-.061-1.024-.047-1.58-.218-1.95-.362-.49-.19-.84-.418-1.207-.785a3.254 3.254 0 01-.785-1.207c-.144-.37-.315-.926-.362-1.95-.05-1.107-.061-1.44-.061-4.243 0-2.804.01-3.136.061-4.243.047-1.024.218-1.58.362-1.95.19-.49.418-.84.785-1.207a3.253 3.253 0 011.207-.785c.37-.144.926-.315 1.95-.362 1.107-.05 1.44-.061 4.243-.061"></path>
                          <path d="M10.5 14.07a3.57 3.57 0 110-7.14 3.57 3.57 0 010 7.14m0-9.07a5.5 5.5 0 100 11 5.5 5.5 0 000-11"></path>
                          <path d="M17 5a1 1 0 11-2 0 1 1 0 012 0"></path>
                        </g>
                      </svg>
                    </span>
                    <span
                      className="icon"
                      onMouseEnter={() => onCursorHover("hovered")}
                      onMouseLeave={onCursorHover}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 21 18">
                        <path
                          d="M20.99 4.164c-.094 2.026-1.521 4.8-4.283 8.32C13.852 16.162 11.436 18 9.461 18c-1.225 0-2.261-1.12-3.107-3.359l-1.695-6.16C4.03 6.244 3.357 5.123 2.636 5.123c-.158 0-.707.328-1.649.98L0 4.842a259.826 259.826 0 003.064-2.709C4.446.95 5.485.328 6.176.265c1.634-.156 2.64.951 3.018 3.32.408 2.557.69 4.147.849 4.77.472 2.121.99 3.18 1.556 3.18.439 0 1.1-.687 1.98-2.064.879-1.376 1.35-2.422 1.413-3.142.126-1.187-.345-1.782-1.413-1.782-.503 0-1.021.114-1.554.34 1.032-3.349 3.003-4.976 5.914-4.883 2.158.063 3.175 1.45 3.05 4.16"
                          fill="#EA281E"
                          fillRule="evenodd"></path>
                      </svg>
                    </span>
                  </FooterSocial>
                </Flex>
              </NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  className="reveal"></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.video
                      key={revealVideo.key}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: "0.2",
                        ease: "easeInOut",
                      }}
                      loop
                      autoPlay
                      src={getVideoUrl(revealVideo.video)}></motion.video>
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
