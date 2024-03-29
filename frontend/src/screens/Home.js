import React from 'react'
import Navbar from '../components/Navbar'
import Typewriter from 'typewriter-effect'
import { motion, useScroll } from "framer-motion"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Clouds from '../components/Clouds';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';
export default function Home() {
  const { scrollYProgress } = useScroll();
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div>

        <Navbar/>
        <Clouds/>
        <ScrollContainer>
        <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis " style={{color: '#C0C0C0'}}> Hi, It's me</h1>
    <h1 className="display-4 fw-bold text-body-emphasis text-info" style={{color: '#FFDAB9'}}> <Typewriter
  options={{
    strings: ['Tharakadatta!', 'Tharak!','Hegde!', 'TDH!'],
    autoStart: true,
    loop: true,
  }}
/></h1>

        </Animator>

        </ScrollPage>
        <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
        <div className='cover-container d-flex h-100 p-3 mx-auto flex-column'>
        <main role="main" className="inner cover ">
        <h1 className="cover-heading text-center">About Me</h1>
        <p className="lead">Hey there! I'm Tharakadatta D Hegde, originally from Hubli. Currently, I'm a second-year student at IIT Jodhpur, diving into the realms of machine learning, deep learning, and exploring the MERN stack.</p>
        <p className="lead"> Join me on my tech journey!</p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-secondary">Resume</a>
        </p>

        

      </main>
        </div>


        </Animator>
        </ScrollPage>

    

</ScrollContainer>
<Footer/>


 

    </div>
  )
}
