// import React from 'react'
import Projects from '../pages/Projects'
import Certificate from '../pages/Certificate'
import HeroSection from './home/HeroSection'
import AboutSummary from './home/AboutSummary'
import Skills from './home/Skills'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSummary />
      <Skills />

      <Projects limit={3} />

      <Certificate limit={3} />

    </div>
  )
}

export default Home
