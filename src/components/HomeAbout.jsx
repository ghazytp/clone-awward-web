import React, { useState } from "react"
import styled from "styled-components"
import { Container, Flex } from "./ui/ui.styles"
import { motion } from "framer-motion"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/GlobalProvider"

const HomeAboutSection = styled(motion.div)``

const About = styled.div`
  width: 100%;
  color: ${(props) => props.theme.text};
  h2 {
    width: 60%;
    font-size: 2.2rem;
    font-weight: 400;
    margin-left: 124px;
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
  }
`

const Services = styled.div`
  color: ${(props) => props.theme.text};
  width: 460px;
`

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

const HomeAbout = () => {
  const [expandIndex, setExpandIndex] = useState(0)

  return (
    <HomeAboutSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}>
      <Container>
        <Flex style={{ alignItems: "start" }}>
          <About>
            <h2>
              Furrow is an integrated, full-service creative studio offering
              video production, creative development, and post-production
              services.
            </h2>
            <p>
              Everybody's loves story. And we don't stop until we uncovered what
              makes yours worth telling. Wheter it's working directly with you,
              agency partner, or putting finishing touches on something special,
              we're ready to dig in and get our hands dirty-are you?
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expandIndex={expandIndex}
                onClick={() =>
                  setExpandIndex((prev) => {
                    if (prev == details.id) return
                    return details.id
                  })
                }
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${(props) => props.theme.red};
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`

const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: #ea281e;
    transition: all 0.1s ease-in-out;
  }
`

const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: #ea281e;
    display: block;
    font-weight: 300;
  }
`

const Accordion = ({ details, expandIndex, onClick }) => {
  const isOpen = details.id === expandIndex
  const [hovered, setHovered] = useState(false)

  const { cursorStyles, currentTheme } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursorHover = (cursorType) => {
    cursorType = cursorStyles.includes(cursorType) && cursorType
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
    <>
      <AccordionHeader
        onClick={onClick}
        onHoverStart={() => {
          setHovered(true)
          onCursorHover("hovered")
        }}
        onHoverEnd={() => {
          setHovered(false)
          onCursorHover()
        }}
        style={{
          color: hovered
            ? currentTheme === "dark"
              ? "#FFFF"
              : "#000"
            : "#ea281e",
        }}>
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen ? 0 : 45, x: 3 }}
            transition={{
              duration: 0.2,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -45, x: -3 }}
            transition={{
              duration: 0.2,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>

      <AccordionContent animate={{ height: isOpen ? "100%" : "0px" }}>
        {isOpen &&
          details.results.map((result, index) => (
            <motion.span
              initial="initial"
              animate="end"
              transition={{ duration: 0.6 }}
              variants={{
                initial: {
                  opacity: 0,
                },
                end: {
                  opacity: 1,
                },
              }}
              key={index}>
              {result}
            </motion.span>
          ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout

const accordionIds = [
  {
    id: 0,
    title: "Pre-Production",
    results: [
      "Creative Development",
      "Writing",
      "Creative Development",
      "Writing",
      "Storyboards",
      "Art Direction",
      "Creative Direction",
      "Location Scouting",
      "Casting",
    ],
  },
  {
    id: 1,
    title: "Video Production",
    results: [
      "Principle Photography",
      "Production Management",
      "Crew",
      "Dailies",
      "LTO-Archiving",
    ],
  },
  {
    id: 2,
    title: "Post-Production",
    results: [
      "Colour correction",
      "Offline editing",
      "Online editing",
      "VFX",
      "Animation and motion graphics",
      "Closed captioning and subtitles",
      "Descriptive video",
      "Dailies",
      "Quality control",
      "LTO Archiving",
    ],
  },
  {
    id: 3,
    title: "Audio Post-Production",
    results: [
      "We work with some amazing partners who provide:",
      "Sound Design",
      "SFX",
      "Music",
      "Sound Mix",
    ],
  },
]
