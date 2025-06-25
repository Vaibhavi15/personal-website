"use client"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vaibhavi Pai",
    url: "https://vaibhavipai.com",
    image: "https://vaibhavipai.com/bauhaus-woman-portrait.png",
    sameAs: [
      "https://www.linkedin.com/in/vaibhavi-pai/",
      "https://twitter.com/VaibhaviPai15",
      "https://github.com/Vaibhavi15",
      "https://medium.com/@vaibhavipai",
      "https://www.instagram.com/paiventures/",
    ],
    jobTitle: "Co-Founder & CTO",
    worksFor: {
      "@type": "Organization",
      name: "ClassMent",
    },
    alumniOf: [
      {
        "@type": "Organization",
        name: "Microsoft",
      },
      {
        "@type": "Organization",
        name: "Samsung R&D",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Engineering",
      "Mentorship",
      "Technology Leadership",
    ],
    description:
      "Technologist, mentor, and explorer navigating the intersection of AI, creativity, and human connection.",
  }

  return (
    <div className="min-h-screen font-mono">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="bg-background text-foreground min-h-screen">
        <Header />

        <main className="container py-12 px-4 sm:px-6 lg:px-8">
          <section className="space-y-12">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-6xl font-black tracking-tighter uppercase">HELLO THERE!</h1>
                <div className="flex gap-4 items-center">
                  <div className="h-8 w-8 bg-red-600"></div>
                  <div className="h-8 w-8 bg-blue-600"></div>
                  <div className="h-8 w-8 bg-yellow-500"></div>
                </div>
                <p className="text-2xl font-mono">I'm Vaibhavi, a curious builder, creative thinker, and explorer.</p>
                <div className="flex gap-4">
                  <Link
                    href="/work"
                    className="bg-red-600 text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                  >
                    MY WORK
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>

              <div className="bg-white border-8 border-black p-4 shadow-brutal rotate-2">
                <img src="/bauhaus-woman-portrait.png" alt="Vaibhavi Pai" className="w-full h-auto" />
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-8">
              <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
                ABOUT ME
              </h2>

              <div className="bg-white border-8 border-black p-8 shadow-brutal">
                <div className="space-y-6 text-lg font-mono">
                  <p>
                    Hi, I'm Vaibhavi Pai- welcome to my corner of the internet! I'm a technologist driven by curiosity,
                    a love for AI, and the thrill of creating value from scratch. Whether it's building meaningful
                    products, mentoring others, or diving into new experiences, I'm always exploring the intersection of
                    technology, impact, and play.
                  </p>

                  <p>
                    With a background in computer science and hands-on experience at companies like Microsoft and
                    Samsung R&D, I've developed a sharp eye for using tech to solve real-world problems. Today, I
                    channel that experience into projects that excite me—and hopefully, help others too.
                  </p>

                  <p>
                    Making the world a little better is what keeps me going. I mentor aspiring professionals through
                    workshops, webinars, mock interviews, and thoughtful connections—because sometimes, a small nudge
                    can change someone's path.
                  </p>

                  <p>
                    When I'm not building or mentoring, you'll find me exploring local food stops for my food project
                    Ahaa! Ahaara, scuba diving in both new and familiar waters, or fiercely competing in a board game
                    with friends.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="space-y-8">
              <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
                HIGHLIGHTS
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-yellow-500 border-8 border-black p-8 shadow-brutal h-full">
                  <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2">WORK</h3>
                  <ul className="space-y-4 text-lg font-mono">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-black mt-1 flex-shrink-0"></div>
                      <span>
                        Co-Founder & CTO,{" "}
                        <a
                          href="https://www.theclassment.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-red-800"
                        >
                          ClassMent
                        </a>{" "}
                        – Built an AI-powered career accelerator for working professionals.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-black mt-1 flex-shrink-0"></div>
                      <span>
                        <a
                          href="https://www.credly.com/badges/4253168a-17a2-458a-8fab-51c408e757c7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-red-800"
                        >
                          Hackathon Winner
                        </a>{" "}
                        – Secured wins at Microsoft and Samsung R&D for innovative tech solutions.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-black mt-1 flex-shrink-0"></div>
                      <span>
                        Mentor & Inventor – Guided students to{" "}
                        <a
                          href="https://link.springer.com/chapter/10.1007/978-3-030-89880-9_10"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-red-800"
                        >
                          publish research
                        </a>{" "}
                        and secured a patent as Primary Inventor.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal h-full">
                  <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">PLAY</h3>
                  <ul className="space-y-4 text-lg font-mono">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-white mt-1 flex-shrink-0"></div>
                      <span>
                        <Link href="/play/open?tab=scuba" className="underline hover:text-yellow-300">
                          Advanced Open Water Diver
                        </Link>{" "}
                        – 28 dives across diverse destinations.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-white mt-1 flex-shrink-0"></div>
                      <span>
                        <Link href="/play/boardgames" className="underline hover:text-yellow-300">
                          Board Game Enthusiast
                        </Link>{" "}
                        – Own 25+ games and regularly host game nights.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-white mt-1 flex-shrink-0"></div>
                      <span>
                        <a
                          href="https://www.localguidesconnect.com/t/google-maps-is-every-local-guides-superpower/302517"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-yellow-300"
                        >
                          Google Local Guide
                        </a>{" "}
                        – 3,000+ contributions sharing food, places, and experiences.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Latest Posts Section */}
            {/* Open Page Summary Section */}
            <div className="space-y-8">
              <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
                LIVING OPENLY
              </h2>
              <p className="text-xl font-mono max-w-3xl">
                Tracking my journey through code, books, fitness, and scuba diving with full transparency and
                accountability.
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Current Progress */}
                <div className="bg-white border-8 border-black p-8 shadow-brutal">
                  <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2">CURRENT PROGRESS</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-black"></div>
                        <span className="font-bold">Active Projects</span>
                      </div>
                      <span className="text-2xl font-black">5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-red-600"></div>
                        <span className="font-bold">Books Read</span>
                      </div>
                      <span className="text-2xl font-black">4/12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-blue-600"></div>
                        <span className="font-bold">Workout Sessions</span>
                      </div>
                      <span className="text-2xl font-black">28h</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-yellow-500"></div>
                        <span className="font-bold">Scuba Dives</span>
                      </div>
                      <span className="text-2xl font-black">28</span>
                    </div>
                  </div>
                </div>

                {/* Currently Working On */}
                <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
                  <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">
                    CURRENTLY WORKING ON
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white text-black border-2 border-white p-4">
                      <h4 className="font-bold">AI Accountability Bot</h4>
                      <p className="font-mono text-sm mt-1">Empathetic AI based on Atomic Habits principles</p>
                      <div className="mt-2 bg-gray-200 h-2 border border-black">
                        <div className="bg-red-600 h-full" style={{ width: "10%" }}></div>
                      </div>
                      <p className="text-xs font-mono mt-1 text-right">10% complete</p>
                    </div>

                    <div className="space-y-2 font-mono">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-red-600"></div>
                        <span>Reading: "Made to Stick" by Dan & Chip Heath</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-blue-600"></div>
                        <span>Training for Devils Circuit obstacle race</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-yellow-500"></div>
                        <span>Completed a Komodo scuba liveaboard trip</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Highlights */}
              <div className="bg-gradient-to-r from-blue-600 to-yellow-500 border-8 border-black p-8 shadow-brutal">
                <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2 text-white">
                  RECENT HIGHLIGHTS
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border-4 border-black p-4">
                    <h4 className="font-bold text-lg mb-2">CODE</h4>
                    <p className="font-mono text-sm">
                      5 active projects including AI accountability bot and microlearning app
                    </p>
                  </div>
                  <div className="bg-white border-4 border-black p-4">
                    <h4 className="font-bold text-lg mb-2">BOOKS</h4>
                    <p className="font-mono text-sm">
                      33% through 2025 reading goal with focus on business and marketing
                    </p>
                  </div>
                  <div className="bg-white border-4 border-black p-4">
                    <h4 className="font-bold text-lg mb-2">ADVENTURES</h4>
                    <p className="font-mono text-sm">
                      Recent dives in Komodo & Andamans, training for obstacle race, completed scuba liveaboard in Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Link
                  href="/play/open"
                  className="bg-black text-white border-4 border-black px-8 py-4 font-bold text-xl shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-3"
                >
                  VIEW FULL OPEN PAGE
                  <div className="flex gap-1">
                    <div className="h-6 w-6 bg-red-600"></div>
                    <div className="h-6 w-6 bg-blue-600"></div>
                    <div className="h-6 w-6 bg-yellow-500"></div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
