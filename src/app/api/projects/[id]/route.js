import { deleteProjects, getProjectsById, updateProjects } from '@/utils/handlers/projectsControllers'
import { NextResponse } from 'next/server'

export async function GET (req, { params }) {
  const { id } = params

  try {
    const res = await getProjectsById(id)
    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}

export async function PUT (req, { params }) {
  const body = await req.json()
  const { id } = params

  try {
    const res = await updateProjects(id, body)
    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}

export async function DELETE (req, { params }) {
  const { id } = params

  try {
    const res = await deleteProjects(id)

    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}
