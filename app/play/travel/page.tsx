"use client"

import { useEffect } from "react"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Plane, ExternalLink, Instagram, Globe, Waves } from "lucide-react"

export default function TravelPage() {
  // Change the default active tab from "overview" to "itineraries"
  const [activeTab, setActiveTab] = useState("itineraries")
  const [selectedCountry, setSelectedCountry] = useState(null)

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
    countriesVisited: 10,
    continents: 3,
    googleMapsContributions: "3000+",
    instagramPosts: "150+",
    totalDives: 28,
    divesThisYear: 12,
  }

  // Updated itineraries with details from the spreadsheets
  const itineraries = [
    {
      country: "Vietnam",
      duration: "14 days",
      cities: ["Cao Bang", "Ha Long Bay", "Hanoi", "Phong Nha", "Hoi An", "Dalat"],
      highlights: [
        "Ban Guoc waterfalls",
        "Ha Long Bay cruise",
        "Phong Nha cave exploration",
        "Hai Van Pass jeep tour",
        "Hoi An lantern making",
        "Dalat canyoning",
      ],
      bestTime: "November - April",
      mustTry: ["Pho", "Banh Mi", "Vietnamese Coffee", "Fresh Spring Rolls"],
      image: "/vietnam-travel.png",
      link: "https://docs.google.com/spreadsheets/d/1ifUMsDWCOPPpG_3n8wmR7ftiJdREYFQ7SrF8Sh7TZw0/edit?usp=sharing",
      details: [
        { day: 1, activity: "Ban Guoc waterfalls in Cao Bang / Rest day", location: "Cao Bang" },
        { day: 2, activity: "Cruise to Ha Long Bay", location: "Ha Long Bay" },
        {
          day: 3,
          activity: "Incense stick village, Street food tour, Train street, Huong Sen Healthcare Center",
          location: "Hanoi",
        },
        { day: 4, activity: "Cave exploration and national park - Phong Nha (7 hours hike)", location: "Phong Nha" },
        { day: 5, activity: "Explore the city and rest", location: "Hoi An" },
        {
          day: 6,
          activity: "Drive on the Hai Van Pass (jeep tour), get clothes stitched from Tuong tailor",
          location: "Hoi An",
        },
        {
          day: 7,
          activity: "Cycling tour to herb garden and to the beach, lantern making workshop",
          location: "Hoi An",
        },
        { day: 8, activity: "Explore city and basket boat tour, Teh Dar circus", location: "Hoi An" },
        { day: 9, activity: "Rest day, I-resort (mud spa), Cliff diving", location: "Hoi An" },
        { day: 10, activity: "Canyoning in Dalat, Alpine roller coaster, City tour", location: "Dalat" },
        { day: 11, activity: "Rest day", location: "Dalat" },
        { day: 12, activity: "Kite surfing, White sand dunes quad biking", location: "Mui Ne" },
        { day: 13, activity: "Chu chi tunnel, shooting, golden water puppet", location: "Ho Chi Minh City" },
        { day: 14, activity: "Shopping at Ben then market and rest", location: "Ho Chi Minh City" },
      ],
    },
    {
      country: "Japan",
      duration: "10 days",
      cities: ["Tokyo", "Osaka", "Kyoto", "Mt. Fuji"],
      highlights: [
        "Dotonbori area in Osaka",
        "Fushimi Inari shrine in Kyoto",
        "Cup Noodle Museum",
        "Mt. Fuji day trip",
        "Shibuya Crossing",
        "TeamLab Planets",
      ],
      bestTime: "March - May, September - November",
      mustTry: ["Ramen", "Sushi", "Takoyaki", "Matcha", "Mochi"],
      image: "/japan-travel.png",
      link: "https://docs.google.com/spreadsheets/d/1KZhlDpuaFYcfWoTs5w3Y7V0nPf2pPecuj-3JpPPMkK0/edit?usp=sharing",
      details: [
        { day: 1, activity: "Flight to Tokyo Narita, Shinkansen to Osaka, Explore Dotonbori area", location: "Osaka" },
        {
          day: 2,
          activity: "Kyo-train garaku to Kyoto, Arashiyama bamboo forest, Nishiki market, Kiyomizu-dera temple",
          location: "Kyoto",
        },
        {
          day: 3,
          activity: "Fushimi Inari shrine, Gion district (Geisha spotting), Dinner at Pontocho street",
          location: "Kyoto",
        },
        { day: 4, activity: "Cup Noodle Museum, Osaka Castle, Shinsekai, Tombori river cruise", location: "Osaka" },
        { day: 5, activity: "Namba Yasaka shrine, Kuromon Ichiba Market, Shinkansen to Tokyo", location: "Tokyo" },
        { day: 6, activity: "Mt. Fuji day trip, Kawaguchi lake, Ice caves, Maple corridor", location: "Mt. Fuji" },
        {
          day: 7,
          activity: "TeamLab Planets, Ginza, Akihabara, Ryogoku (Sumo wrestlers), Tokyo Skytree",
          location: "Tokyo",
        },
        {
          day: 8,
          activity: "Meiji Shrine, Takeshita street, Shibuya Parco, MonkeyKart, Shibuya Crossing, Hachiko statue",
          location: "Tokyo",
        },
        { day: 9, activity: "Free day to cover anything missed", location: "Tokyo" },
        { day: 10, activity: "Self-care time, Flight back home", location: "Tokyo" },
      ],
    },
    {
      country: "Indonesia",
      duration: "10 days",
      cities: ["Kuta", "Ubud", "Labuan Bajo", "Komodo"],
      highlights: [
        "Beach horse riding in Kuta",
        "Liveaboard diving in Komodo",
        "ATV riding in Ubud",
        "Mt. Batur sunrise jeep ride",
        "Rice field cycling",
        "Balinese cooking class",
      ],
      bestTime: "April - October",
      mustTry: ["Nasi Gudeg", "Rendang", "Satay", "Gado-gado"],
      image: "/indonesia-travel.png",
      link: "https://docs.google.com/spreadsheets/d/1WI4m03MH-iBeZE7KO7iYfK5Xg6pQEOOCunkkZhMI7aA/edit?usp=sharing",
      details: [
        { day: 1, activity: "Arrival and rest", location: "Kuta/Ubud" },
        { day: 2, activity: "Beach horse riding", location: "Kuta/Ubud" },
        { day: 3, activity: "Flight from DPS to LBJ", location: "Labuan Bajo" },
        { day: 4, activity: "Liveaboard in Komodo", location: "Boat" },
        { day: 5, activity: "Liveaboard in Komodo", location: "Boat" },
        { day: 6, activity: "Liveaboard in Komodo", location: "Labuan Bajo" },
        { day: 7, activity: "Flight from LBJ to DPS, Balinese cooking class, beach club", location: "Ubud" },
        { day: 8, activity: "ATV riding, Rice field cycling", location: "Ubud" },
        { day: 9, activity: "Mt. Batur Sunrise jeep ride, Visit waterfalls", location: "Ubud" },
        { day: 10, activity: "Flight back home", location: "Home" },
      ],
    },
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

            {/* Navigation Tabs - Added scuba diving tab */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <button
                onClick={() => setActiveTab("scuba")}
                className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                  activeTab === "scuba" ? "bg-yellow-500 shadow-brutal" : "bg-white hover:bg-yellow-100"
                }`}
              >
                <Waves className="h-6 w-6" />
                <span>SCUBA DIVING</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              {activeTab === "itineraries" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">
                    TRAVEL ITINERARIES
                  </h2>
                  <div className="space-y-12">
                    {itineraries.map((itinerary, index) => (
                      <div key={index} className="border-4 border-black p-6 shadow-brutal">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="aspect-video bg-gray-200 border-4 border-black">
                            <img
                              src={itinerary.image || "/placeholder.svg"}
                              alt={`${itinerary.country} travel`}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="md:col-span-2 space-y-4">
                            <div className="flex items-center gap-4">
                              <h3 className="text-2xl font-black">{itinerary.country}</h3>
                              <span className="bg-blue-600 text-white px-3 py-1 font-bold border-2 border-black">
                                {itinerary.duration}
                              </span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-bold mb-2 border-b border-black pb-1">CITIES VISITED</h4>
                                <ul className="font-mono space-y-1">
                                  {itinerary.cities.map((city, idx) => (
                                    <li key={idx}>• {city}</li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold mb-2 border-b border-black pb-1">HIGHLIGHTS</h4>
                                <ul className="font-mono space-y-1">
                                  {itinerary.highlights.slice(0, 6).map((highlight, idx) => (
                                    <li key={idx}>• {highlight}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-bold mb-2">BEST TIME TO VISIT</h4>
                                <p className="font-mono">{itinerary.bestTime}</p>
                              </div>

                              <div>
                                <h4 className="font-bold mb-2">MUST TRY FOODS</h4>
                                <p className="font-mono">{itinerary.mustTry.join(", ")}</p>
                              </div>
                            </div>

                            <div className="mt-4">
                              <a
                                href={itinerary.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-2"
                              >
                                VIEW DETAILED ITINERARY <ExternalLink className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "overview" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">COUNTRIES VISITED</h2>

                  {/* Embedded World Map */}
                  <div className="border-4 border-black p-4 shadow-brutal">
                    <iframe
                      src="https://visitedplaces.com/embed/?map=world&projection=geoNaturalEarth1&theme=dark-green&water=1&graticule=0&names=1&duration=2000&placeduration=100&slider=0&autoplay=0&autozoom=none&autostep=0&home=IN&places=~GB_AE_JP_SG_MY_TH_VN_LK_ID~5_3.1_44.5_13.1_0"
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

              {activeTab === "scuba" && <ScubaSection />}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

function ScubaSection() {
  const [recentDives, setRecentDives] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Updated stats
  const totalDives = 28
  const divesThisYear = 12
  const diveSitesVisited = 23
  const certifications = ["Open Water", "Advanced Open Water"]

  useEffect(() => {
    const fetchRecentDives = async () => {
      try {
        const { createClient } = await import("@supabase/supabase-js")

        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

        const { data, error } = await supabase
          .from("scuba_dives")
          .select("location, dive_site, date, max_depth_meters, duration_minutes, highlights")
          .order("date", { ascending: false })
          .limit(6)

        if (error) {
          throw error
        }

        // Format the data for display
        const formattedDives = data.map((dive) => ({
          location: dive.dive_site ? `${dive.dive_site}, ${dive.location}` : dive.location,
          date: new Date(dive.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
          depth: dive.max_depth_meters ? `${dive.max_depth_meters}m` : "N/A",
          duration: dive.duration_minutes ? `${dive.duration_minutes} min` : "N/A",
          highlights: dive.highlights || "Great dive experience",
        }))

        setRecentDives(formattedDives)
      } catch (err) {
        console.error("Error fetching dives:", err)
        setError(err.message)
        // Fallback to static data if Supabase fails
        setRecentDives([
          {
            location: "Shotgun (The Cauldron), Komodo, Indonesia",
            date: "June 15, 2025",
            depth: "20.5m",
            duration: "55 min",
            highlights: "Spotted Giant Trivalley, Lion Fish, Reef shark",
          },
          {
            location: "Batu Bolong, Komodo, Indonesia",
            date: "June 14, 2025",
            depth: "24.5m",
            duration: "44 min",
            highlights: "Spotted Manta ray, Sweet Lips, Titan Trigger Fish",
          },
          {
            location: "Manta Point, Komodo, Indonesia",
            date: "June 14, 2025",
            depth: "13.7m",
            duration: "65 min",
            highlights: "Spotted Turtle, Groupers, Barracuda",
          },
          {
            location: "Busy Buro, Neil Island, Andamans",
            date: "March 29, 2025",
            depth: "23m",
            duration: "51 min",
            highlights: "Spotted Octopus, Unicorn fish, clown fish",
          },
          {
            location: "Romba, Neil Island, Andamans",
            date: "March 29, 2025",
            depth: "25m",
            duration: "36 min",
            highlights: "Spotted Blue spotted stringrays, Sweet lips, Moray eel",
          },
          {
            location: "Aquarium, Neil Island, Andamans",
            date: "March 29, 2025",
            depth: "23m",
            duration: "51 min",
            highlights: "Spotted banded sea krait, groupers, fusiliers",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchRecentDives()
  }, [])

  const marineLifeSpotted = [
    "Reef Sharks",
    "Manta Rays",
    "Sting Rays",
    "Moray Eels",
    "Clownfish",
    "Turtles",
    "Octopus",
    "Barracuda",
    "Lionfish",
    "Giant Trivalley",
    "Groupers",
    "Sweet Lips",
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">SCUBA DIVING ADVENTURES</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-yellow-500 border-4 border-black p-6">
          <h3 className="text-xl font-bold mb-4">DIVE STATS</h3>
          <div className="space-y-4">
            <div className="bg-white border-2 border-black p-4">
              <div className="text-center">
                <div className="text-5xl font-black">{totalDives}</div>
                <p className="font-mono mt-1">Total Dives</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-center">
                <div className="text-5xl font-black">{divesThisYear}</div>
                <p className="font-mono mt-1">Dives in 2025</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-center">
                <div className="text-5xl font-black">{diveSitesVisited}</div>
                <p className="font-mono mt-1">Dive Sites Visited</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">RECENT DIVES</h3>

          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="font-mono">Loading recent dives...</div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border-4 border-red-600 p-4">
              <p className="font-mono text-red-800">Error loading dives: {error}</p>
              <p className="font-mono text-sm text-red-600 mt-2">Showing fallback data</p>
            </div>
          ) : null}

          <div className="grid gap-4 max-h-96 overflow-y-auto">
            {recentDives.map((dive, index) => (
              <div key={index} className="bg-white border-4 border-black p-4 shadow-brutal">
                <h4 className="font-bold text-lg">{dive.location}</h4>
                <div className="grid grid-cols-3 gap-2 mt-2 mb-3">
                  <div className="text-center border-r border-gray-300">
                    <div className="text-xs font-mono text-gray-600">Date</div>
                    <div className="font-mono">{dive.date}</div>
                  </div>
                  <div className="text-center border-r border-gray-300">
                    <div className="text-xs font-mono text-gray-600">Depth</div>
                    <div className="font-mono">{dive.depth}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-mono text-gray-600">Duration</div>
                    <div className="font-mono">{dive.duration}</div>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-2">
                  <div className="text-xs font-mono text-gray-600">Highlights</div>
                  <p className="font-mono text-sm">{dive.highlights}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">CERTIFICATIONS</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border-4 border-black p-4 flex items-center gap-4 shadow-brutal">
                <div className="h-12 w-12 bg-blue-600 text-white flex items-center justify-center font-bold text-xl rounded-full border-2 border-black">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold">{cert}</h4>
                  <p className="text-sm font-mono">
                    {index === 0 ? "Certified: December 2023" : index === 1 ? "Certified: April 2024" : ""}
                  </p>
                </div>
              </div>
            ))}
            <div className="bg-gray-100 border-4 border-dashed border-black p-4 flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-300 flex items-center justify-center font-bold text-xl rounded-full border-2 border-black">
                ?
              </div>
              <div>
                <h4 className="font-bold">Next: Dry Suit Diving</h4>
                <p className="text-sm font-mono">Planned for Feb 2026</p>
              </div>
            </div>

            <div className="bg-gray-100 border-4 border-dashed border-black p-4 flex items-center gap-4 mt-4">
              <div className="h-12 w-12 bg-gray-300 flex items-center justify-center font-bold text-xl rounded-full border-2 border-black">
                ?
              </div>
              <div>
                <h4 className="font-bold">Next: Nitrox Specialty</h4>
                <p className="text-sm font-mono">Planned for Dec 2026</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">MARINE LIFE SPOTTED</h3>
          <div className="grid grid-cols-2 gap-3">
            {marineLifeSpotted.map((creature, index) => (
              <div key={index} className="bg-white border-2 border-black p-3 flex items-center gap-2 shadow-brutal">
                <Waves className="h-5 w-5 text-blue-600" />
                <span className="font-mono">{creature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">BUCKET LIST</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-black"></div>
                <span className="font-mono">Great Barrier Reef, Australia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-black"></div>
                <span className="font-mono">Raja Ampat, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-black"></div>
                <span className="font-mono">Shark cage diving, Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-black"></div>
                <span className="font-mono">Freediving, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal">
        <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">DIVING PHILOSOPHY</h3>
        <div className="bg-white text-black border-4 border-black p-6">
          <p className="font-mono text-lg mb-4">
            "Scuba diving is my meditation underwater. There's something magical about being weightless in an alien
            world, surrounded by creatures that have never seen land. Every dive teaches me something new about marine
            life, conservation, and my own limits."
          </p>
          <p className="font-mono text-lg">
            "From the vibrant coral reefs of the Andamans to the dramatic walls of Komodo, each dive site tells a story.
            I'm passionate about responsible diving and marine conservation—we're visitors in their world, and it's our
            responsibility to protect it."
          </p>
        </div>
      </div>
    </div>
  )
}
