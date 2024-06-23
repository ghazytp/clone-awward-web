import React, { useState } from "react"
import styled from "styled-components"
import { Container, Flex } from "./ui/ui.styles"
import MVPVideo from "../assets/video/featured-video.mp4"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/GlobalProvider"
import { motion } from "framer-motion"

const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`

const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${(props) => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;
    .arrow {
      height: 80px;
      width: 120px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${(props) => props.theme.text};
        }
      }
    }
  }
`

const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
`

const FeaturedProjects = styled(motion.div)`
  margin-top: 200px;
  button {
    background: #ea281e;
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    span {
      margin-right: 108px;
      display: block;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`

const HomeFeatured = ({ onCursorHover, setToggleMenu }) => {
  const [hovered, setHovered] = useState(false)

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      y: 72,
    },
  }

  return (
    <HomeFeaturedSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}>
      <Container>
        <a>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursorHover("hovered")}
            onMouseLeave={onCursorHover}>
            <Flex $spaceBetween>
              <h3>Featured Projects</h3>
              <motion.div
                animate={{ opacity: hovered ? 48 : 0 }}
                className="meta">
                <h4>PEI SEAFOOD</h4>
                <h4>2019</h4>
              </motion.div>
            </Flex>
            <h2 className="featured-title">
              NOT <br /> HUMBLE
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 8 }}
                  transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57">
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video src={MVPVideo} loop autoPlay muted></video>
          </FeaturedVideo>
        </a>
      </Container>
      <Container>
        <FeaturedProjects
          onHoverStart={() => onCursorHover("pointer")}
          onHoverEnd={onCursorHover}>
          <Flex $flexEnd>
            <button onClick={() => setToggleMenu(true)}>
              <span>All Projects</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured
