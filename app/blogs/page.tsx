import Link from 'next/link'

export default function Blogs() {
  const industryNews = [
    { title: "The Future of AI in B2B Events", link: "#" },
    { title: "Sustainable Practices in Conference Management", link: "#" },
    { title: "Emerging Trends in Financial Technology", link: "#" },
    { title: "Healthcare Innovations: A 2025 Outlook", link: "#" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-elephant-800 mb-8">Industry News & Insights</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {industryNews.map((news, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-elephant-700 mb-2">{news.title}</h2>
            <Link href={news.link} className="text-sky-600 hover:underline">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

