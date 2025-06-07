import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface Project {
  id: string
  name: string
  description: string
  category: "ai" | "technical" | "featured"
  status: "completed" | "in-progress" | "planning" | "ideation"
  progress: number
  technologies: string[]
  github_url?: string
  live_url?: string
  blog_url?: string
  image_url?: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: "tech" | "food" | "travel"
  url: string
  image_url?: string
  published_date: string
  created_at: string
}

export interface Book {
  id: string
  title: string
  author: string
  genre: string
  status: "completed" | "reading" | "to-read"
  rating?: number
  progress: number
  completed_date?: string
  notes?: string
  goodreads_url?: string
  created_at: string
}

export interface BoardGame {
  id: string
  name: string
  description: string
  category: string
  min_players: number
  max_players: number
  duration_min: number
  duration_max: number
  rating?: number
  image_url?: string
  bgg_url?: string
  is_owned: boolean
  is_wishlist: boolean
  created_at: string
}

export interface ScubaDive {
  id: string
  location: string
  dive_site?: string
  date: string
  max_depth_meters?: number
  duration_minutes?: number
  water_temp_celsius?: number
  visibility_meters?: number
  highlights?: string
  marine_life_spotted?: string[]
  dive_buddy?: string
  dive_center?: string
  notes?: string
  images?: string[]
  created_at: string
}

export interface ScubaCertification {
  id: string
  name: string
  agency?: string
  certification_date?: string
  instructor?: string
  location?: string
  card_number?: string
  is_planned: boolean
  planned_date?: string
  created_at: string
}

export interface TravelItinerary {
  id: string
  country: string
  duration_days?: number
  cities?: string[]
  highlights?: string[]
  best_time_to_visit?: string
  must_try_foods?: string[]
  image_url?: string
  spreadsheet_url?: string
  start_date?: string
  end_date?: string
  budget_usd?: number
  notes?: string
  created_at: string
}

export interface TravelItineraryDetail {
  id: string
  itinerary_id: string
  day_number: number
  activity: string
  location?: string
  notes?: string
  created_at: string
}

export interface WorkoutSession {
  id: string
  date: string
  workout_type: "strength" | "cardio" | "yoga" | "hiit"
  duration_minutes?: number
  exercises?: string[]
  notes?: string
  calories_burned?: number
  created_at: string
}

export interface Testimonial {
  id: string
  name: string
  title?: string
  company?: string
  content: string
  category: "mentorship" | "ahaa-ahaara" | "work"
  rating?: number
  image_url?: string
  linkedin_url?: string
  is_featured: boolean
  created_at: string
}

export interface MarineLife {
  id: string
  name: string
  scientific_name?: string
  category: "fish" | "mammal" | "coral" | "crustacean"
  description?: string
  image_url?: string
  first_spotted_date?: string
  times_spotted: number
  locations?: string[]
  created_at: string
}
