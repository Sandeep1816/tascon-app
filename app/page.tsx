import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-500 py-20 text-white ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">TASCON Group</h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Connecting Ideas, Creating Impact
          </p>
          <Link
            href="/about"
            className="bg-white text-sky-600 px-6 py-3 rounded-md shadow-lg hover:bg-elephant-50 transition-transform transform hover:scale-105 inline-block"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-elephant-800 mb-6 text-center">About Us</h2>
          <p className="text-lg text-elephant-600 leading-relaxed text-center mb-8">
            TASCON specializes in connecting businesses with opportunities. We represent leading
            industry experts worldwide, leveraging our expertise to curate highly focused B2B
            events.
          </p>
          <div className="text-center">
            <Link
              href="/about"
              className="text-sky-600 hover:underline text-lg"
            >
              Discover more
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-elephant-800 mb-6 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Conferences & Summits',
                description:
                  'We bring together globally recognized speakers who are experts in their fields, offering years of experience and knowledge.',
              },
              {
                title: 'Workshops & Training',
                description:
                  'We provide top-tier, dynamic international trainers across a wide range of industries.',
              },
              {
                title: 'Customized & Managed Events',
                description:
                  'TASCON\'s customized events are proven to drive business growth and reduce costs with high standards of execution.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-elephant-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-elephant-800 mb-6 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                className="bg-elephant-100 p-4 rounded-md text-center hover:bg-sky-50 transition-colors"
              >
                <p className="text-elephant-800 font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-lg mb-8">
            Join us in our mission to inspire and deliver world-class conferences and summits
            globally.
          </p>
          <Link
            href="/contact"
            className="bg-white text-sky-600 px-6 py-3 rounded-md shadow-lg hover:bg-elephant-50 transition-transform transform hover:scale-105 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
