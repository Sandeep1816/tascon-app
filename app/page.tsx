import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import logo from '@/app/icon.png'
// import about from '@/public/images/global-logistics-network-hinrich-foundation.jpg'
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
     <HeroSection />

      {/* About Us Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-elephant-800 mb-6">About TASCON</h2>
              <p className="text-lg text-elephant-600 leading-relaxed mb-8">
                TASCON specializes in connecting businesses with opportunities. We represent leading
                industry experts worldwide, leveraging our expertise to curate highly focused B2B
                events that drive innovation and growth.
              </p>
              <ul className="space-y-4">
                {['Global Network', 'Industry Expertise', 'Innovative Solutions', 'Measurable Impact'].map((item, index) => (
                  <li key={index} className="flex items-center text-elephant-700">
                    <CheckCircle className="text-sky-500 mr-2" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold mt-6 group"
              >
                Learn more about us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <Image
                src={logo}
                alt="TASCON Group Team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl bg-gray-800 p-5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-elephant-50 py-40">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-elephant-800 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Conferences & Summits',
                description:
                  'Bringing together globally recognized speakers and industry experts to share knowledge and insights.',
                icon: '🎙️',
              },
              {
                title: 'Workshops & Training',
                description:
                  'Providing top-tier, dynamic international trainers across a wide range of industries for skill development.',
                icon: '🧠',
              },
              {
                title: 'Customized & Managed Events',
                description:
                  'Tailored events designed to drive business growth and foster meaningful connections.',
                icon: '🤝',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white flex-grow">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold mt-6 group"
                >
                  Learn more
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-elephant-800 mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {[
              'Manufacturing',
              'Bank & Finance',
              'Technology',
              'Health Care',
              'Pharma',
              'Oil & Gas',
              'Ecommerce',
              'Retail',
              'Renewable Energy',
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-sky-300 transition-colors duration-300 border border-elephant-100"
              >
                <p className="text-white font-semibold text-lg">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to inspire and deliver world-class conferences and summits
            that drive innovation and growth across industries.
          </p>
          <Link
            href="/contact"
            className="bg-white text-sky-600 px-8 py-4 rounded-full shadow-lg hover:bg-elephant-50 transition-all duration-300 transform hover:scale-105 inline-block font-semibold text-lg"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </section>
    </div>
  );
}

