import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen font-mono">
      <div className="bg-background text-foreground min-h-screen">
        <Header />

        <main className="container py-12">
          <section className="space-y-8">
            <div className="space-y-6">
              <Link href="/work" className="text-lg font-bold hover:text-yellow-500 transition-colors inline-block">
                ← WORK
              </Link>
              <h1 className="text-6xl font-black tracking-tighter uppercase">PROJECTS</h1>
              <div className="flex gap-4 items-center">
                <div className="h-8 w-8 bg-yellow-500"></div>
                <p className="text-2xl font-mono max-w-3xl">
                  A collection of technical and creative projects across various domains.
                </p>
              </div>
            </div>

            <div className="grid gap-8">
              {/* Featured Project */}
              <div className="bg-yellow-500 border-8 border-black p-8 shadow-brutal">
                <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">FEATURED PROJECT</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tyZ8p5lQM96EfrjatnxTWwGjg8F3u4.png"
                      alt="Personalised Meal Planner App Interface showing Day 2 meal plan with user preferences"
                      className="border-4 border-black w-full h-auto"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black">PERSONALISED MEAL PLANNER APP</h3>
                    <p className="font-mono">
                      An intelligent meal planning app that understands your dietary preferences, allergies, and cuisine
                      preferences to generate personalized weekly meal plans with reliable recipe links.
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold">Key Features:</h4>
                      <ul className="font-mono list-disc pl-5 space-y-1">
                        <li>Understands your diet (vegetarian, eggetarian, etc.)</li>
                        <li>Takes your must-have ingredients & allergies into account</li>
                        <li>Keeps you close to preferred cuisine with smart variance</li>
                        <li>Suggests dishes with reliable recipe links (not AI-generated)</li>
                        <li>Lets you replace any meal you don't like</li>
                        <li>Generates a complete weekly PDF meal plan</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold">Technologies Used:</h4>
                      <ul className="font-mono list-disc pl-5 space-y-1">
                        <li>Python & Streamlit</li>
                        <li>Supabase (Database)</li>
                        <li>OpenAI API</li>
                        <li>SERP API</li>
                      </ul>
                    </div>
                    <a
                      href="https://personalised-meal-planner-bot.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                    >
                      TRY THE APP
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white border-8 border-black p-6 shadow-brutal">
                  <div className="h-12 w-12 bg-red-600 border-4 border-black mb-4"></div>
                  <h3 className="text-xl font-black mb-2 uppercase">GARDUINO: SMART PLANT WATERING</h3>
                  <p className="font-mono mb-4">
                    Built an automated plant watering system using Raspberry Pi, soil moisture sensors, and a water
                    pump, controlled through a mobile app.
                  </p>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-bold">Technologies:</h4>
                    <p className="font-mono text-sm">Raspberry Pi, Python, Firebase, React Native</p>
                  </div>
                  <a
                    href="https://medium.com/@vaibhavipai/how-i-built-a-watering-system-for-my-plants-using-a-raspberry-pi-eaef378c816d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                  >
                    READ CASE STUDY
                  </a>
                </div>

                <div className="bg-white border-8 border-black p-6 shadow-brutal">
                  <div className="h-12 w-12 bg-blue-600 border-4 border-black mb-4"></div>
                  <h3 className="text-xl font-black mb-2 uppercase">JAVA MICROSERVICE ORCHESTRATOR</h3>
                  <p className="font-mono mb-4">
                    A Spring-based service that orchestrates communication between microservices.
                  </p>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-bold">Technologies:</h4>
                    <p className="font-mono text-sm">Java, Spring Boot, RabbitMQ, Docker</p>
                  </div>
                  <a
                    href="https://medium.com/nerd-for-tech/how-i-developed-a-microservice-orchestrating-service-in-java-starting-from-zero-knowledge-of-spring-a7cea7f23547"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                  >
                    VIEW PROJECT
                  </a>
                </div>

                <div className="bg-white border-8 border-black p-6 shadow-brutal">
                  <div className="h-12 w-12 bg-red-600 border-4 border-black mb-4"></div>
                  <h3 className="text-xl font-black mb-2 uppercase">PYTHON RECOMMENDER SYSTEM</h3>
                  <p className="font-mono mb-4">
                    A Python package for collaborative filtering-based recommendation systems.
                  </p>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-bold">Technologies:</h4>
                    <p className="font-mono text-sm">Python, NumPy, Pandas, scikit-learn</p>
                  </div>
                  <a
                    href="https://medium.com/analytics-vidhya/creating-a-python-distribution-module-for-recommender-systems-using-collaborative-filtering-a61a618d9d9b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                  >
                    VIEW PROJECT
                  </a>
                </div>

                <div className="bg-white border-8 border-black p-6 shadow-brutal">
                  <div className="h-12 w-12 bg-yellow-500 border-4 border-black mb-4"></div>
                  <h3 className="text-xl font-black mb-2 uppercase">CLASSMENT ROADMAP TOOL</h3>
                  <p className="font-mono mb-4">
                    An app that generates a personalized roadmap to help you transition from your current role to your
                    dream role.
                  </p>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-bold">Technologies:</h4>
                    <p className="font-mono text-sm">Next.js, OpenAI API, Supabase</p>
                  </div>
                  <a
                    href="https://theclassment-roadmap.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-black border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                  >
                    VIEW LIVE SITE
                  </a>
                </div>

                <div className="bg-white border-8 border-black p-6 shadow-brutal">
                  <div className="h-12 w-12 bg-black border-4 border-black mb-4"></div>
                  <h3 className="text-xl font-black mb-2 uppercase">BOOK MY SHOW SCRAPER</h3>
                  <p className="font-mono mb-4">
                    A Python script that notifies me when movie venues open for booking, built for Avengers Endgame
                    release.
                  </p>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-bold">Technologies:</h4>
                    <p className="font-mono text-sm">Python, Beautiful Soup, Twilio API</p>
                  </div>
                  <a
                    href="https://github.com/Vaibhavi15/BookMyShowScraper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                  >
                    VIEW ON GITHUB
                  </a>
                </div>

                <div className="bg-white border-8 border-black p-6 shadow-brutal">
                  <div className="h-12 w-12 bg-blue-600 border-4 border-black mb-4"></div>
                  <h3 className="text-xl font-black mb-2 uppercase">AGENT IDEA GENERATOR</h3>
                  <p className="font-mono mb-4">
                    An automated workflow that generates AI agent ideas and creates engaging content scripts for
                    build-with-me videos.
                  </p>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-bold">Technologies:</h4>
                    <p className="font-mono text-sm">n8n, MongoDB, OpenAI API</p>
                  </div>
                  <a
                    href="https://github.com/Vaibhavi15/agent-idea-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                  >
                    VIEW ON GITHUB
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
              <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2">TECHNICAL SKILLS</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 uppercase">LANGUAGES</h3>
                  <ul className="font-mono space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-yellow-500"></div>
                      <span>JavaScript/TypeScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-yellow-500"></div>
                      <span>Python</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-yellow-500"></div>
                      <span>Java</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-yellow-500"></div>
                      <span>SQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-yellow-500"></div>
                      <span>HTML/CSS</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 uppercase">FRAMEWORKS</h3>
                  <ul className="font-mono space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-red-600"></div>
                      <span>React/Next.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-red-600"></div>
                      <span>Node.js/Express</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-red-600"></div>
                      <span>Spring Boot</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-red-600"></div>
                      <span>Django</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-red-600"></div>
                      <span>CrewAI</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 uppercase">TOOLS & PLATFORMS</h3>
                  <ul className="font-mono space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-blue-600"></div>
                      <span>AWS/Azure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-blue-600"></div>
                      <span>OpenAI API</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-blue-600"></div>
                      <span>n8n</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-blue-600"></div>
                      <span>MongoDB/PostgreSQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-blue-600"></div>
                      <span>Git/GitHub</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
