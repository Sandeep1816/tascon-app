// import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-elephant-800 mb-8">About TASCON Group</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-elephant-700 mb-4">Our Mission</h2>
        <p className="text-elephant-600 mb-4">
          Our mission is to redefine the B2B events landscape. We execute world-class events through rigorous market research, actively involving industry thought leaders, and meticulously selecting specialized vendors to deliver exceptional service to our clients.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-elephant-700 mb-4">Who We Are</h2>
        <p className="text-elephant-600 mb-4">
          We are the world&apos;s fastest growing B2B event company, orchestrating success through expertly curated conferences and unforgettable special events, providing a strategic gateway to global business growth.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-elephant-700 mb-4">Our Collaborations</h2>
        <p className="text-elephant-600 mb-4">
          Our trainers, speakers, and panelists are recognized as influential thought leaders in their respective fields. These experts are among the most renowned in their industries. We also prioritize hosting our events at top-tier venues to ensure that our clients have an exceptional and memorable experience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-elephant-700 mb-4">How TASCON is Influencing Businesses</h2>
        <ul className="list-disc pl-6 text-elephant-600">
          <li className="mb-2">Driving Innovation: Our events provide cutting-edge insights to keep businesses relevant and effective in today&apos;s landscape.</li>
          <li className="mb-2">Building Relationships: We bring together diverse experts, creating valuable networking opportunities.</li>
          <li className="mb-2">Enabling Investments: Our high-impact events connect founders and entrepreneurs with top tech investors.</li>
          <li>Prime Venues: We host events at top business destinations worldwide, ensuring an exceptional experience.</li>
        </ul>
      </section>
    </div>
  )
}

