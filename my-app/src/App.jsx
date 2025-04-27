// App.jsx - Enhanced with gradient background
import { ThemeProvider } from './context/ThemeContext'
import TopMenuBar from './components/common/TopMenuBar'
import HeroSection from './components/sections/HeroSection'
import FeaturesSection from './components/sections/FeaturesSection'
import TherapySection from './components/sections/TherapySection'
import CommunitySection from './components/sections/CommunitySection'
import Footer from './components/common/Footer'

function App() {
  return (
    <ThemeProvider>
      {/* <div className="bg-gradient-to-br from-white to-primary-50 dark:from-neutral-900 dark:to-neutral-800 text-neutral-800 dark:text-neutral-100 min-h-screen transition-colors duration-300"> */}
      <div className="bg-gradient-to-br from-white to-primary-50 dark:from-neutral-900 dark:to-neutral-800 text-neutral-800 dark:text-neutral-100 min-h-screen w-full">
        <TopMenuBar />
        <main className="w-full overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <TherapySection />
        <CommunitySection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App