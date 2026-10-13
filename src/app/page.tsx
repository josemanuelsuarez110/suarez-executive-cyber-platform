import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Services from '@/components/sections/Services'
import Plans from '@/components/sections/Plans'
import Process from '@/components/sections/Process'
import Sectors from '@/components/sections/Sectors'
import FAQ from '@/components/sections/FAQ'
import Certifications from '@/components/sections/Certifications'
import Methodology from '@/components/sections/Methodology'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'
import Leadership from '@/components/sections/Leadership'
import ChatAgent from '@/components/ui/ChatAgent'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Experience />
      <Education />
      <Services />
      <Plans />
      <Process />
      <Sectors />
      <FAQ />
      <Certifications />
      <Methodology />
      <Blog />
      <Contact />
      <ChatAgent />
      <Footer />
    </main>
  )
}
