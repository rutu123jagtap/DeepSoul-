
import { motion } from "framer-motion";

function TherapySection() {
  return (
    <section id="therapy" className="py-20 bg-gradient-to-br from-primary-50 to-white dark:from-neutral-800 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-10">
          {/* <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full bg-neutral-200 dark:bg-neutral-700">
                <div className="w-full h-64 flex items-center justify-center text-neutral-500 dark:text-neutral-400 italic">
                  Therapy image placeholder
                </div>
              </div>
            </div>
          </motion.div> */}
          <motion.div 
  className="lg:w-1/2 mb-10 lg:mb-0"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden">
    <div className="aspect-w-16 aspect-h-9 w-full bg-neutral-200 dark:bg-neutral-700">
      <img
        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1500&q=80"
        alt="Therapy Session"
        className="object-cover w-full h-64 rounded-lg"
      />
    </div>
  </div>
</motion.div>

          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-neutral-900 dark:text-neutral-100">Find Peace with Therapy</h2>
            <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-400">
              Access licensed therapists and get the emotional support you deserve. Our platform connects you with professionals who specialize in various areas of mental health.
            </p>
            <ul className="space-y-4 mb-8">
              {["Personalized matching with therapists", "Secure video sessions", "Affordable pricing options", "Easy scheduling"].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx + 0.3, duration: 0.5 }}
                >
                  <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find a Therapist
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TherapySection;