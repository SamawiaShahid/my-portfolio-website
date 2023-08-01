import About from '@/components/About'
import Contacts from '@/components/Contacts'
import Projects from '@/components/Projects'
import SignIn from '@/components/SignIn'
import Skills from '@/components/Skills'
import Hero from '@/components/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects/>
      <About />
      <SignIn />
      <Contacts />
    </>
  )
}
