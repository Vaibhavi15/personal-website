"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoadingGrid } from "@/components/ui/loading-spinner"
import { useBlogPosts } from "@/hooks/use-supabase-data"

export default function BlogPage() {
  const { posts, loading, error } = useBlogPosts()

  if (error) {
    return (
      <div className="min-h-screen font-mono">
        <div className="bg-background text-foreground min-h-screen">
          <Header />
          <main className="container py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-red-600 text-white border-8 border-black p-8 shadow-brutal">
              <h2 className="text-2xl font-black mb-4">ERROR</h2>
              <p className="font-mono">Failed to load blog posts: {error}</p>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    )
  }

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

            {loading ? (
              <LoadingGrid count={6} />
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className="group">
                    <div className="bg-white border-8 border-black p-6 shadow-brutal group-hover:translate-y-1 group-hover:shadow-none transition-all">
                      <div className="aspect-video bg-gray-200 mb-4">
                        <img
                          src={post.image_url || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={`${
                          post.category === "tech"
                            ? "bg-red-600"
                            : post.category === "food"
                              ? "bg-yellow-500"
                              : "bg-blue-600"
                        } text-white inline-block px-2 py-1 text-sm font-bold mb-2`}
                      >
                        {post.category.toUpperCase()}
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
            )}
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
