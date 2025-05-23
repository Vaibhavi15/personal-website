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
                        – 16+ dives across diverse destinations.
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
            <div className="space-y-8">
              <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
                LATEST POSTS
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-white border-8 border-black p-6 shadow-brutal h-full">
                  <div className="aspect-video bg-gray-200 mb-4">
                    <img
                      src="/sales-call-tracking.png"
                      alt="Sales Call Tracking"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-black mb-2 uppercase">SALES CALL TRACKING</h3>
                  <p className="text-sm font-mono mb-4">
                    A guide to choosing the best tool for tracking sales calls efficiently.
                  </p>
                  <a
                    href="https://vaibhavipai.medium.com/sales-call-tracking-a-guide-to-pick-your-weapon-6303a08ff4ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                  >
                    READ MORE
                  </a>
                </div>

                <div className="bg-white border-8 border-black p-6 shadow-brutal h-full">
                  <div className="aspect-video bg-gray-200 mb-4">
                    <img
                      src="/garduino-raspberry-pi.png"
                      alt="Garduino Raspberry Pi Project"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-black mb-2 uppercase">AUTOMATED WATERING WITH RASPBERRY PI</h3>
                  <p className="text-sm font-mono mb-4">
                    Built a smart plant watering system using Raspberry Pi and Firebase.
                  </p>
                  <a
                    href="https://medium.com/@vaibhavipai/how-i-built-a-watering-system-for-my-plants-using-a-raspberry-pi-eaef378c816d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                  >
                    READ MORE
                  </a>
                </div>

                <div className="bg-white border-8 border-black p-6 shadow-brutal h-full">
                  <div className="aspect-video bg-gray-200 mb-4">
                    <img src="/food-crawl-meetup.png" alt="Food Crawl Meetup" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-black mb-2 uppercase">UNDERDOG EATERIES FOOD CRAWL</h3>
                  <p className="text-sm font-mono mb-4">Led a food crawl to explore Bangalore's hidden food gems.</p>
                  <a
                    href="https://www.localguidesconnect.com/t/recap-underdog-eateries-food-crawl-meet-up/294149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-black border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                  >
                    READ MORE
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <Link
                  href="/blog"
                  className="bg-black text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                >
                  VIEW ALL POSTS
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
