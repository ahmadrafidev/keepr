import { Metadata } from 'next'
import { HomeContent } from '@/components/home/home-content'

export const metadata: Metadata = {
  title: 'Home | Keepr',
  description: 'Home page for your Keepr',
}

export default function Home() {
  return <HomeContent />
}
