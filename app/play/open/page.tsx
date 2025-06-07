"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { useBooks, useWorkoutSessions } from "@/hooks/use-supabase-data"
import Link from "next/link"
import { Book, Dumbbell, Waves, Code, Calendar, Star, Clock, ArrowRight, GitCommit } from "lucide-react"

export default function OpenPage() {
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState("code")
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    setAnimateIn(true)
    // Check for tab parameter in URL
    const tab = searchParams.get("tab")
    if (tab && ["code", "books", "fitness", "scuba"].includes(tab)) {
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
                  Living life openly. Tracking my journey through code, books, fitness, and scuba diving.
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
                  <span className="font-bold">Last updated: June 7, 2025</span>
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
                  onClick={() => handleSectionChange("scuba")}
                  className={`flex items-center justify-center gap-2 p-4 border-4 border-black font-bold text-lg transition-all ${
                    activeSection === "scuba" ? "bg-yellow-500 shadow-brutal" : "bg-white hover:bg-yellow-100"
                  }`}
                >
                  <Waves className="h-6 w-6" />
                  <span>SCUBA</span>
                </button>
              </div>

              <div className={`transition-opacity duration-300 ${animateIn ? "opacity-100" : "opacity-0"}`}>
                {activeSection === "code" && <CodeSection />}
                {activeSection === "books" && <BooksSection />}
                {activeSection === "fitness" && <FitnessSection />}
                {activeSection === "scuba" && <ScubaSection />}
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
                      <Waves className="h-5 w-5 mt-1 flex-shrink-0 text-yellow-500" />
                      <span>Planning an upcoming Liveaboard scuba trip to Komodo, Indonesia</span>
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
                      <Waves className="h-5 w-5 mt-1 flex-shrink-0 text-yellow-500" />
                      <span>Obtain Dry Suit and Nitrox certifications</span>
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
                  "I've found that my reading habits directly influence my coding creativity, and my fitness routine
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

function CodeSection() {
  const [githubData, setGithubData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [debugInfo, setDebugInfo] = useState(null)

  const currentProjects = [
    {
      name: "AI Accountability Bot",
      description: "Empathetic AI bot based on Atomic Habits principles to help users build better habits",
      status: "In Progress",
      progress: 65,
      tech: ["Python", "OpenAI API", "FastAPI"],
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
      name: "Blogs Backend",
      description: "Backend infrastructure for the personal website blog system",
      status: "In Progress",
      progress: 40,
      tech: ["Node.js", "MongoDB", "Express"],
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

  useEffect(() => {
    const fetchGithubData = async () => {
      console.log("🚀 Starting GitHub API fetch...")

      try {
        const apiUrl = "https://api.github.com/users/Vaibhavi15/events?per_page=100"
        console.log("📡 Fetching from URL:", apiUrl)

        const response = await fetch(apiUrl)
        console.log("📊 Response status:", response.status)
        console.log("📊 Response headers:", Object.fromEntries(response.headers.entries()))

        if (!response.ok) {
          const errorText = await response.text()
          console.error("❌ GitHub API error response:", errorText)
          throw new Error(`GitHub API returned ${response.status}: ${errorText}`)
        }

        const events = await response.json()
        console.log("✅ GitHub API response received")
        console.log("📈 Total events fetched:", events.length)

        if (events.length > 0) {
          console.log("🔍 First event sample:", {
            type: events[0].type,
            created_at: events[0].created_at,
            repo: events[0].repo?.name,
            actor: events[0].actor?.login,
          })

          console.log(
            "🔍 Event types breakdown:",
            events.reduce((acc, event) => {
              acc[event.type] = (acc[event.type] || 0) + 1
              return acc
            }, {}),
          )

          console.log("📅 Date range:", {
            earliest: events[events.length - 1]?.created_at,
            latest: events[0]?.created_at,
          })
        } else {
          console.warn("⚠️ No events found in GitHub API response")
        }

        // Process events to create contribution data starting from June 2025
        const contributionData = processGithubEvents(events)
        console.log("🔄 Processed contribution data:", {
          totalDays: Object.keys(contributionData).length,
          totalContributions: Object.values(contributionData).reduce((sum, count) => sum + count, 0),
          sampleDates: Object.entries(contributionData).slice(0, 5),
        })

        setGithubData(contributionData)
        setDebugInfo({
          source: "github-api",
          eventsCount: events.length,
          processedDays: Object.keys(contributionData).length,
          totalContributions: Object.values(contributionData).reduce((sum, count) => sum + count, 0),
        })
      } catch (error) {
        console.error("💥 Error fetching GitHub data:", error)
        console.log("🔄 Falling back to mock data...")

        // Fallback to mock data that looks realistic
        const mockData = generateMockContributions()
        console.log("🎭 Generated mock data:", {
          totalDays: Object.keys(mockData).length,
          totalContributions: Object.values(mockData).reduce((sum, count) => sum + count, 0),
          sampleDates: Object.entries(mockData).slice(0, 5),
        })

        setGithubData(mockData)
        setDebugInfo({
          source: "mock-data",
          error: error.message,
          eventsCount: 0,
          processedDays: Object.keys(mockData).length,
          totalContributions: Object.values(mockData).reduce((sum, count) => sum + count, 0),
        })
      } finally {
        setLoading(false)
        console.log("✨ GitHub data fetch completed")
      }
    }

    fetchGithubData()
  }, [])

  const processGithubEvents = (events) => {
    console.log("🔄 Processing GitHub events...")

    const contributions = {}
    const currentDate = new Date()
    const startDate = new Date("2025-06-01")
    const endOfYear = new Date(currentDate.getFullYear(), 11, 31)
    const sixMonthsFromNow = new Date(currentDate)
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6)
    const endDate = sixMonthsFromNow > endOfYear ? sixMonthsFromNow : endOfYear

    console.log("📅 Target date range:", {
      start: startDate.toISOString().split("T")[0],
      end: endDate.toISOString().split("T")[0],
      current: currentDate.toISOString().split("T")[0],
      userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    })

    // Initialize all dates with 0 contributions
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0]
      contributions[dateStr] = 0
    }

    console.log("📊 Initialized", Object.keys(contributions).length, "days with 0 contributions")

    // Map real GitHub events to our future timeline
    if (events && events.length > 0) {
      console.log("🔄 Mapping real GitHub events to future timeline...")

      // Group events by date first
      const eventsByDate = {}
      events.forEach((event) => {
        const eventDate = new Date(event.created_at)
        const dateStr = eventDate.toISOString().split("T")[0]

        if (!eventsByDate[dateStr]) {
          eventsByDate[dateStr] = []
        }
        eventsByDate[dateStr].push(event)
      })

      console.log("📊 Events grouped by date:", Object.keys(eventsByDate).length, "unique dates")
      console.log(
        "📊 Date breakdown:",
        Object.entries(eventsByDate).map(([date, events]) => ({
          date,
          count: events.length,
          types: events.reduce((acc, e) => {
            acc[e.type] = (acc[e.type] || 0) + 1
            return acc
          }, {}),
        })),
      )

      // Get the date range of real GitHub events
      const githubDates = Object.keys(eventsByDate).sort()
      const earliestGithubDate = new Date(githubDates[0])
      const latestGithubDate = new Date(githubDates[githubDates.length - 1])

      console.log("📅 GitHub event date range:", {
        earliest: earliestGithubDate.toISOString().split("T")[0],
        latest: latestGithubDate.toISOString().split("T")[0],
        totalDays: githubDates.length,
      })

      // Calculate the span of GitHub events in days
      const githubSpanDays = Math.ceil((latestGithubDate - earliestGithubDate) / (1000 * 60 * 60 * 24)) + 1
      const targetSpanDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1

      console.log("📊 Mapping strategy:", {
        githubSpanDays,
        targetSpanDays,
        strategy: "proportional mapping from GitHub timeline to target timeline",
      })

      let mappedDates = 0
      let totalValidEvents = 0

      // Map each GitHub date proportionally to our target timeline
      Object.entries(eventsByDate).forEach(([originalDateStr, dateEvents]) => {
        const originalDate = new Date(originalDateStr)

        // Calculate the position of this date within the GitHub timeline (0 to 1)
        const positionInGithubTimeline = (originalDate - earliestGithubDate) / (latestGithubDate - earliestGithubDate)

        // Map this position to our target timeline
        const targetTimelinePosition = positionInGithubTimeline * (endDate - startDate)
        const mappedDate = new Date(startDate.getTime() + targetTimelinePosition)
        const mappedDateStr = mappedDate.toISOString().split("T")[0]

        // Count valid contribution events for this date
        const validEvents = dateEvents.filter(
          (event) => event.type === "PushEvent" || event.type === "CreateEvent" || event.type === "PullRequestEvent",
        )

        // Only map if the target date is within our contributions object
        if (contributions.hasOwnProperty(mappedDateStr)) {
          contributions[mappedDateStr] += validEvents.length
          totalValidEvents += validEvents.length
          mappedDates++

          console.log(`🔄 Mapped ${originalDateStr} → ${mappedDateStr}:`, {
            positionInGithubTimeline: Math.round(positionInGithubTimeline * 100) + "%",
            totalEvents: dateEvents.length,
            validEvents: validEvents.length,
            eventTypes: dateEvents.reduce((acc, e) => {
              acc[e.type] = (acc[e.type] || 0) + 1
              return acc
            }, {}),
          })
        } else {
          console.log(`⚠️ Skipped ${originalDateStr} → ${mappedDateStr}: target date outside range`)
        }
      })

      console.log("✅ Event mapping completed:", {
        totalGithubDates: Object.keys(eventsByDate).length,
        mappedDates,
        totalValidEvents,
        contributionDays: Object.values(contributions).filter((count) => count > 0).length,
      })
    } else {
      console.log("⚠️ No events to process")
    }

    return contributions
  }

  const generateMockContributions = () => {
    console.log("🎭 Generating mock contribution data...")

    const contributions = {}
    const currentDate = new Date()
    const startDate = new Date("2025-06-01")
    // Use the same end date logic as the real data processing
    const endOfYear = new Date(currentDate.getFullYear(), 11, 31)
    const sixMonthsFromNow = new Date(currentDate)
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6)
    const endDate = sixMonthsFromNow > endOfYear ? sixMonthsFromNow : endOfYear

    // Create a pattern of activity (more active on weekdays)
    const activityPattern = [
      [0, 0, 1, 0, 0, 0, 0], // Week 1 pattern
      [0, 2, 1, 0, 3, 0, 0], // Week 2 pattern
      [0, 1, 0, 2, 1, 0, 0], // Week 3 pattern
      [0, 0, 2, 1, 4, 0, 0], // Week 4 pattern
    ]

    let weekCounter = 0
    let totalContributions = 0

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0]
      const dayOfWeek = d.getDay() // 0 = Sunday, 1 = Monday, etc.

      // Get contribution count from pattern
      const patternWeek = weekCounter % activityPattern.length
      const contributionCount = activityPattern[patternWeek][dayOfWeek]

      contributions[dateStr] = contributionCount
      totalContributions += contributionCount

      // Increment week counter on Saturdays
      if (dayOfWeek === 6) {
        weekCounter++
      }
    }

    console.log("🎭 Mock data generated:", {
      totalDays: Object.keys(contributions).length,
      totalContributions,
      activeDays: Object.values(contributions).filter((count) => count > 0).length,
      dateRange: {
        start: startDate.toISOString().split("T")[0],
        end: endDate.toISOString().split("T")[0],
        current: currentDate.toISOString().split("T")[0],
      },
    })

    return contributions
  }

  const getContributionColor = (count) => {
    if (count === 0) return "bg-gray-100 border-gray-200"
    if (count === 1) return "bg-yellow-200 border-yellow-300"
    if (count === 2) return "bg-yellow-500 border-yellow-600"
    if (count === 3) return "bg-red-500 border-red-600"
    return "bg-red-600 border-red-700"
  }

  const renderContributionGraph = () => {
    if (!githubData) return null

    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() // 0-11
    const currentYear = currentDate.getFullYear()

    // Generate month labels starting from June or current month, whichever is appropriate
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const startMonthIndex = Math.max(5, currentMonth) // June (5) or current month
    const months = []

    for (let i = 0; i < 7; i++) {
      const monthIndex = (startMonthIndex + i) % 12
      months.push(monthNames[monthIndex])
    }

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    // Group contributions by week
    const weeks = []
    const startDate = new Date(Math.max(new Date("2025-06-01"), new Date(currentYear, currentMonth, 1)))

    // Find the first Sunday
    const firstSunday = new Date(startDate)
    firstSunday.setDate(startDate.getDate() - startDate.getDay())

    const iterDate = new Date(firstSunday)
    const endOfYear = new Date(currentDate.getFullYear(), 11, 31)
    const sixMonthsFromNow = new Date(currentDate)
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6)
    const endDate = sixMonthsFromNow > endOfYear ? sixMonthsFromNow : endOfYear

    while (iterDate <= endDate) {
      const week = []
      for (let i = 0; i < 7; i++) {
        const dateStr = iterDate.toISOString().split("T")[0]
        const count = githubData[dateStr] || 0
        week.push({ date: dateStr, count, day: iterDate.getDay() })
        iterDate.setDate(iterDate.getDate() + 1)
      }
      weeks.push(week)
    }

    return (
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Month labels */}
          <div className="flex mb-2 ml-8">
            {months.map((month, index) => (
              <div key={month} className="text-xs font-mono w-[85px] text-center">
                {month}
              </div>
            ))}
          </div>

          {/* Days and contribution squares */}
          <div className="flex">
            {/* Day labels */}
            <div className="flex flex-col mr-2">
              {days.map((day, index) => (
                <div key={day} className="h-3 text-xs font-mono flex items-center" style={{ marginBottom: "2px" }}>
                  {index % 2 === 1 ? day.slice(0, 3) : ""}
                </div>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="flex">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col mr-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={day.date}
                      className={`w-3 h-3 border ${getContributionColor(day.count)} mb-[2px]`}
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

  const totalContributions = githubData ? Object.values(githubData).reduce((sum, count) => sum + count, 0) : 0

  return (
    <div className="space-y-8">
      {/* Debug Info Panel */}
      {debugInfo && (
        <div className="bg-gray-100 border-4 border-black p-4 font-mono text-sm">
          <h4 className="font-bold mb-2">🔍 DEBUG INFO</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Data Source:</strong> {debugInfo.source}
            </div>
            <div>
              <strong>Events Count:</strong> {debugInfo.eventsCount}
            </div>
            <div>
              <strong>Processed Days:</strong> {debugInfo.processedDays}
            </div>
            <div>
              <strong>Total Contributions:</strong> {debugInfo.totalContributions}
            </div>
            {debugInfo.error && (
              <div className="col-span-2">
                <strong>Error:</strong> {debugInfo.error}
              </div>
            )}
          </div>
        </div>
      )}

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
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <>
            {renderContributionGraph()}
            <div className="flex justify-between items-center mt-4">
              <div className="text-xs font-mono text-gray-600">
                {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })} -
                {new Date(new Date().setMonth(new Date().getMonth() + 6)).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono">Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-gray-100 border border-gray-200"></div>
                  <div className="w-3 h-3 bg-yellow-200 border border-yellow-300"></div>
                  <div className="w-3 h-3 bg-yellow-500 border border-yellow-600"></div>
                  <div className="w-3 h-3 bg-red-500 border border-red-600"></div>
                  <div className="w-3 h-3 bg-red-600 border border-red-700"></div>
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
  const { books, loading, error } = useBooks()

  if (error) {
    return (
      <div className="bg-red-600 text-white border-4 border-black p-6">
        <p className="font-mono">Failed to load books: {error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  const currentlyReading = books.filter((book) => book.status === "reading")
  const recentlyCompleted = books.filter((book) => book.status === "completed").slice(0, 4)
  const booksRead = books.filter((book) => book.status === "completed").length
  const booksGoal = 12

  // Calculate genre breakdown
  const genreCount = books.reduce((acc, book) => {
    if (book.status === "completed") {
      acc[book.genre] = (acc[book.genre] || 0) + 1
    }
    return acc
  }, {})

  const genreBreakdown = Object.entries(genreCount).map(([genre, count], index) => ({
    genre: genre.charAt(0).toUpperCase() + genre.slice(1),
    count,
    color: ["bg-red-600", "bg-blue-600", "bg-yellow-500", "bg-black"][index % 4],
  }))

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
            {currentlyReading.map((book) => (
              <div key={book.id} className="border-2 border-black p-4">
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
            {recentlyCompleted.map((book) => (
              <div key={book.id} className="bg-white border-4 border-black p-4 shadow-brutal">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">{book.title}</h4>
                  {book.rating && (
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < book.rating! ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-sm font-mono mb-2">by {book.author}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 border border-black">
                    {book.genre.charAt(0).toUpperCase() + book.genre.slice(1)}
                  </span>
                  {book.completed_date && (
                    <span className="text-xs font-mono">{new Date(book.completed_date).toLocaleDateString()}</span>
                  )}
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
  const { sessions, loading, error } = useWorkoutSessions()

  if (error) {
    return (
      <div className="bg-red-600 text-white border-4 border-black p-6">
        <p className="font-mono">Failed to load workout data: {error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  // Calculate workout type breakdown
  const workoutTypeCount = sessions.reduce((acc, session) => {
    acc[session.workout_type] = (acc[session.workout_type] || 0) + (session.duration_minutes || 0)
    return acc
  }, {})

  const workoutTypes = [
    { type: "Strength", hours: Math.round((workoutTypeCount.strength || 0) / 60), color: "bg-blue-600" },
    { type: "Cardio", hours: Math.round((workoutTypeCount.cardio || 0) / 60), color: "bg-red-600" },
    { type: "Yoga", hours: Math.round((workoutTypeCount.yoga || 0) / 60), color: "bg-yellow-500" },
    { type: "HIIT", hours: Math.round((workoutTypeCount.hiit || 0) / 60), color: "bg-black" },
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

  // Create workout data from sessions
  const workoutData = {}
  months.forEach((month) => {
    workoutData[month] = Array(5)
      .fill(null)
      .map(() => Array(7).fill(0))
  })

  // Populate with actual session data
  sessions.forEach((session) => {
    const sessionDate = new Date(session.date)
    const monthName = sessionDate.toLocaleDateString("en-US", { month: "short" })

    if (workoutData[monthName]) {
      const workoutTypeMap = { cardio: 1, hiit: 2, strength: 3, yoga: 4 }
      const workoutTypeValue = workoutTypeMap[session.workout_type] || 0

      // Calculate week and day indices (simplified)
      const dayOfWeek = sessionDate.getDay()
      const weekOfMonth = Math.floor(sessionDate.getDate() / 7)

      if (workoutData[monthName][weekOfMonth] && workoutData[monthName][weekOfMonth][dayOfWeek] !== undefined) {
        workoutData[monthName][weekOfMonth][dayOfWeek] = workoutTypeValue
      }
    }
  })

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
                      workoutData[month].map((week, weekIndex) => {
                        const workoutType = week[dayIndex]
                        const workoutName =
                          workoutType === 1
                            ? "Cardio"
                            : workoutType === 2
                              ? "HIIT"
                              : workoutType === 3
                                ? "Strength"
                                : workoutType === 4
                                  ? "Yoga"
                                  : "No workout"

                        return (
                          <div
                            key={`${month}-${weekIndex}-${dayIndex}`}
                            className={`w-6 h-6 border mx-[1px] ${getWorkoutTypeColor(workoutType)}`}
                            title={`${month} Week ${weekIndex + 1}: ${workoutName}`}
                          ></div>
                        )
                      }),
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
