import React from 'react'
import Navbar from '../components/Navbar'
import Typewriter from 'typewriter-effect'
import { motion, useScroll } from "framer-motion"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Clouds from '../components/Clouds';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import Buttons from '../components/Buttons';
export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div>

        <Navbar/>
        <Clouds/>
        <ScrollContainer>
        <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis " style={{color: '#C0C0C0'}}> Hi, It's me</h1>
    <h1 class="display-4 fw-bold text-body-emphasis text-info" style={{color: '#FFDAB9'}}> <Typewriter
  options={{
    strings: ['Tharakadatta!', 'Tharak!','Hegde!', 'TDH!'],
    autoStart: true,
    loop: true,
  }}
/></h1>

        </Animator>
        <Animator>

          <div className='d-flex align-items-center justify-content-center ' >
          <Buttons text="Resume"/>
            </div>
        </Animator>
        </ScrollPage>


        </ScrollContainer>
 

    </div>
  )
}
