"use client"

import { useState } from "react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, ExternalLink, Heart, MoreHorizontal, Tag } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { NewBookmarkForm } from "@/components/new-bookmark-form"

const sampleBookmarks = [
  {
    id: 1,
    title: "The Future of Web Development",
    url: "https://example.com/future-web-dev",
    description:
      "An insightful article about upcoming trends in web development and how they might shape the industry.",
    image: "/placeholder.svg?height=200&width=400",
    category: "article",
    tags: ["webdev", "future", "technology"],
    date: "2 days ago",
  },
  {
    id: 2,
    title: "Best Productivity Tools for 2025",
    url: "https://example.com/productivity-tools",
    description: "A curated list of the most effective productivity tools to boost your workflow.",
    image: "/placeholder.svg?height=200&width=400",
    category: "blog",
    tags: ["productivity", "tools", "workflow"],
    date: "1 week ago",
  },
  {
    id: 3,
    title: "Ergonomic Home Office Chair",
    url: "https://example.com/ergonomic-chair",
    description: "The perfect chair for long hours of comfortable work from home.",
    image: "/placeholder.svg?height=200&width=400",
    category: "product",
    tags: ["office", "ergonomic", "furniture"],
    date: "2 weeks ago",
  },
]

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useState(sampleBookmarks)
  const [activeTab, setActiveTab] = useState("all")

  const filteredBookmarks =
    activeTab === "all" ? bookmarks : bookmarks.filter((bookmark) => bookmark.category === activeTab)

  const handleDelete = (id: number) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Bookmarks</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Tag className="mr-2 h-4 w-4" />
            Manage Tags
          </Button>
          <NewBookmarkForm />
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="article">Articles</TabsTrigger>
          <TabsTrigger value="blog">Blogs</TabsTrigger>
          <TabsTrigger value="product">Products</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBookmarks.map((bookmark) => (
              <Card key={bookmark.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={bookmark.image || "/placeholder.svg"}
                    alt={bookmark.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 pb-0">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold line-clamp-1">{bookmark.title}</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="-mr-2 h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Add Tags</DropdownMenuItem>
                        <DropdownMenuItem>Move to Folder</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(bookmark.id)}>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-1 flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{bookmark.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">{bookmark.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {bookmark.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Heart className="mr-1 h-4 w-4" />
                    Favorite
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 px-2" asChild>
                    <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Visit
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredBookmarks.length === 0 && (
            <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed">
              <p className="text-muted-foreground">No bookmarks found in this category</p>
              <Button variant="outline" size="sm" className="mt-2">
                Add Your First Bookmark
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

