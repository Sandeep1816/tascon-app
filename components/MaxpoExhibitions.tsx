import Image from "next/image";
import logo from '@/public/images/Layer 1.png'

const MaxpoExhibitions = () => {
  return (
    <div className="bg-slate-300 py-12 px-6 text-center rounded-lg shadow-md">
      <div className="max-w-3xl mx-auto">
        <Image
          src={logo} // Replace with the actual logo path
          alt="Maxpo Exhibitions Logo"
          width={200}
          height={80}
          className="mx-auto mb-4"
        />
        <h2 className="text-3xl font-semibold text-gray-900">Group Company of Maxpo Exhibitions</h2>
        <p className="text-gray-600 mt-4">
          Maxpo Exhibitions is a premier organizer of global events, fostering 
          connections in real estate, technology, and investment sectors.
        </p>
        <a
          href="https://www.maxpo.ae"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default MaxpoExhibitions;
