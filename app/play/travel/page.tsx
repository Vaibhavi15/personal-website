"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoadingGrid } from "@/components/ui/loading-spinner"
import { useTravelData } from "@/hooks/use-supabase-data"
import { MapPin, Plane, ExternalLink, Instagram, Globe } from "lucide-react"

export default function TravelPage() {
  const [activeTab, setActiveTab] = useState("itineraries")
  const { itineraries, loading, error } = useTravelData()

  if (error) {
    return (
      <div className="min-h-screen font-mono">
        <div className="bg-background text-foreground min-h-screen">
          <Header />
          <main className="container py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-red-600 text-white border-8 border-black p-8 shadow-brutal">
              <h2 className="text-2xl font-black mb-4">ERROR</h2>
              <p className="font-mono">Failed to load travel data: {error}</p>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    )
  }

  const visitedCountries = [
    { name: "India", code: "IN", continent: "Asia", visits: "Home base", highlight: "Diverse cultures and cuisines" },
    {
      name: "Singapore",
      code: "SG",
      continent: "Asia",
      visits: "3 times",
      highlight: "Food paradise and urban planning",
    },
    {
      name: "Malaysia",
      code: "MY",
      continent: "Asia",
      visits: "2 times",
      highlight: "Street food and cultural diversity",
    },
    { name: "Thailand", code: "TH", continent: "Asia", visits: "2 times", highlight: "Temples and Thai cuisine" },
    {
      name: "Sri Lanka",
      code: "LK",
      continent: "Asia",
      visits: "1 time",
      highlight: "Tea plantations and ancient history",
    },
    {
      name: "United Kingdom",
      code: "GB",
      continent: "Europe",
      visits: "1 time",
      highlight: "London's museums and history",
    },
    { name: "UAE", code: "AE", continent: "Asia", visits: "2 times", highlight: "Modern architecture and desert" },
    {
      name: "Vietnam",
      code: "VN",
      continent: "Asia",
      visits: "1 time",
      highlight: "Pho and French colonial architecture",
    },
    { name: "Japan", code: "JP", continent: "Asia", visits: "1 time", highlight: "Precision culture and ramen" },
  ]

  const travelStats = {
    countriesVisited: 9,
    continents: 3,
    googleMapsContributions: "3000+",
    instagramPosts: "150+",
  }

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
              <h1 className="text-6xl font-black tracking-tighter uppercase">TRAVEL</h1>
              <div className="flex gap-4 items-center">
                <div className="h-8 w-8 bg-blue-600"></div>
                <p className="text-2xl font-mono max-w-3xl">
                  Adventures across continents, cultures, and cuisines. Exploring the world one destination at a time.
                </p>
              </div>
            </div>

            {/* Stats and Links */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal">
                <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2">TRAVEL STATS</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-black">{travelStats.countriesVisited}</div>
                    <p className="font-mono mt-1">Countries</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black">{travelStats.continents}</div>
                    <p className="font-mono mt-1">Continents</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black">{travelStats.googleMapsContributions}</div>
                    <p className="font-mono mt-1">Maps Reviews</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black">{travelStats.instagramPosts}</div>
                    <p className="font-mono mt-1">Travel Posts</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-8 border-black p-8 shadow-brutal">
                <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">FOLLOW MY JOURNEY</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Instagram className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Travel & Food Blog</h3>
                      <p className="font-mono mb-3">Follow my adventures and food discoveries around the world</p>
                      <a
                        href="https://www.instagram.com/paiventures/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-2"
                      >
                        @paiventures <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Google Maps Contributions</h3>
                      <p className="font-mono mb-3">3000+ reviews and photos helping fellow travelers</p>
                      <a
                        href="https://maps.app.goo.gl/ybT6RN7MkNQMQ35D6?g_st=ac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-2"
                      >
                        VIEW CONTRIBUTIONS <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setActiveTab("itineraries")}
                className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                  activeTab === "itineraries" ? "bg-red-600 text-white shadow-brutal" : "bg-white hover:bg-red-100"
                }`}
              >
                <Plane className="h-6 w-6" />
                <span>ITINERARIES</span>
              </button>
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                  activeTab === "overview" ? "bg-blue-600 text-white shadow-brutal" : "bg-white hover:bg-blue-100"
                }`}
              >
                <Globe className="h-6 w-6" />
                <span>WORLD MAP</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              {activeTab === "itineraries" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">
                    TRAVEL ITINERARIES
                  </h2>

                  {loading ? (
                    <LoadingGrid count={3} />
                  ) : (
                    <div className="space-y-12">
                      {itineraries.map((itinerary) => (
                        <div key={itinerary.id} className="border-4 border-black p-6 shadow-brutal">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="aspect-video bg-gray-200 border-4 border-black">
                              <img
                                src={itinerary.image_url || "/placeholder.svg"}
                                alt={`${itinerary.country} travel`}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="md:col-span-2 space-y-4">
                              <div className="flex items-center gap-4">
                                <h3 className="text-2xl font-black">{itinerary.country}</h3>
                                {itinerary.duration_days && (
                                  <span className="bg-blue-600 text-white px-3 py-1 font-bold border-2 border-black">
                                    {itinerary.duration_days} days
                                  </span>
                                )}
                              </div>

                              <div className="grid md:grid-cols-2 gap-4">
                                {itinerary.cities && itinerary.cities.length > 0 && (
                                  <div>
                                    <h4 className="font-bold mb-2 border-b border-black pb-1">CITIES VISITED</h4>
                                    <ul className="font-mono space-y-1">
                                      {itinerary.cities.map((city, idx) => (
                                        <li key={idx}>• {city}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {itinerary.highlights && itinerary.highlights.length > 0 && (
                                  <div>
                                    <h4 className="font-bold mb-2 border-b border-black pb-1">HIGHLIGHTS</h4>
                                    <ul className="font-mono space-y-1">
                                      {itinerary.highlights.slice(0, 6).map((highlight, idx) => (
                                        <li key={idx}>• {highlight}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              <div className="grid md:grid-cols-2 gap-4">
                                {itinerary.best_time_to_visit && (
                                  <div>
                                    <h4 className="font-bold mb-2">BEST TIME TO VISIT</h4>
                                    <p className="font-mono">{itinerary.best_time_to_visit}</p>
                                  </div>
                                )}

                                {itinerary.must_try_foods && itinerary.must_try_foods.length > 0 && (
                                  <div>
                                    <h4 className="font-bold mb-2">MUST TRY FOODS</h4>
                                    <p className="font-mono">{itinerary.must_try_foods.join(", ")}</p>
                                  </div>
                                )}
                              </div>

                              {itinerary.spreadsheet_url && (
                                <div className="mt-4">
                                  <a
                                    href={itinerary.spreadsheet_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-2"
                                  >
                                    VIEW DETAILED ITINERARY <ExternalLink className="h-4 w-4" />
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === "overview" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">COUNTRIES VISITED</h2>

                  {/* Embedded World Map */}
                  <div className="border-4 border-black p-4 shadow-brutal">
                    <iframe
                      src="https://visitedplaces.com/embed/?map=world&projection=geoNaturalEarth1&theme=dark-green&water=1&graticule=0&names=1&duration=2000&placeduration=100&slider=0&autoplay=0&autozoom=none&autostep=0&home=IN&places=~GB_AE_JP_SG_MY_TH_VN_LK~5_3.1_44.5_13.1_0"
                      style={{ width: "100%", height: "600px" }}
                      title="Visited Countries Map"
                    ></iframe>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-600 text-white border-4 border-black p-6">
                      <h3 className="text-xl font-bold mb-2">FAVORITE DESTINATION</h3>
                      <p className="font-mono">Japan - Perfect blend of tradition and modernity</p>
                    </div>
                    <div className="bg-yellow-500 border-4 border-black p-6">
                      <h3 className="text-xl font-bold mb-2">NEXT ON LIST</h3>
                      <p className="font-mono">Russia, Iceland, and New Zealand</p>
                    </div>
                    <div className="bg-red-600 text-white border-4 border-black p-6">
                      <h3 className="text-xl font-bold mb-2">TRAVEL STYLE</h3>
                      <p className="font-mono">Cultural immersion with a focus on local cuisine</p>
                    </div>
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
