import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WellnessReset from './components/WellnessReset'
import Founder from './components/Founder'
import Diferenciais from './components/Diferenciais'
import Services from './components/Services'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WellnessReset />
        <Founder />
        <Diferenciais />
        <Services />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}
