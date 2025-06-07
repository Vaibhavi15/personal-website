"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoadingCard, LoadingGrid } from "@/components/ui/loading-spinner"
import { useProjects } from "@/hooks/use-supabase-data"
import Link from "next/link"

export default function ProjectsPage() {
  const { projects, loading, error } = useProjects()

  if (error) {
    return (
      <div className="min-h-screen font-mono">
        <div className="bg-background text-foreground min-h-screen">
          <Header />
          <main className="container py-12">
            <div className="bg-red-600 text-white border-8 border-black p-8 shadow-brutal">
              <h2 className="text-2xl font-black mb-4">ERROR</h2>
              <p className="font-mono">Failed to load projects: {error}</p>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    )
  }

  const featuredProject = projects.find((p) => p.is_featured)
  const aiProjects = projects.filter((p) => p.category === "ai" && !p.is_featured)
  const technicalProjects = projects.filter((p) => p.category === "technical")

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
              {loading ? (
                <LoadingCard />
              ) : featuredProject ? (
                <div className="bg-yellow-500 border-8 border-black p-8 shadow-brutal">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">FEATURED PROJECT</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      {featuredProject.image_url && (
                        <img
                          src={featuredProject.image_url || "/placeholder.svg"}
                          alt={featuredProject.name}
                          className="border-4 border-black w-full h-auto"
                        />
                      )}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black">{featuredProject.name.toUpperCase()}</h3>
                      <p className="font-mono">{featuredProject.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold">Technologies Used:</h4>
                        <ul className="font-mono list-disc pl-5 space-y-1">
                          {featuredProject.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                      {(featuredProject.blog_url || featuredProject.live_url || featuredProject.github_url) && (
                        <div className="flex flex-wrap gap-4">
                          {featuredProject.blog_url && (
                            <a
                              href={featuredProject.blog_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-black text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                            >
                              READ CASE STUDY
                            </a>
                          )}
                          {featuredProject.live_url && (
                            <a
                              href={featuredProject.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                            >
                              VIEW LIVE
                            </a>
                          )}
                          {featuredProject.github_url && (
                            <a
                              href={featuredProject.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                            >
                              VIEW CODE
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Project Grid */}
              {loading ? (
                <LoadingGrid count={6} />
              ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[...aiProjects, ...technicalProjects].map((project) => (
                    <div key={project.id} className="bg-white border-8 border-black p-6 shadow-brutal">
                      <div className="mb-4">
                        {project.image_url ? (
                          <img
                            src={project.image_url || "/placeholder.svg"}
                            alt={project.name}
                            className="w-full h-48 object-cover border-4 border-black"
                          />
                        ) : (
                          <div
                            className={`h-48 w-full ${project.category === "ai" ? "bg-red-600" : "bg-blue-600"} border-4 border-black flex items-center justify-center`}
                          >
                            <span className="text-white font-bold text-lg">NO IMAGE</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-black mb-2 uppercase">{project.name}</h3>
                      <p className="font-mono mb-4">{project.description}</p>
                      <div className="space-y-2 mb-4">
                        <h4 className="font-bold">Technologies:</h4>
                        <p className="font-mono text-sm">{project.technologies.join(", ")}</p>
                      </div>
                      <div className="space-y-2 mb-4">
                        <h4 className="font-bold">Status:</h4>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 text-xs font-bold border-2 border-black ${
                              project.status === "completed"
                                ? "bg-green-500"
                                : project.status === "in-progress"
                                  ? "bg-yellow-500"
                                  : project.status === "planning"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                          >
                            {project.status.toUpperCase()}
                          </span>
                          {project.status !== "completed" && (
                            <span className="font-mono text-sm">{project.progress}%</span>
                          )}
                        </div>
                      </div>
                      {(project.blog_url || project.live_url || project.github_url) && (
                        <div className="flex flex-wrap gap-2">
                          {project.blog_url && (
                            <a
                              href={project.blog_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${project.category === "ai" ? "bg-red-600" : "bg-blue-600"} text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block`}
                            >
                              VIEW PROJECT
                            </a>
                          )}
                          {project.live_url && (
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-yellow-500 text-black border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                            >
                              VIEW LIVE SITE
                            </a>
                          )}
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-black text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block"
                            >
                              VIEW ON GITHUB
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
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
