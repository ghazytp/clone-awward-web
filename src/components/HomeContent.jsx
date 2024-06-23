import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Container } from "./ui/ui.styles"

const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`

const Content = styled.h2`
  width: 53%;
  font-size: 2.2rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${(props) => props.theme.text};
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

const HomeContent = () => {
  return (
    <HomeContentSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-300px' }}
      variants={variants}>
      <Container>
        <Content>
          Great stories don't just happend— <br /> they need to be uncovered.
          And we dig deep to discover the great stories that lie below the
          surface. Dirt under our fingernails and all.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
