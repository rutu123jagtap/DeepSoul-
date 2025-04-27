import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "DeepSoul helped me find my voice again. The community here is truly supportive.",
    author: "...."
  },
  {
    quote: "I never thought online therapy could be so effective. Thank you, DeepSoul.",
    author: "...."
  },
  {
    quote: "The resources here have been invaluable on my journey to better mental health.",
    author: "...."
  }
];

function CommunitySection() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title inline-block mx-auto text-neutral-900 dark:text-neutral-100">Join Our Community</h2>
          <p className="text-lg max-w-2xl mx-auto mt-6 text-neutral-600 dark:text-neutral-400">
            DeepSoul is more than a platform — it's a family of individuals supporting each other through life's challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary-50 dark:bg-neutral-800 p-8 rounded-2xl border border-primary-100 dark:border-neutral-700">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">Why Join Us?</h3>
              <ul className="space-y-4">
                {[
                  "Connect with like-minded individuals",
                  "Share your experiences in a safe space",
                  "Access exclusive community resources",
                  "Participate in group support sessions"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm">✓</span>
                    <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="btn btn-primary w-full">
                  Become a Member
                </button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              What Our Members Say
            </h3>
            
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-soft border border-neutral-200 dark:border-neutral-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * idx, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <p className="italic text-neutral-600 dark:text-neutral-300 mb-4">"{testimonial.quote}"</p>
                <p className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400">— {testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;