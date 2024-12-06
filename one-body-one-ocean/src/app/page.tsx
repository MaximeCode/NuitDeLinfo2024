// src/app/page.tsx
import Link from "next/link"

export default function App() {
  return (
    <div className="border border-double border-sky-600 flex justify-center">
      {/* Lien vers le Quiz Ludique */}
      <Link href="/quiz" className="text-2xl text-center">
        Quiz Ludique
      </Link>
    </div>
  )
}
