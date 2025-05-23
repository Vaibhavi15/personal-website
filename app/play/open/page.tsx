"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Book, Dumbbell, Waves, ChefHat, Calendar, Star, Clock, ArrowRight } from "lucide-react"

export default function OpenPage() {
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState("books")
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    setAnimateIn(true)
    // Check for tab parameter in URL
    const tab = searchParams.get("tab")
    if (tab && ["books", "fitness", "scuba", "cooking"].includes(tab)) {
      setActiveSection(tab)
    }
  }, [searchParams])

  const handleSectionChange = (section: string) => {
    setAnimateIn(false)
    setTimeout(() => {
      setActiveSection(section)
      setAnimateIn(true)
    }, 300)
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
              <h1 className="text-6xl font-black tracking-tighter uppercase">OPEN</h1>
              <div className="flex gap-4 items-center">
                <div className="h-8 w-8 bg-blue-600"></div>
                <p className="text-2xl font-mono max-w-3xl">
                  Living life openly. Tracking my journey through books, fitness, scuba diving, and cooking.
                </p>
              </div>
            </div>

            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              <p className="font-mono text-lg mb-6">
                For years, I've embraced transparency in my personal goals and growth. This page is my public
                accountability system—a blend of metrics, stories, and reflections that capture my journey outside of
                work. I'll update this regularly as new adventures unfold.
              </p>

              <div className="flex flex-wrap gap-4 items-center mb-8">
                <div className="flex items-center gap-2 bg-yellow-500 px-3 py-1 border-2 border-black">
                  <Calendar className="h-5 w-5" />
                  <span className="font-bold">Last updated: May 22, 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 border-2 border-black">
                  <Clock className="h-5 w-5" />
                  <span className="font-bold">2025 Progress: 42%</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <button
                  onClick={() => handleSectionChange("books")}
                  className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                    activeSection === "books" ? "bg-red-600 text-white shadow-brutal" : "bg-white hover:bg-red-100"
                  }`}
                >
                  <Book className="h-6 w-6" />
                  <span>BOOKS</span>
                </button>
                <button
                  onClick={() => handleSectionChange("fitness")}
                  className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                    activeSection === "fitness" ? "bg-blue-600 text-white shadow-brutal" : "bg-white hover:bg-blue-100"
                  }`}
                >
                  <Dumbbell className="h-6 w-6" />
                  <span>FITNESS</span>
                </button>
                <button
                  onClick={() => handleSectionChange("scuba")}
                  className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                    activeSection === "scuba" ? "bg-yellow-500 shadow-brutal" : "bg-white hover:bg-yellow-100"
                  }`}
                >
                  <Waves className="h-6 w-6" />
                  <span>SCUBA</span>
                </button>
                <button
                  onClick={() => handleSectionChange("cooking")}
                  className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                    activeSection === "cooking"
                      ? "bg-black text-white shadow-brutal-inverse"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <ChefHat className="h-6 w-6" />
                  <span>COOKING</span>
                </button>
              </div>

              <div className={`transition-opacity duration-300 ${animateIn ? "opacity-100" : "opacity-0"}`}>
                {activeSection === "books" && <BooksSection />}
                {activeSection === "fitness" && <FitnessSection />}
                {activeSection === "scuba" && <ScubaSection />}
                {activeSection === "cooking" && <CookingSection />}
              </div>
            </div>

            <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
              <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2">NOW & NEXT</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 uppercase">CURRENTLY</h3>
                  <ul className="space-y-3 font-mono">
                    <li className="flex items-start gap-3">
                      <Book className="h-5 w-5 mt-1 flex-shrink-0 text-red-600" />
                      <span>Reading: "Made to Stick" by Dan and Chip Heath</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Dumbbell className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600" />
                      <span>Training for Devils Circuit obstacle race</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Waves className="h-5 w-5 mt-1 flex-shrink-0 text-yellow-500" />
                      <span>Planning an upcoming Liveaboard scuba trip to Komodo, Indonesia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChefHat className="h-5 w-5 mt-1 flex-shrink-0 text-white" />
                      <span>Experimenting with Indian street food recipes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 uppercase">UPCOMING</h3>
                  <ul className="space-y-3 font-mono">
                    <li className="flex items-start gap-3">
                      <Book className="h-5 w-5 mt-1 flex-shrink-0 text-red-600" />
                      <span>Goal: Read 12 books in 2025 (4/12 completed)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Dumbbell className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600" />
                      <span>Complete Devils Circuit in December 2025</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Waves className="h-5 w-5 mt-1 flex-shrink-0 text-yellow-500" />
                      <span>Obtain Dry Suit and Nitrox certifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChefHat className="h-5 w-5 mt-1 flex-shrink-0 text-white" />
                      <span>Master airfrying and Konkani recipes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-yellow-500 border-8 border-black p-8 shadow-brutal">
              <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2 text-white">
                REFLECTIONS
              </h2>
              <div className="bg-white border-4 border-black p-6">
                <p className="font-mono text-lg mb-4">
                  "The most valuable insights often come from tracking patterns over time. This page isn't just about
                  numbers—it's about noticing connections between different areas of my life and learning from them."
                </p>
                <p className="font-mono text-lg">
                  "I've found that my reading habits directly influence my cooking creativity, and my fitness routine
                  improves my scuba diving endurance. Everything is connected, and being open about these journeys helps
                  me stay accountable and might inspire others along the way."
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

function BooksSection() {
  // Sample data
  const booksRead = 4
  const booksGoal = 12
  const currentlyReading = [
    { title: "Made to Stick", author: "Dan and Chip Heath", progress: 65 },
    { title: "The Book of Clarity", author: "Paras Chopra", progress: 15 },
  ]
  const recentlyCompleted = [
    { title: "Contagious", author: "Jonah Berger", rating: 3, date: "May 10, 2025", genre: "Marketing" },
    { title: "Hacking Health", author: "Mukesh Bansal", rating: 3, date: "April 22, 2025", genre: "Health" },
    { title: "Mahabharata Unravelled", author: "Ami Ganatra", rating: 4, date: "April 5, 2025", genre: "History" },
    { title: "The Mom Test", author: "Rob Fitzpatrick", rating: 4, date: "March 18, 2025", genre: "Business" },
  ]
  const genreBreakdown = [
    { genre: "Business", count: 2, color: "bg-red-600" },
    { genre: "Marketing", count: 1, color: "bg-blue-600" },
    { genre: "Health", count: 1, color: "bg-yellow-500" },
    { genre: "History", count: 1, color: "bg-black" },
  ]

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-red-600 text-white border-4 border-black p-6">
          <h3 className="text-xl font-bold mb-2">READING GOAL</h3>
          <div className="flex items-end gap-2">
            <span className="text-5xl font-black">{booksRead}</span>
            <span className="text-2xl font-bold mb-1">/ {booksGoal}</span>
          </div>
          <p className="mt-2 font-mono">Books read in 2025</p>
          <div className="mt-4 bg-white h-4 border-2 border-black">
            <div className="bg-yellow-500 h-full" style={{ width: `${(booksRead / booksGoal) * 100}%` }}></div>
          </div>
          <p className="mt-2 font-mono text-sm text-right">{Math.round((booksRead / booksGoal) * 100)}% complete</p>
        </div>

        <div className="bg-white border-4 border-black p-6 col-span-2">
          <h3 className="text-xl font-bold mb-4">CURRENTLY READING</h3>
          <div className="space-y-4">
            {currentlyReading.map((book, index) => (
              <div key={index} className="border-2 border-black p-4">
                <h4 className="font-bold">{book.title}</h4>
                <p className="text-sm font-mono mb-2">by {book.author}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-grow bg-gray-200 h-2 border border-black">
                    <div className="bg-red-600 h-full" style={{ width: `${book.progress}%` }}></div>
                  </div>
                  <span className="text-sm font-mono">{book.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">RECENTLY COMPLETED</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {recentlyCompleted.map((book, index) => (
              <div key={index} className="bg-white border-4 border-black p-4 shadow-brutal">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">{book.title}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < book.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-mono mb-2">by {book.author}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 border border-black">{book.genre}</span>
                  <span className="text-xs font-mono">{book.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">GENRE BREAKDOWN</h3>
          <div className="space-y-3">
            {genreBreakdown.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span>{item.genre}</span>
                  <span>{item.count} books</span>
                </div>
                <div className="bg-gray-200 h-6 border-2 border-black">
                  <div className={`${item.color} h-full`} style={{ width: `${(item.count / booksRead) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="https://www.goodreads.com/review/list/49053995?ref=nav_mybooks"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-2"
        >
          VIEW FULL BOOKSHELF <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}

function FitnessSection() {
  // Sample data for workout types
  const workoutTypes = [
    { type: "Strength", hours: 12, color: "bg-blue-600" },
    { type: "Cardio", hours: 8, color: "bg-red-600" },
    { type: "Yoga", hours: 5, color: "bg-yellow-500" },
    { type: "HIIT", hours: 3, color: "bg-black" },
  ]

  const personalBests = [
    { exercise: "Deadlift", value: "40 kg", date: "Aug 2024" },
    { exercise: "5K Run", value: "29:30", date: "April 2018" },
    { exercise: "Plank", value: "2:30", date: "May 2021" },
    { exercise: "Push-ups", value: "22 reps", date: "Aug 2024" },
  ]

  // Days of the week
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  // Months (starting from May 2025)
  const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  // Generate workout data with specific workout types
  // 0 = no workout, 1 = Cardio, 2 = HIIT, 3 = Strength, 4 = Yoga
  const workoutData = {
    // May 2025 (with 3 random days per week with Cardio and HIIT until May 22)
    May: [
      // Week 1 (May 1-4)
      [0, 0, 1, 0, 2, 0, 0], // May 1-4 (Thu, Fri)
      // Week 2 (May 5-11)
      [1, 0, 0, 2, 0, 1, 0], // May 5-11 (Mon, Thu, Sat)
      // Week 3 (May 12-18)
      [0, 2, 0, 0, 1, 0, 2], // May 12-18 (Tue, Fri, Sun)
      // Week 4 (May 19-25) - only until May 22
      [1, 0, 2, 0, 0, 0, 0], // May 19-22 (Mon, Wed)
      // Week 5 (May 26-31)
      [0, 0, 0, 0, 0, 0, 0],
    ],
    // Future months (mostly empty)
    Jun: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    Jul: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    Aug: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    Sep: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    Oct: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    Nov: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    Dec: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
  }

  // Helper function to get color class based on workout type
  const getWorkoutTypeColor = (type) => {
    switch (type) {
      case 0:
        return "bg-gray-100 border-gray-200"
      case 1:
        return "bg-red-600 border-red-700" // Cardio
      case 2:
        return "bg-black border-gray-800" // HIIT
      case 3:
        return "bg-blue-600 border-blue-700" // Strength
      case 4:
        return "bg-yellow-500 border-yellow-600" // Yoga
      default:
        return "bg-gray-100 border-gray-200"
    }
  }

  return (
    <div className="space-y-8">
      <div className="bg-white border-4 border-black p-6">
        <h3 className="text-xl font-bold mb-6">WORKOUT SESSIONS</h3>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[600px] max-w-full">
            <div className="relative">
              {/* Month headers */}
              <div className="flex ml-[80px]">
                {months.map((month, monthIndex) => (
                  <div key={monthIndex} className="text-center font-bold text-sm" style={{ width: "100px" }}>
                    {month}
                  </div>
                ))}
              </div>

              {/* Days of the week with workout squares */}
              {days.map((day, dayIndex) => (
                <div key={day} className="flex items-center mt-1">
                  <div className="w-[80px] font-bold text-sm">{day}</div>
                  <div className="flex">
                    {Object.keys(workoutData).map((month) =>
                      workoutData[month].map((week, weekIndex) => (
                        <div
                          key={`${month}-${weekIndex}-${dayIndex}`}
                          className={`w-6 h-6 border mx-[1px] ${getWorkoutTypeColor(week[dayIndex])}`}
                          title={`${day}, Week ${weekIndex + 1} of ${month}: ${
                            week[dayIndex] === 1
                              ? "Cardio"
                              : week[dayIndex] === 2
                                ? "HIIT"
                                : week[dayIndex] === 3
                                  ? "Strength"
                                  : week[dayIndex] === 4
                                    ? "Yoga"
                                    : "No workout"
                          }`}
                        ></div>
                      )),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-end mt-4 gap-2">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-red-600 border border-red-700"></div>
            <span className="text-xs font-mono">Cardio</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-black border border-gray-800"></div>
            <span className="text-xs font-mono">HIIT</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-600 border border-blue-700"></div>
            <span className="text-xs font-mono">Strength</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-yellow-500 border border-yellow-600"></div>
            <span className="text-xs font-mono">Yoga</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">WORKOUT TYPES (MONTHLY)</h3>
          <div className="space-y-4">
            {workoutTypes.map((workout, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center font-mono">
                  <span>{workout.type}</span>
                  <span>{workout.hours} hours</span>
                </div>
                <div className="bg-white h-8 border-4 border-black flex items-center w-full">
                  <div className={`${workout.color} h-full`} style={{ width: `${(workout.hours / 28) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-4 border-black p-6">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">PERSONAL BESTS</h3>
          <div className="space-y-4">
            {personalBests.map((pb, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-bold">{pb.exercise}</span>
                <div className="text-right">
                  <div className="font-mono text-lg">{pb.value}</div>
                  <div className="text-xs font-mono text-gray-600">{pb.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white border-4 border-black p-6">
        <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">CURRENT FOCUS</h3>
        <div className="bg-white text-black border-2 border-black p-4">
          <h4 className="font-bold">Devils Circuit Training</h4>
          <p className="font-mono text-sm mt-2">
            Training for the Devils Circuit obstacle race in Bengaluru on December 21st, 2025.
          </p>
          <div className="mt-4 bg-gray-200 h-4 border-2 border-black">
            <div className="bg-blue-600 h-full" style={{ width: "15%" }}></div>
          </div>
          <p className="mt-2 font-mono text-sm text-right">15% complete</p>
        </div>
      </div>
    </div>
  )
}

function ScubaSection() {
  // Sample data
  const totalDives = 19
  const divesThisYear = 4
  const certifications = ["Open Water", "Advanced Open Water"]

  const recentDives = [
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
  ]

  const marineLifeSpotted = [
    "Reef Sharks",
    "Sting Rays",
    "Moray Eels",
    "Clownfish",
    "Turtles",
    "Octopus",
    "Barracuda",
    "Lionfish",
  ]

  return (
    <div className="space-y-8">
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
                <div className="text-5xl font-black">14</div>
                <p className="font-mono mt-1">Dive Sites Visited</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">RECENT DIVES</h3>
          <div className="space-y-4">
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
                <p className="text-sm font-mono">Planned for November 2025</p>
              </div>
            </div>

            <div className="bg-gray-100 border-4 border-dashed border-black p-4 flex items-center gap-4 mt-4">
              <div className="h-12 w-12 bg-gray-300 flex items-center justify-center font-bold text-xl rounded-full border-2 border-black">
                ?
              </div>
              <div>
                <h4 className="font-bold">Next: Nitrox Specialty</h4>
                <p className="text-sm font-mono">Planned for January 2026</p>
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

      <div className="mt-8"></div>
    </div>
  )
}

function CookingSection() {
  // Sample data
  const totalRecipes = 48
  const recipesThisYear = 15

  const cuisineExplored = [
    { cuisine: "Indian", recipes: 12, color: "bg-red-600" },
    { cuisine: "Italian", recipes: 8, color: "bg-blue-600" },
    { cuisine: "Japanese", recipes: 6, color: "bg-yellow-500" },
    { cuisine: "Mexican", recipes: 5, color: "bg-black" },
    { cuisine: "Thai", recipes: 4, color: "bg-green-500" },
  ]

  const recentRecipes = [
    {
      name: "Airfried Corn Pakoda",
      cuisine: "Indian",
      difficulty: "Beginner",
      date: "May 2025",
      rating: 3,
      image: "/corn-pakoda.png",
      url: "https://masalachilli.com/corn-pakoda-air-fryer-sweet-corn-pakora/",
    },
    {
      name: "Kabuli Channa Chat",
      cuisine: "Indian",
      difficulty: "Intermediate",
      date: "April 2025",
      rating: 4,
      image: "/kabuli-channa-chat.png",
      url: "https://www.facebook.com/share/v/1A6b1yHGKR/",
    },
    {
      name: "Dahi Papdi Chat Platter",
      cuisine: "Indian",
      difficulty: "Intermediate",
      date: "February 2025",
      rating: 4,
      image: "/dahi-papdi-chat.png",
      url: "https://www.instagram.com/reel/C1JlZcAI5cz/?igsh=bmNmbWZtbzBqbGpm",
    },
  ]

  const skillLevels = [
    { skill: "Knife Skills", level: 80, color: "bg-red-600" },
    { skill: "Baking", level: 65, color: "bg-blue-600" },
    { skill: "Fermentation", level: 50, color: "bg-yellow-500" },
    { skill: "Plating", level: 40, color: "bg-black" },
  ]

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-black text-white border-4 border-black p-6">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">COOKING STATS</h3>
          <div className="space-y-4">
            <div className="bg-white text-black border-2 border-white p-4">
              <div className="text-center">
                <div className="text-5xl font-black">{totalRecipes}</div>
                <p className="font-mono mt-1">Total Recipes Tried</p>
              </div>
            </div>
            <div className="bg-white text-black border-2 border-white p-4">
              <div className="text-center">
                <div className="text-5xl font-black">{recipesThisYear}</div>
                <p className="font-mono mt-1">New Recipes in 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">RECENT CREATIONS</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {recentRecipes.map((recipe, index) => (
              <a
                key={index}
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-4 border-black p-4 shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className="aspect-video bg-gray-200 mb-3 border-2 border-black overflow-hidden">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold">{recipe.name}</h4>
                <div className="flex justify-between items-center mt-1 mb-2">
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 border border-black">{recipe.cuisine}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < recipe.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span>{recipe.difficulty}</span>
                  <span>{recipe.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-4 border-black p-6">
        <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">COOKING GOALS</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border-2 border-black p-4">
            <h4 className="font-bold">Master Airfrying</h4>
            <p className="font-mono text-sm mt-2">
              Perfect the art of airfrying different snacks and meals for healthier cooking alternatives.
            </p>
            <div className="mt-3 bg-gray-200 h-4 border-2 border-black">
              <div className="bg-yellow-500 h-full" style={{ width: "45%" }}></div>
            </div>
          </div>
          <div className="border-2 border-black p-4">
            <h4 className="font-bold">Learn More Konkani Recipes</h4>
            <p className="font-mono text-sm mt-2">
              Preserve and master traditional heirloom recipes from Konkani cuisine.
            </p>
            <div className="mt-3 bg-gray-200 h-4 border-2 border-black">
              <div className="bg-red-600 h-full" style={{ width: "30%" }}></div>
            </div>
          </div>
          <div className="border-2 border-black p-4">
            <h4 className="font-bold">Fermentation Projects</h4>
            <p className="font-mono text-sm mt-2">
              Make curd, cheese, ghee and buttermilk at home using traditional fermentation techniques.
            </p>
            <div className="mt-3 bg-gray-200 h-4 border-2 border-black">
              <div className="bg-blue-600 h-full" style={{ width: "25%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="bg-black text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-2"
        >
          VIEW FULL RECIPE COLLECTION <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
