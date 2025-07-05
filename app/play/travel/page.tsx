"use client"

import { useState } from "react"

export default function TravelPage() {
  // Change the default active tab from "overview" to "itineraries"
  const [activeTab, setActiveTab] = useState("itineraries")
  const [selectedCountry, setSelectedCountry] = useState(null)

  const visitedCountries = [
    { name: "India", code: "IN", continent: "Asia", visits: "Home base", highlight: "Diverse cultures and cuisines" },
    {
      name: "Singapore",
      code: "SG",
      continent: "Asia",
      visits: "3 times",
      highlight: "Food paradise and urban planning",
    },
    {
      name: "Malaysia",
      code: "MY",
      continent: "Asia",
      visits: "2 times",
      highlight: "Street food and cultural diversity",
    },
    { name: "Thailand", code: "TH", continent: "Asia", visits: "2 times", highlight: "Temples and Thai cuisine" },
    {
      name: "Sri Lanka",
      code: "LK",
      continent: "Asia",
      visits: "1 time",
      highlight: "Tea plantations and ancient history",
    },
    {
      name: "United Kingdom",
      code: "GB",
      continent: "Europe",
      visits: "1 time",
      highlight: "London's museums and history",
    },
  ]
}
