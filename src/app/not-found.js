import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F2E7DB]">
      <div className="text-center p-10 rounded-3xl  bg-white max-w-lg">
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold text-[#245D51]">404</h1>
        
        {/* Title */}
        <h2 className="mt-4 text-2xl font-bold text-[#245D51]">
          Oops! Page Not Found
        </h2>
        
        {/* Description */}
        <p className="mt-2 text-gray-600">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Go Home Button */}
        <Link 
          href="/" 
          className="inline-block mt-6 px-8 py-3 rounded-full bg-[#CB8461] text-white font-semibold hover:bg-[#a55e41] transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
