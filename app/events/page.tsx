import Link from 'next/link'

export default function Events() {
  const upcomingEvents = [
    { name: "Future DigiTech Summit 2025", date: "January 15-17, 2025" },
    { name: "Patients' Experience Summit 2025", date: "March 22-24, 2025" },
    { name: "Banking & Fintech Summit 2025", date: "May 10-12, 2025" },
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-blue-200">
      <h1 className="text-4xl font-bold text-elephant-800 mb-8">Upcoming Events</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-elephant-700 mb-2">{event.name}</h2>
            <p className="text-elephant-600 mb-4">Date: {event.date}</p>
            <Link href="/contact" className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition duration-300">
              Register Interest
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

