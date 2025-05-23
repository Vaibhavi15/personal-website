"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Dice1, Users, Clock, Star, Brain } from "lucide-react"

export default function BoardGamesPage() {
  const [activeCategory, setActiveCategory] = useState("collection")

  const gameStats = {
    totalGames: 26,
    favoriteGenre: "Strategy",
    averageGameNight: "4 hours",
    playersHosted: "50+",
  }

  const gameCollection = [
    {
      name: "Hegemony",
      category: "Economic Simulation",
      players: "2-4",
      duration: "90-180 min",
      rating: 3,
      description: "Lead your class to victory in this economic and political strategy game",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YJm3YwIzgfxAJRFTJ7qZYEjZA7neAo.png",
    },
    {
      name: "SHASN",
      category: "Political Strategy",
      players: "3-5",
      duration: "60-90 min",
      rating: 4,
      description: "The political strategy board game where you become the politician",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vqlPxYFkxkxutkncIseLRgoI3ZUJw6.png",
    },
    {
      name: "Bharata 600 BC",
      category: "Historical Strategy",
      players: "2-8",
      duration: "30-90 min",
      rating: 4,
      description: "A game of context, strategy & choices set in ancient India",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IcgayvhRbcEAcYo9eb8KjmdSNl7UYw.png",
    },
    {
      name: "Moon Adventure",
      category: "Cooperative",
      players: "2-5",
      duration: "40 min",
      rating: 4,
      description: "Work together to survive peril on the moon",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p4ZksbRPGCGlTvRG9BHZGQTXgtEqFu.png",
    },
    {
      name: "Whale to Look",
      category: "Family",
      players: "2-5",
      duration: "30 min",
      rating: 3,
      description: "Whale watching company seeks where to meet whale and orca",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dynpJ9mD4HMB8HoAYWLpFDwsqWiIAw.png",
    },
    {
      name: "Play Nine",
      category: "Card Game",
      players: "2-6",
      duration: "20-30 min",
      rating: 5,
      description: "The card game of golf - strategic and fun for all ages",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WKTHl177TfJXYjswhCDeeB1VcxeAne.png",
    },
    {
      name: "Sequence",
      category: "Strategy",
      players: "2-12",
      duration: "10-30 min",
      rating: 3,
      description: "Choose wisely to get 5 chips in a row. Play defense to slow your opponents down.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bhy09gDccoYcDs4IH2FEAYwCxbkB1W.png",
    },
    {
      name: "Mind Up!",
      category: "Family",
      players: "3-6",
      duration: "15-20 min",
      rating: 4,
      description: "Play the right number to get the right color.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xa4j9HnYMnt9cEyRHkhRxHrQ0fBGRs.png",
    },
    {
      name: "Cryptid",
      category: "Deduction",
      players: "3-5",
      duration: "30-50 min",
      rating: 3,
      description: "Be the first to locate the cryptid through pure deduction and subtle deception.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9s2UyPL7xp6zt6FmGllXHrcTtqxNO9.png",
    },
  ]

  const wishlist = [
    { name: "Gloomhaven", reason: "Epic campaign experience" },
    { name: "Terraforming Mars", reason: "Engine building masterpiece" },
    { name: "Turing Machine", reason: "Innovative deduction puzzle" },
    { name: "Secret Hitler", reason: "Social deduction with a twist" },
    { name: "Mountain Goats", reason: "Tactical climbing game" },
    { name: "Power Grid", reason: "Economic strategy classic" },
  ]

  return (
    <div className="min-h-screen font-mono">
      <div className="bg-background text-foreground min-h-screen">
        <Header />

        <main className="container py-12 px-4 sm:px-6 lg:px-8">
          <section className="space-y-8">
            <div className="space-y-6">
              <Link href="/play" className="text-lg font-bold hover:text-blue-600 transition-colors inline-block">
                ← PLAY
              </Link>
              <h1 className="text-6xl font-black tracking-tighter uppercase">BOARD GAMES</h1>
              <div className="flex gap-4 items-center">
                <div className="h-8 w-8 bg-red-600"></div>
                <p className="text-2xl font-mono max-w-3xl">
                  Strategic thinking and social connection through the wonderful world of modern board games.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-red-600 text-white border-8 border-black p-8 shadow-brutal">
              <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2">GAMING STATS</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-black">{gameStats.totalGames}</div>
                  <p className="font-mono mt-1">Games Owned</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black">{gameStats.favoriteGenre}</div>
                  <p className="font-mono mt-1">Favorite Genre</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black">{gameStats.averageGameNight}</div>
                  <p className="font-mono mt-1">Avg Game Night</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black">{gameStats.playersHosted}</div>
                  <p className="font-mono mt-1">Players Hosted</p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs - Removed Game Nights tab */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setActiveCategory("collection")}
                className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                  activeCategory === "collection" ? "bg-red-600 text-white shadow-brutal" : "bg-white hover:bg-red-100"
                }`}
              >
                <Dice1 className="h-6 w-6" />
                <span>COLLECTION</span>
              </button>
              <button
                onClick={() => setActiveCategory("wishlist")}
                className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                  activeCategory === "wishlist" ? "bg-yellow-500 shadow-brutal" : "bg-white hover:bg-yellow-100"
                }`}
              >
                <Star className="h-6 w-6" />
                <span>WISHLIST</span>
              </button>
              <button
                onClick={() => setActiveCategory("philosophy")}
                className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                  activeCategory === "philosophy"
                    ? "bg-black text-white shadow-brutal-inverse"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <Brain className="h-6 w-6" />
                <span>PHILOSOPHY</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              {activeCategory === "collection" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">GAME COLLECTION</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gameCollection.map((game, index) => (
                      <div
                        key={index}
                        className="border-4 border-black shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                      >
                        <div className="aspect-square bg-gray-200 border-b-4 border-black">
                          <img
                            src={game.image || `/placeholder.svg?height=200&width=200&query=${game.name} board game`}
                            alt={game.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">{game.name}</h3>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < game.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                          </div>

                          <p className="font-mono text-sm">{game.description}</p>

                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span className="font-mono">{game.players}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span className="font-mono">{game.duration}</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-xs font-mono bg-gray-100 px-2 py-1 border border-black">
                              {game.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-blue-600 text-white border-4 border-black p-6">
                      <h3 className="text-xl font-bold mb-2">MOST PLAYED</h3>
                      <p className="font-mono">Play Nine - Perfect balance of strategy and accessibility</p>
                    </div>
                    <div className="bg-yellow-500 border-4 border-black p-6">
                      <h3 className="text-xl font-bold mb-2">NEWEST ADDITION</h3>
                      <p className="font-mono">Mind Up! - Colorful and engaging number game</p>
                    </div>
                    <div className="bg-red-600 text-white border-4 border-black p-6">
                      <h3 className="text-xl font-bold mb-2">GATEWAY GAME</h3>
                      <p className="font-mono">Sequence - Perfect for introducing new players</p>
                    </div>
                  </div>
                </div>
              )}

              {activeCategory === "wishlist" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">WISHLIST</h2>

                  <div className="space-y-4">
                    {wishlist.map((game, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border-4 border-black p-4 shadow-brutal"
                      >
                        <div>
                          <h3 className="font-bold text-lg">{game.name}</h3>
                          <p className="font-mono text-gray-600">{game.reason}</p>
                        </div>
                        <Star className="h-6 w-6 text-yellow-500" />
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-yellow-500 border-4 border-black p-6">
                      <h3 className="text-xl font-bold mb-4 uppercase">CRITERIA FOR NEW GAMES</h3>
                      <ul className="space-y-2 font-mono">
                        <li>• Innovative mechanics or themes</li>
                        <li>• High replay value</li>
                        <li>• Positive community reviews</li>
                        <li>• Fills a gap in current collection</li>
                        <li>• Reasonable price point</li>
                      </ul>
                    </div>

                    <div className="bg-blue-600 text-white border-4 border-black p-6">
                      <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-white pb-2">
                        UPCOMING PURCHASES
                      </h3>
                      <p className="font-mono mb-4">
                        Planning to add 2-3 new games to the collection this year, focusing on cooperative games and
                        engine builders.
                      </p>
                      <p className="font-mono">
                        Next purchase will likely be <span className="font-bold">Gloomhaven</span> for its campaign
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeCategory === "philosophy" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">GAMING PHILOSOPHY</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-red-600 text-white border-4 border-black p-6">
                        <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-white pb-2">
                          WHY BOARD GAMES?
                        </h3>
                        <p className="font-mono">
                          In our digital age, board games offer something unique: genuine face-to-face interaction,
                          strategic thinking, and shared experiences that create lasting memories. They're a perfect
                          blend of entertainment and mental exercise.
                        </p>
                      </div>

                      <div className="bg-yellow-500 border-4 border-black p-6">
                        <h3 className="text-xl font-bold mb-4 uppercase">FAVORITE MECHANICS</h3>
                        <ul className="space-y-2 font-mono">
                          <li>
                            • <span className="font-bold">Engine Building:</span> Creating efficient systems
                          </li>
                          <li>
                            • <span className="font-bold">Tile Placement:</span> Spatial puzzle solving
                          </li>
                          <li>
                            • <span className="font-bold">Card Drafting:</span> Strategic selection
                          </li>
                          <li>
                            • <span className="font-bold">Worker Placement:</span> Resource optimization
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-blue-600 text-white border-4 border-black p-6">
                        <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-white pb-2">
                          GAME SELECTION CRITERIA
                        </h3>
                        <ul className="space-y-2 font-mono">
                          <li>• Meaningful decisions at every turn</li>
                          <li>• Balanced player interaction</li>
                          <li>• Reasonable play time for complexity</li>
                          <li>• Quality components and artwork</li>
                          <li>• Scales well across player counts</li>
                        </ul>
                      </div>

                      <div className="bg-black text-white border-4 border-black p-6 shadow-brutal-inverse">
                        <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-white pb-2">
                          COMMUNITY IMPACT
                        </h3>
                        <p className="font-mono">
                          Board games have introduced me to amazing people and created a regular social circle. There's
                          something special about gathering around a table, learning new strategies, and sharing both
                          victories and defeats.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-500 to-red-600 border-4 border-black p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">PERSONAL GAMING MOTTO</h3>
                    <p className="font-mono text-white text-lg text-center">
                      "It's not about winning or losing—it's about the stories we create, the strategies we explore, and
                      the connections we build around the table. Every game is a new adventure waiting to unfold."
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
