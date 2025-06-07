"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoadingCard } from "@/components/ui/loading-spinner"
import { useTestimonials } from "@/hooks/use-supabase-data"
import { MapPin, Utensils, Compass, Camera, Users, Calendar, ExternalLink, Instagram } from "lucide-react"

export default function AhaaAhaaraPage() {
  const [activeTab, setActiveTab] = useState("about")
  const { testimonials, loading, error } = useTestimonials("ahaa-ahaara")

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
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase break-words">AHAA!AHAARA</h1>
                <a
                  href="https://www.instagram.com/ahaa_ahaara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg hover:text-blue-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@ahaa_ahaara</span>
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <div className="h-8 w-8 bg-yellow-500"></div>
                <p className="text-xl md:text-2xl font-mono max-w-3xl">
                  A culinary treasure hunt through the historic lanes of Bengaluru where food is the prize.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border-8 border-black p-8 shadow-brutal">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iQeJiOC63kK2dQrJsZMWrMOBatmzEy.png"
                  alt="Local Delicacies - Immerse yourself in authentic culinary flavours"
                  className="w-full h-auto border-4 border-black mb-6"
                />
                <h2 className="text-3xl font-black mb-4 uppercase">LOCAL DELICACIES</h2>
                <p className="font-mono text-lg">
                  Immerse yourself in authentic culinary flavours as you visit local underdog eateries that have stood
                  the test of time but remain hidden gems of Bengaluru's food scene.
                </p>
              </div>

              <div className="bg-white border-8 border-black p-8 shadow-brutal">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SZP1pB5s9VI9jggE1kHG9USLyx8JaW.png"
                  alt="Cultural Integration - Live storytelling and heritage stops"
                  className="w-full h-auto border-4 border-black mb-6"
                />
                <h2 className="text-3xl font-black mb-4 uppercase">CULTURAL INTEGRATION</h2>
                <p className="font-mono text-lg">
                  Live storytelling, photo opportunities, and heritage stops that will immerse you in the rich culture
                  and history of Bengaluru's most authentic neighborhoods.
                </p>
              </div>
            </div>

            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S2ZMhqaKidNM6JrmKSOgL2JkwpUKpw.png"
                    alt="Interactive clues - Cleverly designed puzzles"
                    className="w-full h-auto border-4 border-black mb-6"
                  />
                  <h2 className="text-3xl font-black mb-4 uppercase">INTERACTIVE CLUES</h2>
                  <p className="font-mono">
                    Cleverly designed puzzles to engage your brain, which will lead you to the next food stop. Each clue
                    reveals a piece of Bengaluru's culinary history.
                  </p>
                </div>

                <div className="md:col-span-2 bg-yellow-500 border-4 border-black p-6">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">WHY BASAVANGUDI?</h2>
                  <div className="space-y-4 font-mono">
                    <p>
                      <span className="font-bold">Historical, Culinary and Cultural</span> - Basavangudi represents a
                      big chunk of the "Garden" in "Garden City."
                    </p>
                    <p>
                      Home to Bengaluru's roots, Basavangudi boasts of temples like Dodda Ganesha, vintage marketplaces
                      and family-run institutions that have stood the test of time.
                    </p>
                    <p>
                      The area is a haven for traditional south Indian cuisine, from Iyengar bakeries to the famed
                      masala dosa.
                    </p>
                    <p>
                      With its heritage homes, age-old traditions like the Kadlekai Parishe (groundnut fair) and vibrant
                      street life, Basavangudi offers a story at every corner.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button
                onClick={() => setActiveTab("about")}
                className={`p-4 border-4 border-black font-bold text-lg transition-all ${
                  activeTab === "about" ? "bg-blue-600 text-white shadow-brutal" : "bg-white hover:bg-blue-100"
                }`}
              >
                ABOUT THE EXPERIENCE
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`p-4 border-4 border-black font-bold text-lg transition-all ${
                  activeTab === "details" ? "bg-yellow-500 shadow-brutal" : "bg-white hover:bg-yellow-100"
                }`}
              >
                EXPERIENCE DETAILS
              </button>
              <button
                onClick={() => setActiveTab("testimonials")}
                className={`p-4 border-4 border-black font-bold text-lg transition-all ${
                  activeTab === "testimonials"
                    ? "bg-black text-white shadow-brutal-inverse"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                TESTIMONIALS
              </button>
            </div>

            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              {activeTab === "about" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">
                    ABOUT THE EXPERIENCE
                  </h2>
                  <p className="font-mono text-lg">
                    Ahaa! Ahaara is a unique food treasure hunt that takes you through the historic lanes of Bengaluru,
                    specifically focusing on the culturally rich area of Basavangudi. This isn't just a food walk—it's
                    an immersive experience that combines culinary exploration, cultural discovery, and interactive
                    problem-solving.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Utensils className="h-6 w-6 mt-1 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg">Culinary Discovery</h3>
                          <p className="font-mono">
                            Sample authentic local delicacies from family-run establishments that have perfected their
                            recipes over generations. From crispy dosas to melt-in-your-mouth sweets, experience the
                            true flavors of South India.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Compass className="h-6 w-6 mt-1 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg">Interactive Navigation</h3>
                          <p className="font-mono">
                            Follow cleverly designed clues that lead you from one food stop to the next, uncovering
                            hidden gems and secret spots that even many locals don't know about.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Camera className="h-6 w-6 mt-1 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg">Cultural Immersion</h3>
                          <p className="font-mono">
                            Visit historical landmarks, temples, and heritage sites while learning about the rich
                            cultural tapestry of Bengaluru through engaging storytelling and photo opportunities.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Users className="h-6 w-6 mt-1 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg">Community Connection</h3>
                          <p className="font-mono">
                            Meet the people behind the food—passionate cooks, bakers, and culinary artisans who are
                            preserving traditional recipes and techniques in a rapidly modernizing city.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "details" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">
                    EXPERIENCE DETAILS
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-yellow-500 border-4 border-black p-6">
                      <h3 className="text-xl font-bold mb-4 uppercase">LOGISTICS</h3>
                      <ul className="space-y-3 font-mono">
                        <li className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                          <span>
                            <span className="font-bold">Location:</span> Basavangudi, Bengaluru
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 mt-1 flex-shrink-0" />
                          <span>
                            <span className="font-bold">Duration:</span> 3-4 hours
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Users className="h-5 w-5 mt-1 flex-shrink-0" />
                          <span>
                            <span className="font-bold">Group Size:</span> 5-15 people
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Utensils className="h-5 w-5 mt-1 flex-shrink-0" />
                          <span>
                            <span className="font-bold">Food Stops:</span> 5-7 authentic eateries
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-600 text-white border-4 border-black p-6">
                      <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-white pb-2">WHAT TO EXPECT</h3>
                      <ul className="space-y-3 font-mono">
                        <li>• Solve puzzles that reveal the cultural significance of each location</li>
                        <li>• Taste authentic South Indian cuisine from family-run establishments</li>
                        <li>• Learn about Bengaluru's history and cultural heritage</li>
                        <li>• Explore hidden lanes and markets off the tourist track</li>
                        <li>• Take memorable photos at designated photo spots</li>
                        <li>• Connect with fellow food enthusiasts and culture lovers</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-black text-white border-4 border-black p-6 mt-6">
                    <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-white pb-2">HOW TO BOOK</h3>
                    <p className="font-mono mb-4">
                      Ready to embark on a culinary treasure hunt through Bengaluru's historic lanes? Book your Ahaa!
                      Ahaara experience through our Instagram page or contact us directly.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://www.instagram.com/ahaa_ahaara/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black border-4 border-white px-4 py-2 font-bold shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
                      >
                        <Instagram className="h-5 w-5" />
                        INSTAGRAM
                      </a>
                      <a
                        href="mailto:paivaibhavi15@gmail.com"
                        className="bg-yellow-500 text-black border-4 border-white px-4 py-2 font-bold shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all"
                      >
                        EMAIL US
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "testimonials" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">TESTIMONIALS</h2>

                  {loading ? (
                    <LoadingCard />
                  ) : error ? (
                    <div className="bg-red-600 text-white border-4 border-black p-6">
                      <p className="font-mono">Failed to load testimonials: {error}</p>
                    </div>
                  ) : (
                    <>
                      <div className="grid gap-6 md:grid-cols-2">
                        {testimonials.map((testimonial) => (
                          <div key={testimonial.id} className="bg-white border-4 border-black p-6 shadow-brutal">
                            <p className="font-mono italic mb-4">"{testimonial.content}"</p>
                            <div className="font-bold">
                              - {testimonial.name}
                              {testimonial.title && `, ${testimonial.title}`}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center mt-8">
                        <a
                          href="https://www.instagram.com/ahaa_ahaara/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-2"
                        >
                          SEE MORE ON INSTAGRAM <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-blue-600 border-8 border-black p-8 shadow-brutal">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-black mb-6 uppercase text-white">READY FOR A CULINARY ADVENTURE?</h2>
                <p className="font-mono text-white text-lg mb-8">
                  Join us for a unique treasure hunt through Bengaluru's historic lanes, where each clue leads to
                  delicious discoveries and cultural insights.
                </p>
                <a
                  href="https://www.instagram.com/ahaa_ahaara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black border-4 border-black px-8 py-4 font-bold text-xl shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                >
                  BOOK YOUR EXPERIENCE
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
