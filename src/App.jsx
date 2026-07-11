import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Cast from './components/Cast'
import Sponsors from './components/Sponsors'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-nasaba-dark">
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Cast />
          <Sponsors />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
