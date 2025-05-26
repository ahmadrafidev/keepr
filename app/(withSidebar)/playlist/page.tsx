import { Metadata } from 'next'
import { Music, Play, Pause, SkipForward, Volume2, Clock, Star, Mic, Radio, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Playlist',
  description: 'Development-focused music and podcasts'
}

const playlistCategories = [
  { name: 'All', count: 42, active: true },
  { name: 'Focus', count: 18, active: false },
  { name: 'Chill', count: 12, active: false },
  { name: 'Podcasts', count: 8, active: false },
  { name: 'Ambient', count: 4, active: false },
]

const musicPlaylists = [
  {
    id: 1,
    name: 'Deep Focus',
    description: 'Instrumental tracks for intense coding sessions',
    category: 'Focus',
    trackCount: 47,
    duration: '3h 12m',
    mood: 'Focused',
    genre: 'Electronic/Ambient',
    lastPlayed: '2024-01-15',
    isPlaying: true,
    isFavorite: true,
    cover: '🎯',
    tags: ['Instrumental', 'Electronic', 'Minimal'],
    topTracks: [
      'Kiara - Boards of Canada',
      'Ryo - Ólafur Arnalds',
      'Weightless - Marconi Union'
    ]
  },
  {
    id: 2,
    name: 'Coding Beats',
    description: 'Lo-fi hip hop and chill beats for productive coding',
    category: 'Chill',
    trackCount: 32,
    duration: '2h 8m',
    mood: 'Relaxed',
    genre: 'Lo-fi Hip Hop',
    lastPlayed: '2024-01-14',
    isPlaying: false,
    isFavorite: true,
    cover: '🎵',
    tags: ['Lo-fi', 'Hip Hop', 'Chill'],
    topTracks: [
      'Sleepy Fish - C418',
      'Aruarian Dance - Nujabes',
      'Feather - Nujabes'
    ]
  },
  {
    id: 3,
    name: 'Synthwave Sessions',
    description: 'Retro synthwave for late-night coding marathons',
    category: 'Focus',
    trackCount: 28,
    duration: '2h 45m',
    mood: 'Energetic',
    genre: 'Synthwave',
    lastPlayed: '2024-01-13',
    isPlaying: false,
    isFavorite: false,
    cover: '🌆',
    tags: ['Synthwave', 'Retro', 'Electronic'],
    topTracks: [
      'Turbo Killer - Carpenter Brut',
      'Nightcall - Kavinsky',
      'Sunset - The Midnight'
    ]
  },
  {
    id: 4,
    name: 'Ambient Workspace',
    description: 'Peaceful ambient sounds for background focus',
    category: 'Ambient',
    trackCount: 15,
    duration: '4h 22m',
    mood: 'Calm',
    genre: 'Ambient',
    lastPlayed: '2024-01-12',
    isPlaying: false,
    isFavorite: true,
    cover: '🌊',
    tags: ['Ambient', 'Nature', 'Peaceful'],
    topTracks: [
      'Music for Airports - Brian Eno',
      'Discreet Music - Brian Eno',
      'Rain on Leaves - Max Richter'
    ]
  }
]

const podcasts = [
  {
    id: 1,
    name: 'Syntax',
    description: 'A Tasty Treats Podcast for Web Developers',
    hosts: ['Wes Bos', 'Scott Tolinski'],
    category: 'Tech',
    episodeCount: 650,
    avgDuration: '45 min',
    lastListened: '2024-01-15',
    rating: 5,
    isSubscribed: true,
    cover: '🍎',
    tags: ['JavaScript', 'Web Dev', 'React'],
    recentEpisodes: [
      'Hasty Treat - CSS Container Queries',
      'Supper Club × Deno with Ryan Dahl',
      'Hasty Treat - TypeScript 5.0'
    ]
  },
  {
    id: 2,
    name: 'The Changelog',
    description: 'Conversations with the hackers, leaders, and innovators of the software world',
    hosts: ['Adam Stacoviak', 'Jerod Santo'],
    category: 'Tech',
    episodeCount: 520,
    avgDuration: '60 min',
    lastListened: '2024-01-14',
    rating: 5,
    isSubscribed: true,
    cover: '📻',
    tags: ['Open Source', 'Software', 'Interviews'],
    recentEpisodes: [
      'The future of TypeScript',
      'Building developer tools',
      'Open source sustainability'
    ]
  },
  {
    id: 3,
    name: 'Developer Tea',
    description: 'A podcast for developers designed to fit inside your tea break',
    hosts: ['Jonathan Cutrell'],
    category: 'Career',
    episodeCount: 800,
    avgDuration: '15 min',
    lastListened: '2024-01-13',
    rating: 4,
    isSubscribed: true,
    cover: '☕',
    tags: ['Career', 'Productivity', 'Mindset'],
    recentEpisodes: [
      'The Power of Constraints',
      'Building Better Habits',
      'Managing Technical Debt'
    ]
  },
  {
    id: 4,
    name: 'Shop Talk Show',
    description: 'A live podcast about front-end web design and development',
    hosts: ['Dave Rupert', 'Chris Coyier'],
    category: 'Design',
    episodeCount: 580,
    avgDuration: '50 min',
    lastListened: '2024-01-11',
    rating: 4,
    isSubscribed: false,
    cover: '🛠️',
    tags: ['CSS', 'Design', 'Frontend'],
    recentEpisodes: [
      'CSS Grid vs Flexbox',
      'Modern CSS Techniques',
      'Accessibility in Design'
    ]
  }
]

const currentlyPlaying = {
  track: 'Kiara',
  artist: 'Boards of Canada',
  album: 'Geogaddi',
  duration: '4:23',
  currentTime: '2:15',
  progress: 51,
  playlist: 'Deep Focus'
}

const listeningStats = {
  totalHours: 156,
  favoriteGenre: 'Electronic',
  topArtist: 'Boards of Canada',
  mostPlayedPlaylist: 'Deep Focus',
  weeklyAverage: '8.5 hours'
}

const moodColors = {
  'Focused': 'bg-blue-100 text-blue-800',
  'Relaxed': 'bg-green-100 text-green-800',
  'Energetic': 'bg-red-100 text-red-800',
  'Calm': 'bg-purple-100 text-purple-800'
}

export default function PlaylistPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Playlist</h1>
        <p className="text-muted-foreground">
          A curated collection of music and podcasts that fuel my development sessions.
        </p>
      </div>

      {/* Currently Playing */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
            <Music className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{currentlyPlaying.track}</h3>
            <p className="text-muted-foreground">{currentlyPlaying.artist} • {currentlyPlaying.album}</p>
            <p className="text-sm text-muted-foreground">from {currentlyPlaying.playlist}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <SkipForward className="h-5 w-5 rotate-180" />
            </button>
            <button className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
              <Pause className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <SkipForward className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <Volume2 className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>{currentlyPlaying.currentTime}</span>
            <span>{currentlyPlaying.duration}</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${currentlyPlaying.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{listeningStats.totalHours}</div>
          <div className="text-sm text-muted-foreground">Hours Listened</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{musicPlaylists.length + podcasts.length}</div>
          <div className="text-sm text-muted-foreground">Total Playlists</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{listeningStats.weeklyAverage}</div>
          <div className="text-sm text-muted-foreground">Weekly Average</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{listeningStats.favoriteGenre}</div>
          <div className="text-sm text-muted-foreground">Top Genre</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{musicPlaylists.filter(p => p.isFavorite).length}</div>
          <div className="text-sm text-muted-foreground">Favorites</div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {playlistCategories.map((category) => (
          <button
            key={category.name}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              category.active
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Music Playlists */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Music className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Music Playlists</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {musicPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{playlist.cover}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{playlist.name}</h3>
                    {playlist.isFavorite && (
                      <Heart className="h-4 w-4 text-red-500 fill-current" />
                    )}
                    {playlist.isPlaying && (
                      <div className="flex items-center gap-1 text-primary">
                        <Volume2 className="h-3 w-3" />
                        <span className="text-xs">Playing</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{playlist.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Music className="h-3 w-3" />
                      {playlist.trackCount} tracks
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {playlist.duration}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-xs px-2 py-1 rounded ${moodColors[playlist.mood as keyof typeof moodColors]}`}>
                    {playlist.mood}
                  </span>
                  <button className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Top Tracks</h4>
                <div className="space-y-1">
                  {playlist.topTracks.map((track, index) => (
                    <div key={index} className="text-xs text-muted-foreground">
                      {index + 1}. {track}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {playlist.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{playlist.genre}</span>
                <span>Last played: {new Date(playlist.lastPlayed).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Podcasts */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <Mic className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Podcasts</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="text-2xl">{podcast.cover}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{podcast.name}</h3>
                    {podcast.isSubscribed && (
                      <Radio className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{podcast.description}</p>
                  <p className="text-xs text-muted-foreground">
                    Hosted by {podcast.hosts.join(', ')}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < podcast.rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">
                    {podcast.category}
                  </span>
                </div>
              </div>

              <div className="mb-3">
                <h4 className="text-sm font-medium mb-2">Recent Episodes</h4>
                <div className="space-y-1">
                  {podcast.recentEpisodes.map((episode, index) => (
                    <div key={index} className="text-xs text-muted-foreground">
                      • {episode}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {podcast.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{podcast.episodeCount} episodes • {podcast.avgDuration} avg</span>
                <span>Last: {new Date(podcast.lastListened).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Listening Habits */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Listening Habits</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Most Active Time</h3>
            <p className="text-2xl font-bold text-primary">2-6 PM</p>
            <p className="text-sm text-muted-foreground">Peak coding hours</p>
          </div>
          
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Favorite Artist</h3>
            <p className="text-2xl font-bold text-primary">Boards of Canada</p>
            <p className="text-sm text-muted-foreground">24 hours this month</p>
          </div>
          
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Top Podcast</h3>
            <p className="text-2xl font-bold text-primary">Syntax</p>
            <p className="text-sm text-muted-foreground">12 episodes this month</p>
          </div>
          
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Focus Sessions</h3>
            <p className="text-2xl font-bold text-primary">47</p>
            <p className="text-sm text-muted-foreground">Deep work sessions</p>
          </div>
        </div>
      </div>
    </div>
  )
} 