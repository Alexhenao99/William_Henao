import { createProjects, getProjects } from '@/utils/handlers/projectsControllers'
import { NextResponse } from 'next/server'
// import { createSkills } from '../../src/app/api/handlers/skillsControllers'

export async function POST (req) {
  try {
    const body = await req.json()
    const res = await createProjects(body)
    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}

export async function GET () {
  const allSkills = await getProjects()
  return NextResponse.json(allSkills)
}
