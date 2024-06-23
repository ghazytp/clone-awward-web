import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import homeVideo from "../assets/video/video.mp4"
import { useWindowSize } from "../hooks/useWindowSize"
import { useGlobalStateContext } from "../context/GlobalProvider"
import { motion } from "framer-motion"

const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`

const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`
const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`

const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${(props) => props.theme.text};
  pointer-events: none;
`
const HeadLine = styled(motion.span)`
  display: block;
  font-size: 22rem;
  font-weight: 900;
  line-height: 0.76;
`

const HomePage = () => {
  const size = useWindowSize()
  const canvasRef = useRef(null)
  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    let renderingElement = canvasRef.current
    let drawingElement = renderingElement.cloneNode()

    let renderingContext = renderingElement.getContext("2d")
    let drawingContext = drawingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false

    renderingContext.globalCompositeOperation = "source-over"
    renderingContext.fillStyle = currentTheme === "dark" ? "#000000" : "#ffff"
    renderingContext.fillRect(0, 0, size.width, size.height)

    drawingContext.fillStyle = "red"

    renderingElement.addEventListener("mouseover", (ev) => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("click", (ev) => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", (ev) => {
      moving = false
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", (e) => {
      if (moving) {
        drawingContext.globalCompositeOperation = "source-over"
        renderingContext.globalCompositeOperation = "destination-out"

        let currentX = e.pageX - renderingElement.offsetLeft
        let currentY = e.pageY - renderingElement.offsetTop

        drawingContext.lineJoin = "round"
        drawingContext.moveTo(lastX, lastY)
        drawingContext.lineTo(currentX, currentY)
        drawingContext.closePath()
        drawingContext.lineWidth = 120
        drawingContext.stroke()
        lastX = currentX
        lastY = currentY

        renderingContext.drawImage(drawingElement, 0, 0)
      }
    })
  }, [currentTheme])

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      tranisiton: {
        duration: 2,
        staggerChildren: 0.5,
      },
    },
  }

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
    },
  }

  return (
    <Banner>
      <Video>
        <video
          src={homeVideo}
          height="100%"
          width="100%"
          loop
          autoPlay
          muted></video>
      </Video>
      <Canvas height={size.height} width={size.width} ref={canvasRef} />

      <BannerTitle
        variants={parent}
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.2,
        }}>
        <HeadLine
          transition={{
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
          variants={child}>
          DIG
        </HeadLine>
        <HeadLine
          transition={{
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
          variants={child}>
          DEEP
        </HeadLine>
      </BannerTitle>
    </Banner>
  )
}

export default HomePage
