import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: "Conferences & Summits",
      description: "Our conferences emphasize the latest trends in various industries, technologies, and innovations. We bring together globally recognized speakers who are experts in their fields, offering years of experience and knowledge.",
    },
    {
      title: "Workshops & Training",
      description: "We provide top-tier, dynamic international trainers across a wide range of industries. Our sector-specific training programs feature up-to-date, practical, and interactive courses tailored to the unique needs of industry professionals.",
    },
    {
      title: "Customized & Managed Events",
      description: "TASCON's customized events are proven to drive business growth and reduce costs through the simplicity of our format and the high standards of execution. We handle every aspect of event planning, organization, and execution on your behalf.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-elephant-800 mb-8">Our Services</h1>
      
      {services.map((service, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-elephant-700 mb-4">{service.title}</h2>
          <p className="text-elephant-600 mb-4">{service.description}</p>
          <div className="bg-elephant-100 p-4 rounded-md">
            <p className="text-elephant-700 font-semibold">Testimonial placeholder</p>
          </div>
        </section>
      ))}

      <section>
        <h2 className="text-2xl font-semibold text-elephant-700 mb-4">Audience Generation</h2>
        <p className="text-elephant-600">
          A dedicated team is exclusively assigned to attract a delegate audience for each customized event. This team is thoroughly trained on the client's products, solutions, and business details, ensuring they are well-equipped to recruit the right delegate profiles for your event, conference, or summit.
        </p>
      </section>
    </div>
  )
}

