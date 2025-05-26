import { Metadata } from 'next'
import { Monitor, Cpu, HardDrive, Zap, Headphones, Keyboard, Mouse, Wifi, Settings, CheckCircle, Star, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Setup',
  description: 'My development environment and hardware'
}

const setupCategories = [
  { name: 'Hardware', icon: Cpu, color: 'bg-blue-500' },
  { name: 'Software', icon: Settings, color: 'bg-green-500' },
  { name: 'Peripherals', icon: Keyboard, color: 'bg-purple-500' },
  { name: 'Workspace', icon: Monitor, color: 'bg-orange-500' },
]

const hardware = [
  {
    category: 'Computer',
    name: 'MacBook Pro 16" (2023)',
    specs: 'M2 Max, 32GB RAM, 1TB SSD',
    description: 'Primary development machine with excellent performance for coding, design, and virtualization',
    price: '$3,499',
    purchaseDate: '2023-11-15',
    rating: 5,
    pros: ['Incredible performance', 'Great battery life', 'Excellent display'],
    cons: ['Expensive', 'Limited ports', 'Gets warm under heavy load'],
    icon: '💻'
  },
  {
    category: 'Monitor',
    name: 'LG UltraFine 5K 27"',
    specs: '5120x2880, Thunderbolt 3, 94W charging',
    description: 'Perfect companion for MacBook Pro with crisp text and accurate colors',
    price: '$1,299',
    purchaseDate: '2023-12-01',
    rating: 5,
    pros: ['Crisp 5K resolution', 'Single cable connection', 'Charges laptop'],
    cons: ['Expensive', 'No USB-A ports', 'Glossy screen'],
    icon: '🖥️'
  },
  {
    category: 'Audio',
    name: 'Sony WH-1000XM5',
    specs: 'Wireless, ANC, 30hr battery',
    description: 'Premium noise-canceling headphones for focused coding sessions',
    price: '$399',
    purchaseDate: '2023-10-20',
    rating: 5,
    pros: ['Excellent ANC', 'Great sound quality', 'Comfortable for long sessions'],
    cons: ['Expensive', 'Touch controls can be finicky', 'Not foldable'],
    icon: '🎧'
  }
]

const peripherals = [
  {
    name: 'Keychron K8 Pro',
    type: 'Mechanical Keyboard',
    description: 'Wireless mechanical keyboard with hot-swappable switches',
    features: ['Hot-swappable switches', 'Wireless/USB-C', 'RGB backlighting', 'Mac layout'],
    price: '$109',
    rating: 4,
    icon: '⌨️'
  },
  {
    name: 'Logitech MX Master 3S',
    type: 'Wireless Mouse',
    description: 'Precision mouse with customizable buttons and smooth scrolling',
    features: ['8K DPI sensor', 'Multi-device pairing', 'USB-C charging', 'Ergonomic design'],
    price: '$99',
    rating: 5,
    icon: '🖱️'
  },
  {
    name: 'Elgato Stream Deck Mini',
    type: 'Productivity Tool',
    description: 'Customizable LCD keys for shortcuts and automation',
    features: ['6 LCD keys', 'Custom actions', 'App integrations', 'Compact design'],
    price: '$79',
    rating: 4,
    icon: '🎛️'
  }
]

const software = [
  {
    name: 'macOS Sonoma',
    category: 'Operating System',
    version: '14.2',
    description: 'Latest macOS with enhanced productivity features',
    customizations: ['Custom dock', 'Hot corners', 'Spaces organization', 'Shortcuts automation'],
    rating: 5
  },
  {
    name: 'Homebrew',
    category: 'Package Manager',
    version: '4.2.0',
    description: 'Essential package manager for macOS development',
    customizations: ['Custom formulae', 'Automated updates', 'Bundle file management'],
    rating: 5
  },
  {
    name: 'Oh My Zsh',
    category: 'Shell',
    version: '5.9',
    description: 'Enhanced Zsh configuration with themes and plugins',
    customizations: ['Powerlevel10k theme', 'Git aliases', 'Auto-suggestions', 'Syntax highlighting'],
    rating: 5
  },
  {
    name: 'Raycast',
    category: 'Productivity',
    version: '1.65.0',
    description: 'Powerful launcher and productivity tool',
    customizations: ['Custom commands', 'Clipboard history', 'Window management', 'API integrations'],
    rating: 5
  }
]

const workspace = [
  {
    item: 'Standing Desk',
    brand: 'UPLIFT V2',
    description: 'Height-adjustable desk for better ergonomics',
    features: ['Electric height adjustment', '48" x 30" bamboo top', 'Memory presets', 'Cable management'],
    rating: 5
  },
  {
    item: 'Office Chair',
    brand: 'Herman Miller Aeron',
    description: 'Ergonomic chair for long coding sessions',
    features: ['Mesh back support', 'Adjustable lumbar', 'PostureFit SL', '12-year warranty'],
    rating: 5
  },
  {
    item: 'Lighting',
    brand: 'BenQ ScreenBar Halo',
    description: 'Monitor light bar with ambient lighting',
    features: ['Auto-dimming', 'Asymmetric lighting', 'Wireless controller', 'USB-C powered'],
    rating: 4
  },
  {
    item: 'Webcam',
    brand: 'Logitech Brio 4K',
    description: 'High-quality webcam for video calls',
    features: ['4K recording', 'Auto-focus', 'HDR support', 'Privacy shutter'],
    rating: 4
  }
]

const configurations = [
  {
    name: 'Dotfiles Repository',
    description: 'Complete development environment configuration',
    items: ['Zsh config', 'Git settings', 'VS Code settings', 'Homebrew bundle'],
    lastUpdated: '2024-01-15',
    url: 'https://github.com/username/dotfiles'
  },
  {
    name: 'VS Code Extensions',
    description: 'Essential extensions for development productivity',
    items: ['TypeScript Hero', 'GitLens', 'Prettier', 'Thunder Client'],
    lastUpdated: '2024-01-10',
    url: 'https://gist.github.com/username/vscode-extensions'
  },
  {
    name: 'Raycast Commands',
    description: 'Custom commands and shortcuts for productivity',
    items: ['Git shortcuts', 'Project launcher', 'Color picker', 'System monitor'],
    lastUpdated: '2024-01-08',
    url: 'https://github.com/username/raycast-commands'
  }
]

export default function SetupPage() {
  const totalValue = hardware.reduce((sum, item) => sum + parseInt(item.price.replace(/[$,]/g, '')), 0) +
                    peripherals.reduce((sum, item) => sum + parseInt(item.price.replace(/[$,]/g, '')), 0)

  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Setup</h1>
        <p className="text-muted-foreground">
          A detailed look at my development environment, hardware, and workspace configuration.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">${(totalValue / 1000).toFixed(1)}K</div>
          <div className="text-sm text-muted-foreground">Total Value</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{hardware.length + peripherals.length}</div>
          <div className="text-sm text-muted-foreground">Hardware Items</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{software.length}</div>
          <div className="text-sm text-muted-foreground">Software Tools</div>
        </div>
        <div className="bg-card border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">{workspace.length}</div>
          <div className="text-sm text-muted-foreground">Workspace Items</div>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {setupCategories.map((category) => {
          const IconComponent = category.icon
          return (
            <div
              key={category.name}
              className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold">{category.name}</h3>
            </div>
          )
        })}
      </div>

      {/* Hardware Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Cpu className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Hardware</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hardware.map((item, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.specs}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary">{item.price}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < item.rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-green-700 mb-1">Pros</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {item.pros.map((pro, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-red-700 mb-1">Cons</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {item.cons.map((con, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
                Purchased: {new Date(item.purchaseDate).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Peripherals Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <Keyboard className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Peripherals</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {peripherals.map((item, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{item.type}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary text-sm">{item.price}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < item.rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Software Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <Settings className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Software</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {software.map((item, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">{item.version}</span>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < item.rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Customizations</h4>
                <div className="space-y-1">
                  {item.customizations.map((custom, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      {custom}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workspace Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <Monitor className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Workspace</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {workspace.map((item, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold">{item.item}</h3>
                  <p className="text-sm text-primary font-medium">{item.brand}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < item.rating
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Configurations */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Configurations</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {configurations.map((config, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">{config.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{config.description}</p>
              
              <div className="space-y-1 mb-4">
                {config.items.map((item, i) => (
                  <div key={i} className="text-xs text-muted-foreground">
                    • {item}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Updated: {new Date(config.lastUpdated).toLocaleDateString()}
                </span>
                <a
                  href={config.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  View
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}