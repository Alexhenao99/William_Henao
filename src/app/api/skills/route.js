import { createSkills, getSkills } from '@/utils/handlers/skillsControllers'
import { NextResponse } from 'next/server'
// import IdSkill from './[id]/route'
// import { createSkills } from '../../src/app/api/handlers/skillsControllers'

export async function POST (req) {
  try {
    const body = await req.json() // ? req.body es una instancia de 'ReadableStream', que es una interfaz de lectura de flujo de datos y no el objeto JSON esperado. Para poder acceder a los datos JSON en req.body, se debe leer y analizar el flujo de datos en una cadena de texto JSON.
    const res = await createSkills(body)
    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}

export async function GET () {
  const allSkills = await getSkills()
  return NextResponse.json(allSkills)
}
