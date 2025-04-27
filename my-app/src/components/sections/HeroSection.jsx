
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary-300 to-transparent dark:from-primary-800"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text"
        >
          Welcome to DeepSoul
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-8 text-neutral-600 dark:text-neutral-300"
        >
          Emotional support, when you need it most.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#features" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Discover More
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
        
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-16 md:mt-24 w-full max-w-4xl mx-auto"
        >
          <div className="bg-white/50 dark:bg-neutral-800/50 rounded-2xl shadow-xl p-4 border border-neutral-200 dark:border-neutral-700">
            <div className="w-full h-48 md:h-64 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500 dark:text-neutral-400 italic">Hero image placeholder</p>
            </div>
          </div>
        </motion.div> */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="mt-16 md:mt-24 w-full max-w-4xl mx-auto"
      >
        <div className="bg-white/50 dark:bg-neutral-800/50 rounded-2xl shadow-xl p-4 border border-neutral-200 dark:border-neutral-700">
          <div className="w-full h-48 md:h-64 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center overflow-hidden">
            {/* <img
              src="/hero-image.png"
              alt="DeepSoul Hero"
              className="object-cover w-full h-full rounded-lg"
            /> */}
            <img
  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80"
  alt="DeepSoul Hero"
  className="object-cover w-full h-full rounded-lg"
/>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;