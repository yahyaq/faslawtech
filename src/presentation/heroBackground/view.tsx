'use client'

import Image from 'next/image'
import KAFD from '@/assets/svgs/KAFD.svg' // adjust path if using PNG instead
import LongLogoWhite from '@/assets/pngs/logo-white.png'
import LongLogo from "@/assets/pngs/logo.png"

export default function View() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={KAFD}
        alt="King Abdullah Financial District"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Positioned content (logo + slogan on the right) */}
      <div className="absolute inset-0 flex items-center justify-end pr-[10%]">
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          {/* Logo */}
          <Image
            src={LongLogoWhite}
            alt="Faisal Abdullah Al-Shehri Law Firm Logo"
            width={350}
            height={100}
            className="mb-4 w-auto h-auto max-w-sm"
            priority
          />

          {/* Slogan */}
          <p className="text-lg font-light tracking-wide text-gray-200">
            Upholding Justice, Protecting Interests, Enabling Success
          </p>
        </div>
      </div>
    </div>
  )
}
