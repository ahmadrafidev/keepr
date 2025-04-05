"use client"

import { useState } from "react"

import BookmarkList from "@/components/bookmark-list"
import { Header } from "@/components/header"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="container mx-auto px-4 py-8">
        <BookmarkList searchQuery={searchQuery} />
      </main>
    </div>
  )
}
