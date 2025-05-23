"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "SALES CALL TRACKING",
      excerpt: "A guide to choosing the best tool for tracking sales calls efficiently.",
      category: "Tech",
      color: "bg-red-600",
      image: "/sales-call-tracking.png",
      url: "https://vaibhavipai.medium.com/sales-call-tracking-a-guide-to-pick-your-weapon-6303a08ff4ba",
    },
    {
      id: 2,
      title: "AUTOMATED WATERING WITH RASPBERRY PI",
      excerpt: "Built a smart plant watering system using Raspberry Pi and Firebase.",
      category: "Tech",
      color: "bg-red-600",
      image: "/garduino-raspberry-pi.png",
      url: "https://medium.com/@vaibhavipai/how-i-built-a-watering-system-for-my-plants-using-a-raspberry-pi-eaef378c816d",
    },
    {
      id: 3,
      title: "UNDERDOG EATERIES FOOD CRAWL",
      excerpt: "Led a food crawl to explore Bangalore's hidden food gems.",
      category: "Food",
      color: "bg-yellow-500",
      image: "/food-crawl-meetup.png",
      url: "https://www.localguidesconnect.com/t/recap-underdog-eateries-food-crawl-meet-up/294149",
    },
    {
      id: 4,
      title: "FROM ZERO TO SPRING: BUILDING A JAVA ORCHESTRATOR",
      excerpt: "Journey of creating a Java microservice orchestrator with Spring.",
      category: "Tech",
      color: "bg-red-600",
      image: "/java-spring-orchestrator.png",
      url: "https://medium.com/nerd-for-tech/how-i-developed-a-microservice-orchestrating-service-in-java-starting-from-zero-knowledge-of-spring-a7cea7f23547",
    },
    {
      id: 5,
      title: "BUILDING A RECOMMENDER SYSTEM MODULE IN PYTHON",
      excerpt: "Create a Python package for collaborative filtering-based recommendation from scratch.",
      category: "Tech",
      color: "bg-red-600",
      image: "/python-recommender-system.png",
      url: "https://medium.com/analytics-vidhya/creating-a-python-distribution-module-for-recommender-systems-using-collaborative-filtering-a61a618d9d9b",
    },
    {
      id: 6,
      title: "MAPS BEFORE MAPS: NAVIGATING THE WORLD PRE-GOOGLE",
      excerpt: "Life before Google Maps—how we found our way around.",
      category: "Travel",
      color: "bg-blue-600",
      image: "/pre-google-maps.png",
      url: "https://www.localguidesconnect.com/t/imagine-a-pre-google-maps-era/296470",
    },
  ]

  return (
    <div className="min-h-screen font-mono">
      <div className="bg-background text-foreground min-h-screen">
        <Header />

        <main className="container py-12 px-4 sm:px-6 lg:px-8">
          <section className="space-y-8">
            <h1 className="text-6xl font-black tracking-tighter uppercase">BLOG</h1>
            <p className="text-2xl font-mono max-w-3xl">
              Thoughts, insights, and stories from my journey through technology, travel, food, and more.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="bg-white border-8 border-black p-6 shadow-brutal group-hover:translate-y-1 group-hover:shadow-none transition-all">
                    <div className="aspect-video bg-gray-200 mb-4">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`${post.color} text-white inline-block px-2 py-1 text-sm font-bold mb-2`}>
                      {post.category}
                    </div>
                    <h3 className="text-xl font-black mb-2 uppercase">{post.title}</h3>
                    <p className="text-sm font-mono mb-4">{post.excerpt}</p>
                    <span className="bg-black text-white border-4 border-black px-4 py-2 font-bold text-sm shadow-brutal group-hover:translate-y-1 group-hover:shadow-none transition-all inline-block">
                      READ MORE
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
