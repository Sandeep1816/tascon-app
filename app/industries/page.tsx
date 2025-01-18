// import Image from 'next/image'

export default function Industries() {
  const industries = [
    'Manufacturing',
    'Bank & Finance',
    'Technology',
    'Health Care',
    'Pharma',
    'Oil & Gas',
    'Ecommerce',
    'Retail',
    'Renewable Energy'
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-elephant-800 mb-8">Industries We Serve</h1>
      
      <p className="text-elephant-600 mb-8">
        TASCON offers holistic solutions, valuable learning experiences, and a wide range of networking opportunities to leading global industries.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div key={index} className="bg-elephant-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-elephant-700 mb-2">{industry}</h2>
            <p className="text-elephant-600">
              We provide tailored solutions and networking opportunities for the {industry.toLowerCase()} sector.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

