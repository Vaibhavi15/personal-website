"use client"

import type React from "react"
import { useState } from "react"
import { Copy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thanks for your message! I'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen font-mono">
      <div className="bg-background text-foreground min-h-screen">
        <Header />

        <main className="container py-12 px-4 sm:px-6 lg:px-8">
          <section className="space-y-8 max-w-5xl mx-auto">
            <h1 className="text-6xl font-black tracking-tighter uppercase">GET IN TOUCH</h1>
            <p className="text-2xl font-mono max-w-3xl">
              Have a question, idea, or just want to say hello? I'd love to hear from you!
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white border-8 border-black p-8 shadow-brutal h-full flex flex-col">
                <h2 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2">CONTACT INFO</h2>
                <div className="space-y-6 font-mono flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 bg-red-600 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg uppercase">EMAIL</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <a
                          href="mailto:paivaibhavi15@gmail.com"
                          className="hover:underline font-mono"
                          title="Send me an email"
                        >
                          paivaibhavi15@gmail.com
                        </a>
                        <button
                          onClick={() => copyToClipboard("paivaibhavi15@gmail.com")}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                          title="Copy to clipboard"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                        {copied && <span className="text-xs text-green-600">Copied!</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 bg-blue-600 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg uppercase">SOCIAL</h3>
                      <div className="space-y-2 mt-1">
                        <a
                          href="https://x.com/VaibhaviPai15"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:underline"
                        >
                          Twitter
                        </a>
                        <a
                          href="https://www.linkedin.com/in/vaibhavi-pai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:underline"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://github.com/Vaibhavi15"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:underline"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 bg-yellow-500 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg uppercase">LOCATION</h3>
                      <p>Based in Bengaluru, India</p>
                      <p>Available for remote work worldwide</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="border-t-4 border-black pt-6">
                      <h3 className="font-bold text-lg uppercase mb-2">OFFICE HOURS</h3>
                      <p>Monday - Friday: 9AM - 6PM IST</p>
                      <p>Response time: Within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse h-full">
                <h2 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">MESSAGE ME</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg font-bold uppercase">
                      NAME
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border-4 border-white h-14 text-lg font-mono bg-black text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-yellow-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-bold uppercase">
                      EMAIL
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="border-4 border-white h-14 text-lg font-mono bg-black text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-yellow-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-lg font-bold uppercase">
                      SUBJECT
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="border-4 border-white h-14 text-lg font-mono bg-black text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-yellow-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-lg font-bold uppercase">
                      MESSAGE
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      className="border-4 border-white min-h-[150px] text-lg font-mono bg-black text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-yellow-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-yellow-500 text-black border-4 border-white px-6 py-3 font-bold text-lg hover:translate-y-1 hover:shadow-none transition-all"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
