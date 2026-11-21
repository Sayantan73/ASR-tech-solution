import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import InternshipBanner from '../components/InternshipBanner'
import About from '../components/About'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-white">
      <Navbar />
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><InternshipBanner /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
    </main>
  )
}
