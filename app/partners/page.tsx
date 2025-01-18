import Image from 'next/image'
import Link from 'next/link'

export default function Partners() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-elephant-800 mb-8">Our Partners</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-elephant-700 mb-4">Partner Logos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <Image src={`/placeholder.svg?height=100&width=100`} alt={`Partner ${num}`} width={100} height={100} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-elephant-700 mb-4">Partner with Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-elephant-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Be a Speaker</h3>
            <p className="mb-4">Interested in Speaking at a TASCON Event? We invite industry leaders and emerging innovSpeaking at a TASCON Event? We invite industry leaders and emerging innovators to share their expertise on our platform.</p>
            <Link href="/contact" className="text-sky-600 hover:underline">Contact us to become a speaker</Link>
          </div>
          <div className="bg-elephant-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Be a Sponsor</h3>
            <p className="mb-4">Elevate your brand with TASCON Events. Partner with us to showcase your expertise and connect with decision-makers.</p>
            <Link href="/contact" className="text-sky-600 hover:underline">Explore sponsorship opportunities</Link>
          </div>
          <div className="bg-elephant-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Be a Partner</h3>
            <p className="mb-4">We collaborate closely with information partners, business partners, and media partners to provide high-quality content and valuable resources.</p>
            <Link href="/contact" className="text-sky-600 hover:underline">Become a partner</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

