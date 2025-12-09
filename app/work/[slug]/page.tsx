import { projects } from '@/data/projects'
import WorkDetailClient from './WorkDetailClient'

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  return <WorkDetailClient slug={params.slug} />
}
