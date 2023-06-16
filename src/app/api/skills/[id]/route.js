import { deleteSkills, getSkillsById, updateSkills } from '@/utils/handlers/skillsControllers'
import { NextResponse } from 'next/server'

export async function GET (req, { params }) {
  const { id } = params

  try {
    const res = await getSkillsById(id)
    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}

export async function PUT (req, { params }) {
  const body = await req.json()
  const { id } = params

  try {
    const res = await updateSkills(id, body)
    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}

export async function DELETE (req, { params }) {
  const { id } = params

  try {
    const res = await deleteSkills(id)

    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}
