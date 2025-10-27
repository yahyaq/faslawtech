'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import KAFD1 from '@/assets/pngs/KAFD1.png'

const cards = [
  {
    title: 'Mission',
    content:
      'To protect our clients’ interests and achieve their goals by adopting the best legal practices. We rely on research, know-how, and efficiency to find legal solutions. We use state-of-the-art technology to enhance speed and efficiency during the process of court litigation and the execution of legal tasks.',
  },
  {
    title: 'Vision',
    content:
      'To be the best legal service provider and to entrust our work to competent lawyers.',
  },
  {
    title: 'What Sets Us Apart',
    content:
      'Effective and continuous communication with our clients through detailed reports on all legal matters and procedures we undertake. We ensure our clients are always fully informed about the status and progress of their cases.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
}

export default function View() {
  return (
    <section
      id="ourPhilosophy"
      className="relative min-h-screen py-32 px-6 sm:px-10 lg:px-20 overflow-hidden text-white"
    >
      {/* Background with parallax motion and golden glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <Image
            src={KAFD1}
            alt="King Abdullah Financial District background"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#111]/80" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#d4af37]/10 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative max-w-6xl mx-auto text-center space-y-20"
      >
        {/* Section title */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-[#d4af37] mb-4">
            Our Philosophy
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f0d682] mx-auto rounded-full origin-left"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-100">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: false, amount: 0.3 }}
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-500"
            >
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">{card.title}</h3>
            <p className="leading-relaxed">{card.content}</p>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  )
}
