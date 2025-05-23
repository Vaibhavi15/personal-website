import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PlayPage() {
  return (
    <div className="min-h-screen font-mono">
      <div className="bg-background text-foreground min-h-screen">
        <Header />

        <main className="container py-12">
          <section className="space-y-8">
            <h1 className="text-6xl font-black tracking-tighter uppercase">PLAY</h1>
            <p className="text-2xl font-mono max-w-3xl">
              Life beyond work — exploring passions, adventures, and creative pursuits that bring joy and balance.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/play/open" className="group">
                <div className="bg-white border-8 border-black p-6 shadow-brutal group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <div className="h-12 w-12 bg-red-600 border-4 border-black mb-4"></div>
                  <h2 className="text-2xl font-black mb-2 uppercase">OPEN</h2>
                  <p className="font-mono">Sharing my journey openly and authentically with the world.</p>
                </div>
              </Link>

              <Link href="/play/ahaa-ahaara" className="group">
                <div className="bg-blue-600 text-white border-8 border-black p-6 shadow-brutal group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <div className="h-12 w-12 bg-yellow-500 border-4 border-black mb-4"></div>
                  <h2 className="text-2xl font-black mb-2 uppercase">AHAA!AHAARA</h2>
                  <p className="font-mono">Exploring global cuisines and the stories behind food discoveries.</p>
                </div>
              </Link>

              <Link href="/play/travel" className="group">
                <div className="bg-black text-white border-8 border-black p-6 shadow-brutal-inverse group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <div className="h-12 w-12 bg-white border-4 border-white mb-4"></div>
                  <h2 className="text-2xl font-black mb-2 uppercase">TRAVEL</h2>
                  <p className="font-mono">Adventures across continents, cultures, and landscapes.</p>
                </div>
              </Link>

              <Link href="/play/boardgames" className="group">
                <div className="bg-red-600 text-white border-8 border-black p-6 shadow-brutal group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <div className="h-12 w-12 bg-blue-600 border-4 border-black mb-4"></div>
                  <h2 className="text-2xl font-black mb-2 uppercase">BOARDGAMES</h2>
                  <p className="font-mono">
                    Strategic thinking and social connection through the world of board games.
                  </p>
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
