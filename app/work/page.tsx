import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WorkPage() {
  return (
    <div className="min-h-screen font-mono">
      <div className="bg-background text-foreground min-h-screen">
        <Header />

        <main className="container py-12">
          <section className="space-y-8">
            <h1 className="text-6xl font-black tracking-tighter uppercase">MY WORK</h1>
            <p className="text-2xl font-mono max-w-3xl">
              Exploring the intersection of technology, creativity, and human connection through various professional
              endeavors.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <Link href="/work/ai" className="group">
                <div className="bg-white border-8 border-black p-6 shadow-brutal group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <div className="h-12 w-12 bg-red-600 border-4 border-black mb-4"></div>
                  <h2 className="text-2xl font-black mb-2 uppercase">AI</h2>
                  <p className="font-mono">
                    Exploring voice-first artificial intelligence applications.
                  </p>
                </div>
              </Link>

              <Link href="/work/projects" className="group">
                <div className="bg-yellow-500 border-8 border-black p-6 shadow-brutal group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <div className="h-12 w-12 bg-black border-4 border-black mb-4"></div>
                  <h2 className="text-2xl font-black mb-2 uppercase">PROJECTS</h2>
                  <p className="font-mono">A collection of technical and creative projects across various domains.</p>
                </div>
              </Link>

              <Link href="/work/mentorship" className="group">
                <div className="bg-blue-600 text-white border-8 border-black p-6 shadow-brutal group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <div className="h-12 w-12 bg-yellow-500 border-4 border-black mb-4"></div>
                  <h2 className="text-2xl font-black mb-2 uppercase">MENTORSHIP</h2>
                  <p className="font-mono">Guiding the next generation of technologists and creative thinkers.</p>
                </div>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
