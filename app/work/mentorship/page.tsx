import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function MentorshipPage() {
  return (
    <div className="min-h-screen font-mono">
      <div className="bg-background text-foreground min-h-screen">
        <Header />

        <main className="container py-12">
          <section className="space-y-8">
            <div className="space-y-6">
              <Link href="/work" className="text-lg font-bold hover:text-blue-600 transition-colors inline-block">
                ← WORK
              </Link>
              <h1 className="text-6xl font-black tracking-tighter uppercase">MENTORSHIP</h1>
              <div className="flex gap-4 items-center">
                <div className="h-8 w-8 bg-blue-600"></div>
                <p className="text-2xl font-mono max-w-3xl">
                  Guiding the next generation of technologists and creative thinkers.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2">MY APPROACH</h2>
                  <p className="font-mono mb-6">
                    I believe in empowering individuals to discover their unique strengths and navigate their own path.
                    My mentorship style focuses on:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-yellow-500 mt-1 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold">Personalized Guidance</span>
                        <p className="font-mono mt-1">
                          Tailoring advice to individual goals, strengths, and growth areas
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-yellow-500 mt-1 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold">Practical Experience</span>
                        <p className="font-mono mt-1">Focusing on real-world applications and hands-on learning</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-yellow-500 mt-1 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold">Continuous Feedback</span>
                        <p className="font-mono mt-1">Providing honest, constructive feedback to accelerate growth</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-yellow-500 mt-1 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold">Network Building</span>
                        <p className="font-mono mt-1">Connecting mentees with valuable resources and opportunities</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-8 border-black p-8 shadow-brutal mt-8">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">IMPACT</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                        1300+
                      </div>
                      <p className="font-mono">
                        Members in my youth empowerment community supporting each other for upskilling and landing jobs
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                        100+
                      </div>
                      <p className="font-mono">
                        Professionals mentored through HeyCoach, helping them gain clarity on their career paths
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                        50+
                      </div>
                      <p className="font-mono">Underprivileged women helped to land jobs through targeted mentorship</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white border-8 border-black p-8 shadow-brutal">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">MENTORSHIP AREAS</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="h-8 w-8 bg-blue-600"></div>
                      <h3 className="font-bold text-lg">Technical Skills</h3>
                      <ul className="font-mono text-sm space-y-1 list-disc pl-5">
                        <li>Software Development</li>
                        <li>AI & Machine Learning</li>
                        <li>Data Science</li>
                        <li>Web & Mobile Development</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 w-8 bg-yellow-500"></div>
                      <h3 className="font-bold text-lg">Career Development</h3>
                      <ul className="font-mono text-sm space-y-1 list-disc pl-5">
                        <li>Job Search Strategy</li>
                        <li>Interview Preparation</li>
                        <li>Resume & Portfolio Review</li>
                        <li>Salary Negotiation</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 w-8 bg-red-600"></div>
                      <h3 className="font-bold text-lg">Leadership</h3>
                      <ul className="font-mono text-sm space-y-1 list-disc pl-5">
                        <li>Team Management</li>
                        <li>Project Leadership</li>
                        <li>Communication Skills</li>
                        <li>Conflict Resolution</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 w-8 bg-black"></div>
                      <h3 className="font-bold text-lg">Entrepreneurship</h3>
                      <ul className="font-mono text-sm space-y-1 list-disc pl-5">
                        <li>Startup Fundamentals</li>
                        <li>Product Development</li>
                        <li>Business Strategy</li>
                        <li>Fundraising Basics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500 border-8 border-black p-8 shadow-brutal">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">
                    FEATURED INITIATIVES
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white border-4 border-black p-4">
                      <h3 className="font-bold text-lg mb-2">Career Guidance Webinars for Parents & Teens</h3>
                      <p className="font-mono text-sm mb-2">
                        Hosted webinars on "Engineering v.s Medicine v.s New Age Careers" to help parents and teens make
                        informed decisions about career paths.
                      </p>
                      <p className="font-mono text-sm">
                        <a
                          href="https://www.linkedin.com/posts/vaibhavi-pai_career-careerdevelopment-ai-activity-7291514734636417024-QrcZ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-600"
                        >
                          View on LinkedIn →
                        </a>
                      </p>
                    </div>

                    <div className="bg-white border-4 border-black p-4">
                      <h3 className="font-bold text-lg mb-2">Youth Empowerment Community</h3>
                      <p className="font-mono text-sm mb-2">
                        Created and nurtured a community of over 1,300 young professionals supporting each other in
                        upskilling and job searches.
                      </p>
                    </div>

                    <div className="bg-white border-4 border-black p-4">
                      <h3 className="font-bold text-lg mb-2">Women in Tech Mentorship</h3>
                      <p className="font-mono text-sm mb-2">
                        Dedicated mentorship program that has helped over 50 underprivileged women secure employment in
                        the technology sector.
                      </p>
                      <p className="font-mono text-sm">
                        <a
                          href="https://www.linkedin.com/posts/vaibhavi-pai_had-an-enriching-and-fulfilling-weekend-at-activity-6967889030650744832--06d"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-600"
                        >
                          View on LinkedIn →
                        </a>
                      </p>
                    </div>

                    <div className="bg-white border-4 border-black p-4">
                      <h3 className="font-bold text-lg mb-2">HeyCoach Mentorship</h3>
                      <p className="font-mono text-sm mb-2">
                        Mentored over 100 professionals through HeyCoach, helping them gain clarity on their career
                        trajectories and growth opportunities.
                      </p>
                      <p className="font-mono text-sm">
                        <a
                          href="https://www.linkedin.com/posts/activity-6797538366196981760-B2_U"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-600"
                        >
                          View on LinkedIn →
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-yellow-500 border-8 border-black p-8 shadow-brutal">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-black mb-6 uppercase text-white">READY TO ACCELERATE YOUR GROWTH?</h2>
                <p className="font-mono text-white text-lg mb-8">
                  Whether you're looking to level up your technical skills, navigate a career transition, or launch your
                  own venture, I'm here to help.
                </p>
                <Link
                  href="/contact"
                  className="bg-black text-white border-4 border-white px-8 py-4 font-bold text-xl shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all inline-block"
                >
                  GET IN TOUCH
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
