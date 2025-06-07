"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import type {
  Project,
  BlogPost,
  Book,
  BoardGame,
  ScubaDive,
  ScubaCertification,
  TravelItinerary,
  TravelItineraryDetail,
  WorkoutSession,
  Testimonial,
  MarineLife,
} from "@/lib/supabase"

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })

        if (error) throw error
        setProjects(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .order("published_date", { ascending: false })

        if (error) throw error
        setPosts(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBooks() {
      try {
        const { data, error } = await supabase.from("books").select("*").order("created_at", { ascending: false })

        if (error) throw error
        setBooks(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  return { books, loading, error }
}

export function useBoardGames() {
  const [games, setGames] = useState<BoardGame[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGames() {
      try {
        const { data, error } = await supabase.from("board_games").select("*").order("name", { ascending: true })

        if (error) throw error
        setGames(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  return { games, loading, error }
}

export function useScubaData() {
  const [dives, setDives] = useState<ScubaDive[]>([])
  const [certifications, setCertifications] = useState<ScubaCertification[]>([])
  const [marineLife, setMarineLife] = useState<MarineLife[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchScubaData() {
      try {
        const [divesResult, certificationsResult, marineLifeResult] = await Promise.all([
          supabase.from("scuba_dives").select("*").order("date", { ascending: false }),
          supabase.from("scuba_certifications").select("*").order("certification_date", { ascending: false }),
          supabase.from("marine_life").select("*").order("name", { ascending: true }),
        ])

        if (divesResult.error) throw divesResult.error
        if (certificationsResult.error) throw certificationsResult.error
        if (marineLifeResult.error) throw marineLifeResult.error

        setDives(divesResult.data || [])
        setCertifications(certificationsResult.data || [])
        setMarineLife(marineLifeResult.data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchScubaData()
  }, [])

  return { dives, certifications, marineLife, loading, error }
}

export function useTravelData() {
  const [itineraries, setItineraries] = useState<(TravelItinerary & { details?: TravelItineraryDetail[] })[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTravelData() {
      try {
        const { data: itinerariesData, error: itinerariesError } = await supabase
          .from("travel_itineraries")
          .select("*")
          .order("start_date", { ascending: false })

        if (itinerariesError) throw itinerariesError

        // Fetch details for each itinerary
        const itinerariesWithDetails = await Promise.all(
          (itinerariesData || []).map(async (itinerary) => {
            const { data: details, error: detailsError } = await supabase
              .from("travel_itinerary_details")
              .select("*")
              .eq("itinerary_id", itinerary.id)
              .order("day_number", { ascending: true })

            if (detailsError) throw detailsError

            return { ...itinerary, details: details || [] }
          }),
        )

        setItineraries(itinerariesWithDetails)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchTravelData()
  }, [])

  return { itineraries, loading, error }
}

export function useWorkoutSessions() {
  const [sessions, setSessions] = useState<WorkoutSession[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSessions() {
      try {
        const { data, error } = await supabase.from("workout_sessions").select("*").order("date", { ascending: false })

        if (error) throw error
        setSessions(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchSessions()
  }, [])

  return { sessions, loading, error }
}

export function useTestimonials(category?: string) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        let query = supabase.from("testimonials").select("*")

        if (category) {
          query = query.eq("category", category)
        }

        const { data, error } = await query.order("created_at", { ascending: false })

        if (error) throw error
        setTestimonials(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [category])

  return { testimonials, loading, error }
}
