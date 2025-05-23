"use client"

import { useState } from "react"
import { Plus, Minus, Circle, Square, Triangle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BauhausBrutalism() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen font-mono ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground min-h-screen">
        {/* Navigation */}
        <header className="sticky top-0 z-40 w-full border-b-8 border-black bg-primary">
          <div className="container flex h-20 items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-yellow-500 border-4 border-black rotate-12"></div>
                <div className="h-12 w-12 bg-blue-600 border-4 border-black -ml-6 -rotate-12"></div>
                <span className="font-black text-2xl tracking-tighter ml-4 text-white">BAUHAUS.BRUTAL</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="h-10 w-10 bg-yellow-500 border-4 border-black flex items-center justify-center hover:bg-yellow-400 transition-colors"
              >
                {darkMode ? <Circle className="h-5 w-5" /> : <Square className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </header>

        <main className="container py-12">
          <BauhaustTabs />
        </main>
      </div>
    </div>
  )
}

function BauhaustTabs() {
  return (
    <Tabs defaultValue="overview" className="space-y-12">
      <div className="flex justify-between">
        <TabsList className="grid w-full max-w-3xl grid-cols-4 h-16 bg-transparent gap-4">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
            bg-white border-4 border-black text-lg font-bold h-full"
          >
            OVERVIEW
          </TabsTrigger>
          <TabsTrigger
            value="typography"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
            bg-white border-4 border-black text-lg font-bold h-full"
          >
            TYPOGRAPHY
          </TabsTrigger>
          <TabsTrigger
            value="colors"
            className="data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
            bg-white border-4 border-black text-lg font-bold h-full"
          >
            COLORS
          </TabsTrigger>
          <TabsTrigger
            value="components"
            className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
            bg-white border-4 border-black text-lg font-bold h-full"
          >
            COMPONENTS
          </TabsTrigger>
        </TabsList>
      </div>

      {/* Overview Tab */}
      <TabsContent value="overview" className="space-y-16">
        <section className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-black tracking-tighter uppercase">Bauhaus-Brutalism Design System</h1>
            <div className="flex gap-4 items-center">
              <div className="h-8 w-8 bg-red-600"></div>
              <div className="h-8 w-8 bg-blue-600"></div>
              <div className="h-8 w-8 bg-yellow-500"></div>
              <p className="text-2xl">A design system that blends Bauhaus principles with colorful brutalism.</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">BAUHAUS PRINCIPLES</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <Square className="h-6 w-6 text-blue-600" />
                  <span>Geometric shapes and clean lines</span>
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="h-6 w-6 text-red-600" />
                  <span>Primary colors with black and white</span>
                </li>
                <li className="flex items-center gap-3">
                  <Triangle className="h-6 w-6 text-yellow-500" />
                  <span>Functional and minimal design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Plus className="h-6 w-6" />
                  <span>Grid-based layouts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Minus className="h-6 w-6" />
                  <span>Sans-serif typography</span>
                </li>
              </ul>
            </div>

            <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
              <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2">BRUTALIST ELEMENTS</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <Square className="h-6 w-6 text-cyan-400" />
                  <span>Bold, vibrant color accents</span>
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="h-6 w-6 text-fuchsia-400" />
                  <span>Raw, unpolished textures</span>
                </li>
                <li className="flex items-center gap-3">
                  <Triangle className="h-6 w-6 text-lime-400" />
                  <span>Asymmetrical compositions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Plus className="h-6 w-6 text-orange-400" />
                  <span>Exposed structural elements</span>
                </li>
                <li className="flex items-center gap-3">
                  <Minus className="h-6 w-6 text-yellow-400" />
                  <span>Intentional design "breaks"</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
            DESIGN PRINCIPLES
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-yellow-500 border-8 border-black p-6 shadow-brutal">
              <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">FUNCTIONAL CLARITY</h3>
              <p className="text-lg">Every element serves a clear purpose with no unnecessary decoration.</p>
            </div>

            <div className="bg-blue-600 text-white border-8 border-black p-6 shadow-brutal">
              <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-white pb-2">BOLD SIMPLICITY</h3>
              <p className="text-lg">Simple forms expressed boldly with intentional contrast and tension.</p>
            </div>

            <div className="bg-red-600 text-white border-8 border-black p-6 shadow-brutal">
              <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-white pb-2">GEOMETRIC EXPRESSION</h3>
              <p className="text-lg">Geometric shapes as the foundation with brutalist expressions.</p>
            </div>
          </div>
        </section>
      </TabsContent>

      {/* Typography Tab */}
      <TabsContent value="typography" className="space-y-12">
        <section className="space-y-8">
          <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
            TYPOGRAPHY
          </h2>
          <p className="text-xl">Our typography system combines Bauhaus clarity with brutalist boldness.</p>

          <div className="space-y-12">
            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              <h3 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">TYPE SPECIMENS</h3>
              <div className="space-y-2 mb-8">
                <div className="text-sm uppercase font-bold text-gray-500">Heading 1</div>
                <h1 className="text-7xl font-black tracking-tighter uppercase">Geometric Bold</h1>
              </div>

              <div className="space-y-2 mb-8">
                <div className="text-sm uppercase font-bold text-gray-500">Heading 2</div>
                <h2 className="text-5xl font-black tracking-tighter uppercase">Functional Clear</h2>
              </div>

              <div className="space-y-2 mb-8">
                <div className="text-sm uppercase font-bold text-gray-500">Heading 3</div>
                <h3 className="text-3xl font-black uppercase">Brutalist Expression</h3>
              </div>

              <div className="space-y-2 mb-8">
                <div className="text-sm uppercase font-bold text-gray-500">Heading 4</div>
                <h4 className="text-2xl font-bold uppercase">Structured Content</h4>
              </div>

              <div className="space-y-2 mb-8">
                <div className="text-sm uppercase font-bold text-gray-500">Body Text</div>
                <p className="text-lg font-mono">
                  Body text uses a clean, monospaced font for that raw brutalist feel while maintaining Bauhaus
                  legibility. The quick brown fox jumps over the lazy dog.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-sm uppercase font-bold text-gray-500">Small Text / Caption</div>
                <p className="text-sm font-mono">
                  Small text for captions and supporting information. The quick brown fox jumps over the lazy dog.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal">
                <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">BAUHAUS TYPOGRAPHY</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-sm uppercase font-bold text-blue-200">Sans-serif</span>
                    <span className="text-xl font-bold">Clean and geometric</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm uppercase font-bold text-blue-200">Functional</span>
                    <span className="text-xl font-bold">Highly legible</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm uppercase font-bold text-blue-200">Structured</span>
                    <span className="text-xl font-bold">Clear hierarchy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
                <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">
                  BRUTALIST TYPOGRAPHY
                </h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-sm uppercase font-bold text-gray-400">Monospaced</span>
                    <span className="text-xl font-mono">Raw and mechanical</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm uppercase font-bold text-gray-400">Expressive</span>
                    <span className="text-xl font-mono">Bold contrasts</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm uppercase font-bold text-gray-400">Disruptive</span>
                    <span className="text-xl font-mono">Breaking conventions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </TabsContent>

      {/* Colors Tab */}
      <TabsContent value="colors" className="space-y-12">
        <section className="space-y-8">
          <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
            COLOR PALETTE
          </h2>
          <p className="text-xl">Our color system combines Bauhaus primary colors with brutalist vibrant accents.</p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Bauhaus Primary Colors */}
            <div className="col-span-full">
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2 inline-block">
                BAUHAUS PRIMARY COLORS
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-600 text-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                  <div className="text-3xl font-black">RED</div>
                  <div className="text-sm font-mono">#DC2626</div>
                </div>
                <div className="bg-blue-600 text-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                  <div className="text-3xl font-black">BLUE</div>
                  <div className="text-sm font-mono">#2563EB</div>
                </div>
                <div className="bg-yellow-500 border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                  <div className="text-3xl font-black">YELLOW</div>
                  <div className="text-sm font-mono">#EAB308</div>
                </div>
              </div>
            </div>

            {/* Brutalist Accent Colors */}
            <div className="col-span-full">
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2 inline-block">
                BRUTALIST ACCENT COLORS
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                <div className="bg-cyan-400 border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                  <div className="text-xl font-black">CYAN</div>
                  <div className="text-sm font-mono">#22D3EE</div>
                </div>
                <div className="bg-fuchsia-500 text-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                  <div className="text-xl font-black">FUCHSIA</div>
                  <div className="text-sm font-mono">#D946EF</div>
                </div>
                <div className="bg-lime-400 border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                  <div className="text-xl font-black">LIME</div>
                  <div className="text-sm font-mono">#A3E635</div>
                </div>
                <div className="bg-orange-500 text-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                  <div className="text-xl font-black">ORANGE</div>
                  <div className="text-sm font-mono">#F97316</div>
                </div>
                <div className="bg-emerald-500 text-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                  <div className="text-xl font-black">EMERALD</div>
                  <div className="text-sm font-mono">#10B981</div>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div className="col-span-full">
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2 inline-block">
                NEUTRAL COLORS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                  <div className="text-3xl font-black">WHITE</div>
                  <div className="text-sm font-mono">#FFFFFF</div>
                </div>
                <div className="bg-black text-white border-8 border-black p-6 shadow-brutal-inverse aspect-square flex flex-col justify-between">
                  <div className="text-3xl font-black">BLACK</div>
                  <div className="text-sm font-mono">#000000</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabsContent>

      {/* Components Tab */}
      <TabsContent value="components" className="space-y-12">
        <section className="space-y-8">
          <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
            COMPONENTS
          </h2>
          <p className="text-xl">Our components blend Bauhaus functionality with brutalist expression.</p>

          <div className="space-y-16">
            {/* Buttons */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 inline-block">BUTTONS</h3>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white border-8 border-black p-8 shadow-brutal">
                  <h4 className="text-xl font-bold mb-6 uppercase border-b-4 border-black pb-2">PRIMARY BUTTONS</h4>
                  <div className="grid gap-6">
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-red-600 text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                        RED BUTTON
                      </button>
                      <button className="bg-blue-600 text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                        BLUE BUTTON
                      </button>
                      <button className="bg-yellow-500 border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                        YELLOW BUTTON
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <button className="bg-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                        WHITE BUTTON
                      </button>
                      <button className="bg-black text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                        BLACK BUTTON
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
                  <h4 className="text-xl font-bold mb-6 uppercase border-b-4 border-white pb-2">BRUTALIST BUTTONS</h4>
                  <div className="grid gap-6">
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-cyan-400 text-black border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
                        CYAN BUTTON
                      </button>
                      <button className="bg-fuchsia-500 text-white border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
                        FUCHSIA BUTTON
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <button className="bg-lime-400 text-black border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
                        LIME BUTTON
                      </button>
                      <button className="bg-orange-500 text-white border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
                        ORANGE BUTTON
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Elements */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 inline-block">FORM ELEMENTS</h3>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white border-8 border-black p-8 shadow-brutal">
                  <h4 className="text-xl font-bold mb-6 uppercase border-b-4 border-black pb-2">TEXT INPUTS</h4>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-lg font-bold">
                        EMAIL
                      </Label>
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-lg font-bold">
                        PASSWORD
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
                  <h4 className="text-xl font-bold mb-6 uppercase border-b-4 border-white pb-2">SELECTION CONTROLS</h4>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Label className="text-lg font-bold">CHECKBOXES</Label>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Checkbox
                            id="terms"
                            className="h-6 w-6 border-4 border-white data-[state=checked]:bg-cyan-400 data-[state=checked]:text-black"
                          />
                          <label htmlFor="terms" className="text-lg font-mono">
                            Accept terms and conditions
                          </label>
                        </div>
                        <div className="flex items-center gap-4">
                          <Checkbox
                            id="newsletter"
                            className="h-6 w-6 border-4 border-white data-[state=checked]:bg-fuchsia-500 data-[state=checked]:text-white"
                          />
                          <label htmlFor="newsletter" className="text-lg font-mono">
                            Subscribe to newsletter
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label className="text-lg font-bold">RADIO GROUP</Label>
                      <RadioGroup defaultValue="option-one" className="space-y-4">
                        <div className="flex items-center gap-4">
                          <RadioGroupItem
                            value="option-one"
                            id="option-one"
                            className="h-6 w-6 border-4 border-white data-[state=checked]:bg-lime-400 data-[state=checked]:text-black"
                          />
                          <Label htmlFor="option-one" className="text-lg font-mono">
                            Option One
                          </Label>
                        </div>
                        <div className="flex items-center gap-4">
                          <RadioGroupItem
                            value="option-two"
                            id="option-two"
                            className="h-6 w-6 border-4 border-white data-[state=checked]:bg-lime-400 data-[state=checked]:text-black"
                          />
                          <Label htmlFor="option-two" className="text-lg font-mono">
                            Option Two
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards & Containers */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 inline-block">
                CARDS & CONTAINERS
              </h3>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-white border-8 border-black p-8 shadow-brutal">
                  <h4 className="text-xl font-bold mb-4 uppercase border-b-4 border-black pb-2">BAUHAUS CARD</h4>
                  <p className="text-lg mb-6">Clean geometric design with strong borders and functional layout.</p>
                  <button className="bg-red-600 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                    ACTION
                  </button>
                </div>

                <div className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal">
                  <h4 className="text-xl font-bold mb-4 uppercase border-b-4 border-white pb-2">PRIMARY CARD</h4>
                  <p className="text-lg mb-6">Bold blue background with high contrast white text for emphasis.</p>
                  <button className="bg-white text-blue-600 border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                    ACTION
                  </button>
                </div>

                <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
                  <h4 className="text-xl font-bold mb-4 uppercase border-b-4 border-white pb-2">BRUTALIST CARD</h4>
                  <p className="text-lg mb-6">Raw black background with contrasting white text for visual impact.</p>
                  <button className="bg-yellow-500 text-black border-4 border-white px-4 py-2 font-bold shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
                    ACTION
                  </button>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-gradient-to-br from-cyan-400 to-fuchsia-500 border-8 border-black p-8 shadow-brutal">
                  <h4 className="text-xl font-bold mb-4 uppercase border-b-4 border-black pb-2">GRADIENT CONTAINER</h4>
                  <p className="text-lg mb-6 text-white">
                    Vibrant gradient background with brutalist color combinations.
                  </p>
                  <div className="bg-white border-4 border-black p-4">
                    <p className="font-mono">Content inside a nested container</p>
                  </div>
                </div>

                <div className="bg-white border-8 border-dashed border-black p-8 shadow-brutal">
                  <h4 className="text-xl font-bold mb-4 uppercase border-b-4 border-black pb-2">DASHED CONTAINER</h4>
                  <p className="text-lg mb-6">Exposed structure with dashed border treatment.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-lime-400 border-4 border-black p-4">
                      <p className="font-mono">Grid Item 1</p>
                    </div>
                    <div className="bg-orange-500 text-white border-4 border-black p-4">
                      <p className="font-mono">Grid Item 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 inline-block">MODAL DIALOG</h3>
              <div className="bg-white border-8 border-black p-0 shadow-brutal max-w-md mx-auto">
                <div className="bg-black text-white p-4 border-b-4 border-black">
                  <h4 className="text-xl font-bold uppercase">MODAL TITLE</h4>
                </div>
                <div className="p-8">
                  <p className="text-lg mb-6 font-mono">
                    This is a modal dialog with a consistent header style and strong borders.
                  </p>
                  <div className="flex justify-end gap-4">
                    <button className="bg-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                      CANCEL
                    </button>
                    <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                      CONFIRM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabsContent>
    </Tabs>
  )
}
