import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <Link href="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">
        Go Home
      </Link>
    </div>
  )
}
