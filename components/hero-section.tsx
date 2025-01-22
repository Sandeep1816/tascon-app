import Image from "next/image"
import Link from "next/link"
import bg from '@/public/images/TheDigitalSummit_Louisa_Dahl.jpg'
import img from '@/public/images/36983_1568404251.png'
// import img from '@/'

export default function HeroSection() {
  return (
    <section className="relative py-60 overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70 z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-2xl text-white mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Elevate Your Business with TASCON</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90">
              Connecting visionaries, fostering innovation, and driving industry transformation through world-class B2B
              events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="bg-white text-gray-900 px-8 py-4 rounded-full shadow-lg hover:bg-elephant-50 transition-all duration-300 transform hover:scale-105 inline-block text-center font-semibold"
              >
                Discover TASCON
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 inline-block text-center font-semibold"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Floating Image */}
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform rotate-6 scale-105" />
            <Image
              src={img}
              alt="TASCON Group Team"
              width={800}
              height={600}
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent z-10" />
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-white/20 rounded-full animate-pulse" />
    </section>
  )
}

