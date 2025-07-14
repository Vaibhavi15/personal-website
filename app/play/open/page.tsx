"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Book, Dumbbell, ChefHat, Code, Calendar, Star, Clock, ArrowRight, GitCommit } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function OpenPage() {
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState("code")
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    setAnimateIn(true)
    // Check for tab parameter in URL
    const tab = searchParams.get("tab")
    if (tab && ["code", "books", "fitness", "cooking"].includes(tab)) {
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
                  Living life openly. Tracking my journey through code, books, fitness, and cooking.
                </p>
              </div>
            </div>

            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              <p className="font-mono text-lg mb-6">
                For years, I've embraced transparency in my personal goals and growth. This page is my public
                accountability system—a blend of metrics, stories, and reflections that capture my journey outside of
                work. I'll update this regularly as new adventures unfold.
              </p>

              <div className="flex gap-4 items-center mb-8">
                <div className="flex items-center gap-2 bg-yellow-500 px-3 py-1 border-2 border-black">
                  <Calendar className="h-5 w-5" />
                  <span className="font-bold">Last updated: July 4, 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 border-2 border-black">
                  <Clock className="h-5 w-5" />
                  <span className="font-bold">2025 Progress: 45%</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <button
                  onClick={() => handleSectionChange("code")}
                  className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                    activeSection === "code"
                      ? "bg-black text-white shadow-brutal-inverse"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <Code className="h-6 w-6" />
                  <span>CODE</span>
                </button>
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
                  onClick={() => handleSectionChange("cooking")}
                  className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                    activeSection === "cooking" ? "bg-yellow-500 shadow-brutal" : "bg-white hover:bg-yellow-100"
                  }`}
                >
                  <ChefHat className="h-6 w-6" />
                  <span>COOKING</span>
                </button>
              </div>

              <div className={`transition-opacity duration-300 ${animateIn ? "opacity-100" : "opacity-0"}`}>
                {activeSection === "code" && <CodeSection />}
                {activeSection === "books" && <BooksSection />}
                {activeSection === "fitness" && <FitnessSection />}
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
                      <Code className="h-5 w-5 mt-1 flex-shrink-0 text-white" />
                      <span>Building: AI Accountability bot with Atomic Habits principles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Book className="h-5 w-5 mt-1 flex-shrink-0 text-red-600" />
                      <span>Reading: "Made to Stick" by Dan and Chip Heath</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Dumbbell className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600" />
                      <span>Training for Devils Circuit obstacle race</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChefHat className="h-5 w-5 mt-1 flex-shrink-0 text-yellow-500" />
                      <span>Curating database of quick, nutritious and diverse recipes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 uppercase">UPCOMING</h3>
                  <ul className="space-y-3 font-mono">
                    <li className="flex items-start gap-3">
                      <Code className="h-5 w-5 mt-1 flex-shrink-0 text-white" />
                      <span>Launch: AI microlearning app and careers AI bot</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Book className="h-5 w-5 mt-1 flex-shrink-0 text-red-600" />
                      <span>Goal: Read 12 books in 2025 (4/12 completed)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Dumbbell className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600" />
                      <span>Complete Devils Circuit in December 2025</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChefHat className="h-5 w-5 mt-1 flex-shrink-0 text-yellow-500" />
                      <span>Master recipes from konkani cuisine</span>
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
                  "I've found that my reading habits directly influence my coding creativity, my fitness routine
                  improves my focus, and cooking brings people together in the most beautiful way. Everything is
                  connected, and being open about these journeys helps me stay accountable and might inspire others
                  along the way."
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

function CodeSection() {
  const [githubData, setGithubData] = useState(null)
  const [loading, setLoading] = useState(true)

  const currentProjects = [
    {
      name: "AI Personalised Meal Planner",
      description: "A meal-planner that suggests meals and recipes based on your diets and preferences",
      status: "In Progress",
      progress: 85,
      tech: ["Python", "OpenAI API", "SERP API"],
      color: "bg-red-600",
    },
    {
      name: "AI Microlearning App",
      description: "Bite-sized learning content delivered through AI-powered personalization",
      status: "Planning",
      progress: 25,
      tech: ["Next.js", "OpenAI API", "Supabase"],
      color: "bg-blue-600",
    },
    {
      name: "AI Accountability Bot",
      description: "Empathetic AI bot based on Atomic Habits principles to help users build better habits",
      status: "In Progress",
      progress: 10,
      tech: ["Python", "OpenAI API", "FastAPI"],
      color: "bg-yellow-500",
    },
    {
      name: "Email Summarization Automation",
      description: "AI-powered tool to automatically summarize and categorize emails",
      status: "Planning",
      progress: 15,
      tech: ["Python", "Gmail API", "OpenAI API"],
      color: "bg-black",
    },
    {
      name: "Careers AI Bot",
      description: "Daily AI bot that introduces users to one new career path with detailed insights",
      status: "Ideation",
      progress: 10,
      tech: ["Python", "OpenAI API", "Telegram Bot"],
      color: "bg-red-600",
    },
  ]

  const fetchGithubData = async () => {
    try {
      const { data, error } = await supabase
        .from("github_contributions")
        .select("date, contribution_count")
        .gte("date", "2025-06-01")
        .lte("date", "2025-12-31")
        .order("date", { ascending: true })

      if (error) {
        throw error
      }

      // Transform the data into the format needed for the chart
      const contributionData = processSupabaseContributions(data)
      setGithubData(contributionData)
    } catch (error) {
      console.error("Error fetching GitHub data:", error)
      // Fallback to mock data
      setGithubData(generateMockContributions())
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGithubData()
  }, [])

  const processSupabaseContributions = (data) => {
    const contributions = {}
    const startDate = new Date("2025-06-01")
    const endDate = new Date("2025-12-31")

    // Initialize all dates with 0 contributions
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0]
      contributions[dateStr] = 0
    }

    // Fill in actual contribution data
    data.forEach((row) => {
      const dateStr = row.date
      if (contributions.hasOwnProperty(dateStr)) {
        contributions[dateStr] = row.contribution_count || 0
      }
    })

    return contributions
  }

  const renderContributionGraph = () => {
    if (!githubData) return null

    const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    // Create weeks array starting from June 1, 2025
    const weeks = []
    const startDate = new Date("2025-06-01")

    // Find the Sunday of the week containing June 1st
    const firstSunday = new Date(startDate)
    const dayOfWeek = startDate.getDay()
    firstSunday.setDate(startDate.getDate() - dayOfWeek)

    const currentDate = new Date(firstSunday)
    const endDate = new Date("2025-12-31")

    // Generate weeks until we cover all of December
    while (currentDate <= endDate) {
      const week = []
      for (let i = 0; i < 7; i++) {
        const dateStr = currentDate.toISOString().split("T")[0]
        const count = githubData[dateStr] || 0
        const isInRange = currentDate >= new Date("2025-06-01") && currentDate <= new Date("2025-12-31")

        week.push({
          date: dateStr,
          count: isInRange ? count : 0,
          day: currentDate.getDay(),
          inRange: isInRange,
        })
        currentDate.setDate(currentDate.getDate() + 1)
      }
      weeks.push(week)
    }

    // Calculate month positions based on actual weeks
    const monthPositions = []
    let currentMonth = -1
    weeks.forEach((week, weekIndex) => {
      const firstDayOfWeek = week.find((day) => day.inRange)
      if (firstDayOfWeek) {
        const monthNum = new Date(firstDayOfWeek.date).getMonth()
        if (monthNum !== currentMonth && monthNum >= 5 && monthNum <= 11) {
          // Jun (5) to Dec (11)
          currentMonth = monthNum
          monthPositions.push({
            month: months[monthNum - 5], // Adjust index since we start from June
            weekIndex: weekIndex,
          })
        }
      }
    })

    return (
      <div className="overflow-x-auto">
        <div className="min-w-[400px] sm:min-w-[600px]">
          {/* Month labels */}
          <div className="flex mb-2 ml-6 sm:ml-8 relative h-4">
            {monthPositions.map((monthInfo, index) => (
              <div
                key={monthInfo.month}
                className="text-xs font-mono absolute"
                style={{
                  left: `${monthInfo.weekIndex * (window.innerWidth < 640 ? 12 : 16)}px`,
                }}
              >
                {monthInfo.month}
              </div>
            ))}
          </div>

          {/* Days and contribution squares */}
          <div className="flex">
            {/* Day labels */}
            <div className="flex flex-col mr-1 sm:mr-2">
              {days.map((day, index) => (
                <div
                  key={day}
                  className="h-2 sm:h-3 text-xs font-mono flex items-center"
                  style={{ marginBottom: "1px" }}
                >
                  {index % 2 === 1 ? day.slice(0, 2) : ""}
                </div>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="flex">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col mr-0.5 sm:mr-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={day.date}
                      className={`w-2 h-2 sm:w-3 sm:h-3 border mb-[1px] sm:mb-[2px] ${
                        day.inRange ? getContributionColor(day.count) : "bg-gray-50 border-gray-100"
                      }`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const generateMockContributions = () => {
    const contributions = {}
    const startDate = new Date("2025-06-01") // Match the actual date range
    const endDate = new Date("2025-12-31")

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0]
      // Generate random contributions (0-4) with higher probability for weekdays
      const isWeekend = d.getDay() === 0 || d.getDay() === 6
      const maxContributions = isWeekend ? 2 : 4
      contributions[dateStr] = Math.floor(Math.random() * (maxContributions + 1))
    }

    return contributions
  }

  const getContributionColor = (count) => {
    if (count === 0) return "bg-gray-100 border-gray-200"
    if (count === 1) return "bg-yellow-200 border-yellow-300"
    if (count === 2) return "bg-yellow-500 border-yellow-600"
    if (count === 3) return "bg-red-500 border-red-600"
    return "bg-red-600 border-red-700"
  }

  const totalContributions = githubData ? Object.values(githubData).reduce((sum, count) => sum + count, 0) : 0

  return (
    <div className="space-y-8">
      {/* GitHub Contributions */}
      <div className="bg-white border-4 border-black p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">GITHUB CONTRIBUTIONS</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <GitCommit className="h-5 w-5" />
              <span className="font-mono">{totalContributions} contributions</span>
            </div>
            <a
              href="https://github.com/Vaibhavi15"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white border-2 border-black px-3 py-1 font-bold text-sm hover:bg-gray-800 transition-colors"
            >
              VIEW PROFILE
            </a>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-32">
            <div className="font-mono">Loading contributions...</div>
          </div>
        ) : (
          <>
            {renderContributionGraph()}
            <div className="flex justify-between items-center mt-4">
              <div className="text-xs font-mono text-gray-600">June - December 2025</div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs font-mono">Less</span>
                <div className="flex gap-0.5 sm:gap-1">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-100 border border-gray-200"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-200 border border-yellow-300"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 border border-yellow-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 border border-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 border border-red-700"></div>
                </div>
                <span className="text-xs font-mono">More</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Current Projects */}
      <div>
        <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">CURRENT PROJECTS</h3>
        <div className="grid gap-6">
          {currentProjects.map((project, index) => (
            <div key={index} className="bg-white border-4 border-black p-6 shadow-brutal">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-lg">{project.name}</h4>
                    <span
                      className={`px-2 py-1 text-xs font-bold border-2 border-black ${
                        project.status === "In Progress"
                          ? "bg-yellow-500"
                          : project.status === "Planning"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="font-mono text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 border border-black px-2 py-1 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <div className="text-2xl font-black">{project.progress}%</div>
                  <div className="w-20 bg-gray-200 h-3 border-2 border-black mt-1">
                    <div className={`${project.color} h-full`} style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coding Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-black text-white border-4 border-black p-6">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">ACTIVE PROJECTS</h3>
          <div className="text-center">
            <div className="text-5xl font-black">{currentProjects.length}</div>
            <p className="font-mono mt-1">Projects in development</p>
          </div>
        </div>

        <div className="bg-red-600 text-white border-4 border-black p-6">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">LANGUAGES</h3>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between">
              <span>Python</span>
              <span>60%</span>
            </div>
            <div className="flex justify-between">
              <span>JavaScript</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between">
              <span>TypeScript</span>
              <span>15%</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white border-4 border-black p-6">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">FOCUS AREAS</h3>
          <ul className="space-y-2 font-mono text-sm">
            <li>• AI/ML Applications</li>
            <li>• Web Development</li>
            <li>• API Integration</li>
            <li>• Automation Tools</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/Vaibhavi15"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-2"
        >
          VIEW ALL REPOSITORIES <ArrowRight className="h-5 w-5" />
        </a>
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
                <div className="bg-gray-200 h-6 border-4 border-black">
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
  const [workoutData, setWorkoutData] = useState({})
  const [rawWorkoutData, setRawWorkoutData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Sample data for workout types (will be calculated from fetched data)
  const [workoutTypes, setWorkoutTypes] = useState([
    { type: "Strength", hours: 0, color: "bg-blue-600" },
    { type: "Cardio", hours: 0, color: "bg-red-600" },
    { type: "Yoga", hours: 0, color: "bg-yellow-500" },
    { type: "HIIT", hours: 0, color: "bg-black" },
  ])

  const personalBests = [
    { exercise: "Deadlift", value: "40 kg", date: "Aug 2024" },
    { exercise: "5K Run", value: "29:30", date: "April 2018" },
    { exercise: "Plank", value: "2:30", date: "May 2021" },
    { exercise: "Push-ups", value: "22 reps", date: "Aug 2024" },
  ]

  const fetchWorkoutData = async () => {
    try {
      const { data, error } = await supabase
        .from("workout_sessions")
        .select("date, workout_type, duration_minutes")
        .gte("date", "2025-01-01")
        .lte("date", "2025-12-31")
        .order("date", { ascending: true })

      if (error) {
        throw error
      }

      setRawWorkoutData(data)

      // Create a simple date map
      const dateMap = {}
      data.forEach((session) => {
        dateMap[session.date] = {
          type: session.workout_type.toLowerCase(),
          duration: session.duration_minutes || 60,
        }
      })
      setWorkoutData(dateMap)

      // Calculate workout type hours
      const typeHours = calculateWorkoutTypeHours(data)
      setWorkoutTypes((prev) =>
        prev.map((type) => ({
          ...type,
          hours: typeHours[type.type.toLowerCase()] || 0,
        })),
      )
    } catch (err) {
      console.error("Error fetching workout data:", err)
      setError(err.message)
      setWorkoutData({})
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWorkoutData()
  }, [])

  const calculateWorkoutTypeHours = (data) => {
    const minutes = { strength: 0, cardio: 0, yoga: 0, hiit: 0 }
    data.forEach((session) => {
      const type = session.workout_type.toLowerCase()
      if (minutes.hasOwnProperty(type)) {
        minutes[type] += session.duration_minutes || 60
      }
    })

    const hours = {}
    Object.keys(minutes).forEach((type) => {
      hours[type] = Math.round((minutes[type] / 60) * 10) / 10
    })

    return hours
  }

  const renderWorkoutGrid = () => {
    if (!workoutData) return null

    const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    // Create weeks array starting from May 1, 2025
    const weeks = []
    const startDate = new Date("2025-05-01")

    // Find the Sunday of the week containing May 1st
    const firstSunday = new Date(startDate)
    const dayOfWeek = startDate.getDay()
    firstSunday.setDate(startDate.getDate() - dayOfWeek)

    const currentDate = new Date(firstSunday)
    const endDate = new Date("2025-12-31")

    // Generate weeks until we cover all of December
    while (currentDate <= endDate) {
      const week = []
      for (let i = 0; i < 7; i++) {
        const dateStr = currentDate.toISOString().split("T")[0]
        const workout = workoutData[dateStr]
        const isInRange = currentDate >= new Date("2025-05-01") && currentDate <= new Date("2025-12-31")
        const today = new Date()
        const isInFuture = currentDate > today

        week.push({
          date: dateStr,
          workout: workout,
          day: currentDate.getDay(),
          inRange: isInRange,
          inFuture: isInFuture,
        })
        currentDate.setDate(currentDate.getDate() + 1)
      }
      weeks.push(week)
    }

    // Calculate month positions based on actual weeks
    const monthPositions = []
    let currentMonth = -1
    weeks.forEach((week, weekIndex) => {
      const firstDayOfWeek = week.find((day) => day.inRange)
      if (firstDayOfWeek) {
        const monthNum = new Date(firstDayOfWeek.date).getMonth()
        if (monthNum !== currentMonth && monthNum >= 4 && monthNum <= 11) {
          // May (4) to Dec (11)
          currentMonth = monthNum
          monthPositions.push({
            month: months[monthNum - 4], // Adjust index since we start from May
            weekIndex: weekIndex,
          })
        }
      }
    })

    return (
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Month labels */}
          <div className="flex mb-2 ml-8 relative h-4">
            {monthPositions.map((monthInfo, index) => (
              <div
                key={monthInfo.month}
                className="text-xs font-mono absolute"
                style={{
                  left: `${monthInfo.weekIndex * 16}px`, // 16px = 12px width + 4px margin
                }}
              >
                {monthInfo.month}
              </div>
            ))}
          </div>

          {/* Days and workout squares */}
          <div className="flex">
            {/* Day labels */}
            <div className="flex flex-col mr-2">
              {days.map((day, index) => (
                <div key={day} className="h-3 text-xs font-mono flex items-center" style={{ marginBottom: "2px" }}>
                  {index % 2 === 1 ? day.slice(0, 3) : ""}
                </div>
              ))}
            </div>

            {/* Workout grid */}
            <div className="flex">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col mr-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={day.date}
                      className={`w-3 h-3 border mb-[2px] ${getWorkoutGridColor(day)}`}
                      title={`${day.date}: ${getWorkoutTitle(day.workout)}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const getWorkoutGridColor = (day) => {
    if (!day.inRange || day.inFuture) return "bg-gray-50 border-gray-100"
    if (!day.workout) return "bg-gray-100 border-gray-200"

    switch (day.workout.type) {
      case "cardio":
        return "bg-red-600 border-red-700"
      case "hiit":
        return "bg-black border-gray-800"
      case "strength":
        return "bg-blue-600 border-blue-700"
      case "yoga":
        return "bg-yellow-500 border-yellow-600"
      default:
        return "bg-gray-100 border-gray-200"
    }
  }

  const getWorkoutTitle = (workout) => {
    if (!workout) return "No workout"
    const typeName = workout.type.charAt(0).toUpperCase() + workout.type.slice(1)
    return `${typeName} (${workout.duration}min)`
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="bg-white border-4 border-black p-6">
          <div className="flex items-center justify-center h-32">
            <div className="font-mono">Loading workout data...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div className="bg-red-100 border-4 border-red-600 p-6">
          <h3 className="text-xl font-bold mb-4">Error Loading Workout Data</h3>
          <p className="font-mono text-red-800">Error: {error}</p>
          <p className="font-mono text-sm text-red-600 mt-2">Please check your Supabase connection</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="bg-white border-4 border-black p-6">
        <h3 className="text-xl font-bold mb-6">WORKOUT SESSIONS</h3>

        {renderWorkoutGrid()}

        <div className="mt-4">
          <div className="text-xs font-mono text-gray-600 mb-4">May - December 2025</div>

          {/* Legend for workout types */}
          <div className="flex flex-wrap gap-4 justify-center">
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

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">WORKOUT TYPES (HOURS)</h3>
            <div className="space-y-4">
              {workoutTypes.map((workout, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center font-mono">
                    <span>{workout.type}</span>
                    <span>{workout.hours}h</span>
                  </div>
                  <div className="bg-white h-8 border-4 border-black flex items-center w-full">
                    <div
                      className={`${workout.color} h-full`}
                      style={{ width: `${Math.min((workout.hours / 20) * 100, 100)}%` }}
                    ></div>
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

        <div className="bg-blue-600 text-white border-4 border-black p-6 mt-8">
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
    </div>
  )
}

function CookingSection() {
  const [recentRecipes, setRecentRecipes] = useState<
    { name: string; link: string; date: string; rating: number; notes: string }[]
  >([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const cookingGoals = [
    { goal: "Experiment with air-fryer recipes", progress: 35, color: "bg-yellow-500" },
    { goal: "Explore making butter and ghee from scratch", progress: 10, color: "bg-blue-600" },
    { goal: "Learn traditional Konkani recipes", progress: 20, color: "bg-red-600" },
    { goal: "Build personal recipe database", progress: 15, color: "bg-black" },
  ]

  useEffect(() => {
    const fetchRecentRecipes = async () => {
      const fallback = [
        {
          name: "Honey Chilli Paneer Fries",
          link: "https://www.instagram.com/reel/DAYQGCvIuQH/?igsh=MWZpbjIyemFtcGhpMg==",
          date: "June 5 2025",
          rating: 5,
          notes: "Perfect fusion of Indo-Chinese flavours with crispy fries!",
        },
        {
          name: "Malai Broccoli",
          link: "https://www.facebook.com/share/r/19Hco4TFjK/",
          date: "May 28 2025",
          rating: 4,
          notes: "Creamy and flavourful — a great way to make broccoli exciting.",
        },
        {
          name: "Cheesy Stuffed Mushroom",
          link: "https://www.instagram.com/reel/DHa2d_Ev6Hj/?igsh=NncxcDZ6eml1MHRq",
          date: "May 15 2025",
          rating: 5,
          notes: "Amazing appetiser — perfect for entertaining guests.",
        },
        {
          name: "Paneer Tikka Masala",
          link: "https://www.example.com/paneer-tikka",
          date: "May 1 2025",
          rating: 4,
          notes: "Rich and creamy curry with perfectly spiced paneer.",
        },
      ]

      try {
        const { data, error } = await supabase
          .from("recipes_tried")
          .select("recipe_name, recipe_link, date_tried, rating, notes")
          .order("date_tried", { ascending: false })
          .limit(4)

        if (error || !data?.length) {
          setRecentRecipes(fallback)
        } else {
          const formatted = data.map((r) => ({
            name: r.recipe_name,
            link: r.recipe_link,
            date: new Date(r.date_tried).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }),
            rating: r.rating ?? 0,
            notes: r.notes ?? "",
          }))
          setRecentRecipes(formatted)
        }
      } catch (e: any) {
        console.error(e)
        setError(e.message)
        setRecentRecipes(fallback)
      } finally {
        setLoading(false)
      }
    }

    fetchRecentRecipes()
  }, [])

  return (
    <div className="space-y-8">
      {/* cooking goals */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border-4 border-black p-6">
          <h3 className="text-xl font-bold mb-4">COOKING GOALS 2025</h3>
          <div className="space-y-4">
            {cookingGoals.map((goal) => (
              <div key={goal.goal} className="space-y-1">
                <div className="flex justify-between font-mono text-sm">
                  <span>{goal.goal}</span>
                  <span className="font-bold">{goal.progress}%</span>
                </div>
                <div className="bg-gray-200 h-4 border-2 border-black">
                  <div className={`${goal.color} h-full`} style={{ width: `${goal.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* recently tried recipes */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">RECENTLY TRIED RECIPES</h3>

          {loading ? (
            <div className="flex items-center justify-center h-32 font-mono">Loading…</div>
          ) : (
            <>
              {error && (
                <div className="bg-yellow-100 border-4 border-yellow-600 p-4 mb-4 font-mono text-sm text-yellow-700">
                  {error}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                {recentRecipes.map((r) => (
                  <div key={r.name} className="bg-white border-4 border-black p-4 shadow-brutal">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold text-sm">{r.name}</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < r.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="font-mono text-xs mb-1">{r.date}</p>
                    <p className="font-mono text-xs mb-2">{r.notes}</p>
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white border-2 border-black px-3 py-1 text-xs font-bold inline-block"
                    >
                      VIEW RECIPE
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
