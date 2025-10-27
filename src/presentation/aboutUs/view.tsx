'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import JusticeImage from '@/assets/pngs/scalesOfJustice-Photoroom.png'
import KAFD from "@/assets/pngs/KAFD.png"


export default function View() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
    >
    <section
      id="aboutUs"
      className="relative bg-gradient-to-br from-white via-[#fffaf2] to-[#fdf8ee] py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24 overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="" />
      {/* <Image className='absolute inset-0 opacity-10 bg-no-repeat bg-right-bottom'
      src={KAFD}
      alt="KAFD"
      /> */}

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text content */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#9b7b16] mb-6 flex items-center">
            <span className="inline-block w-10 h-1 bg-[#9b7b16] mr-3 rounded-full"></span>
            Who We Are
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Our Law firm (<span className="font-semibold text-[#9b7b16]">Faisal Abdullah Al-Shahri</span>) is a professional
              company that consists of a distinguished number of experienced and competent lawyers who are experts in various
              legal disciplines to serve our clients throughout the Kingdom of Saudi Arabia.
            </p>
            <p>
              Our legal services are based on the upholding of <span className="text-[#9b7b16] font-medium">justice</span> and the
              execution of legal tasks entrusted to us from our clients, ensuring professional legal practices that help them
              achieve their goals, protect their interests, and prosper sustainably.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-1 md:order-2 relative flex justify-center items-center">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#9b7b16]/10 blur-3xl rounded-full"></div>
          <Image
            src={JusticeImage}
            alt="Symbolic illustration representing justice and professionalism"
            className="rounded-2xl object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
      
    </section>
    </motion.div>
  )
}
