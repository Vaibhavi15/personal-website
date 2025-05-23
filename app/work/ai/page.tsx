import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AIPage() {
  return (
    <div className="min-h-screen font-mono">
      <div className="bg-background text-foreground min-h-screen">
        <Header />

        <main className="container py-12">
          <section className="space-y-8">
            <div className="space-y-6">
              <Link href="/work" className="text-lg font-bold hover:text-red-600 transition-colors inline-block">
                ← WORK
              </Link>
              <h1 className="text-6xl font-black tracking-tighter uppercase">AI</h1>
              <div className="flex gap-4 items-center">
                <div className="h-8 w-8 bg-red-600"></div>
                <p className="text-2xl font-mono max-w-3xl">
                  Exploring voice-first artificial intelligence applications to solve real and relevant problems.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white border-8 border-black p-8 shadow-brutal">
                <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">AI PROJECTS</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">AI Agent for Agent Ideation & Content Scripting</h3>
                    <p className="font-mono">
                      Built a workflow using n8n that generates new AI agent ideas and instantly crafts engaging
                      Instagram scripts for "build-with-me" content
                    </p>
                    <ul className="font-mono mt-2 space-y-1 list-disc pl-5">
                      <li>
                        Automated ideation using GPT to propose unique agent concepts based on trends, gaps, and
                        capabilities
                      </li>
                      <li>
                        Generated ready-to-post Instagram video scripts with hooks, structure, and CTAs tailored for
                        builders
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">ClassMent AI Career Accelerator</h3>
                    <p className="font-mono">
                      Built an AI-powered platform that helps professionals accelerate their careers through
                      personalized learning paths and mentorship
                    </p>
                    <ul className="font-mono mt-2 space-y-1 list-disc pl-5">
                      <li>Recommendation engine for roles based on their skills using Neo4j Graph RAG</li>
                      <li>AI-powered algorithm for personalised roadmap generation</li>
                      <li>Accountability bot to measure progress</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Kusto Copilot</h3>
                    <p className="font-mono">
                      Developed a co-pilot that could process natural language and convert it into complex KQL(Kusto
                      Query Language) queries
                    </p>
                    <ul className="font-mono mt-2 space-y-1 list-disc pl-5">
                      <li>
                        Natural language interface to translate user prompts into optimized KQL queries for Azure Data
                        Explorer
                      </li>
                      <li>
                        Integrated semantic parsing and prompt engineering to handle nested filters, aggregations, and
                        joins
                      </li>
                      <li>Improved query accuracy and user experience, reducing manual KQL writing effort by 70%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-red-600 text-white border-8 border-black p-8 shadow-brutal">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2">
                    Agents in the Pipeline
                  </h2>
                  <p className="font-mono mb-4">
                    Committed to developing AI systems that solve real-world problems and enhance daily workflows.
                  </p>
                  <ul className="font-mono space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-white mt-1 flex-shrink-0"></div>
                      <span>Context-aware Discord voice agent to respond to messages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-white mt-1 flex-shrink-0"></div>
                      <span>AI Sales Development Representative(SDR) for lead generation and qualification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-white mt-1 flex-shrink-0"></div>
                      <span>
                        Daily learning bot that delivers bite-sized content based on the user's learning goals
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
                  <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2">RESEARCH</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Publications</h3>
                      <p className="font-mono">
                        <a
                          href="https://link.springer.com/chapter/10.1007/978-3-030-89880-9_10"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-yellow-500"
                        >
                          "Spam Detection Over Call Transcript Using Deep Learning"
                        </a>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Patents</h3>
                      <p className="font-mono">
                        Primary inventor on a B1 patent filed at the Indian Patent Office for a system that can identify
                        intent of a call from the live transcript.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-blue-600 border-8 border-black p-8 shadow-brutal">
              <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2 text-white">
                FUTURE DIRECTIONS
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border-4 border-black p-4">
                  <h3 className="text-xl font-bold mb-2">Voice-First AI Agents</h3>
                  <p className="font-mono">
                    Designing autonomous agents that can understand and respond through voice in real-time, enabling
                    hands-free interfaces for sales, support, and daily tasks.
                  </p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <h3 className="text-xl font-bold mb-2">Agent Collaboration & Swarms</h3>
                  <p className="font-mono">
                    Exploring AI agents that work in coordinated groups, dividing tasks, negotiating goals, and solving
                    complex problems collectively.
                  </p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <h3 className="text-xl font-bold mb-2">Federated Learning</h3>
                  <p className="font-mono">
                    Developing decentralized learning systems that run on-device, ensuring privacy and reducing data
                    transmission costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Collaboration Section */}
            <div className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal">
              <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2">LET'S COLLABORATE</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="font-mono text-lg">
                    I'm always looking for passionate collaborators to join forces on AI projects. Whether you're a
                    developer, researcher, designer, or domain expert, there's room for your unique perspective.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Current Collaboration Opportunities:</h3>
                    <ul className="font-mono space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 bg-yellow-500 mt-1 flex-shrink-0"></div>
                        <span>Building multi-agent systems with CrewAI</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 bg-yellow-500 mt-1 flex-shrink-0"></div>
                        <span>Developing voice-first AI interfaces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 bg-yellow-500 mt-1 flex-shrink-0"></div>
                        <span>Creating AI agents for productivity and learning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 bg-yellow-500 mt-1 flex-shrink-0"></div>
                        <span>Exploring ethical AI implementations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white text-black border-4 border-black p-6">
                  <h3 className="text-xl font-bold mb-4 uppercase">HOW TO COLLABORATE</h3>
                  <div className="space-y-4">
                    <p className="font-mono">Interested in working together? Here's how you can reach out:</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="h-4 w-4 bg-blue-600 mt-1 flex-shrink-0"></div>
                        <div className="flex flex-col">
                          <span className="font-bold">Email me at:</span>
                          <a href="mailto:paivaibhavi15@gmail.com" className="underline hover:text-blue-600 break-all">
                            paivaibhavi15@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-4 w-4 bg-blue-600 mt-1 flex-shrink-0"></div>
                        <div className="flex flex-col">
                          <span className="font-bold">Connect on GitHub:</span>
                          <a
                            href="https://github.com/Vaibhavi15"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-600 break-all"
                          >
                            github.com/Vaibhavi15
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-4 w-4 bg-blue-600 mt-1 flex-shrink-0"></div>
                        <div className="flex flex-col">
                          <span className="font-bold">Message me on LinkedIn:</span>
                          <a
                            href="https://www.linkedin.com/in/vaibhavi-pai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-600 break-all"
                          >
                            linkedin.com/in/vaibhavi-pai
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="font-mono mt-4">
                      Please include a brief introduction, your areas of expertise, and any specific ideas you have for
                      collaboration.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-blue-600 text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all inline-block mt-2"
                    >
                      GET IN TOUCH
                    </Link>
                  </div>
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
