import perfil from '../images/photo CV.png'
import html from '../images/technologies/html.png'
import java from '../images/technologies/java.png'
import js from '../images/technologies/js.png'
import next from '../images/technologies/Next.png'
import node from '../images/technologies/nodejs.png'
import postgresql from '../images/technologies/postgresql-logo.png'
import react from '../images/technologies/react.png'
import redux from '../images/technologies/redux.png'
import sequelize from '../images/technologies/sequelize.png'
import express from '../images/technologies/express.webp'
import scrum from '../images/technologies/SCRUM.png'

export const admin = {
  id: 1,
  img: { perfil },
  name: 'William',
  last_name: 'henao',
  mail: 'alexanderhenao0522@gmail.com',
  cv_url: 'https://drive.google.com/file/d/1HA-bhLAPOGcjuDaeiojqQzOBn4Gt3COL/view?usp=share_link'
}

export const skills = [
  { id: 1, name: 'HTML', icon: html, group: 'front' },
  { id: 2, name: 'React', icon: react, group: 'front' },
  { id: 3, name: 'Redux', icon: redux, group: 'front' },
  { id: 4, name: 'PostgresSQL', icon: postgresql, group: 'back' },
  { id: 5, name: 'Node', icon: node, group: 'back' },
  { id: 6, name: 'Sequelize', icon: sequelize, group: 'back' },
  { id: 7, name: 'Express', icon: express, group: 'back' },
  { id: 8, name: 'Next', icon: next, group: 'otros' },
  { id: 9, name: 'Java', icon: java, group: 'learning' },
  { id: 10, name: 'JavaScript', icon: js, group: 'language' },
  { id: 11, name: 'SCRUM', icon: scrum, group: 'soft_skills' }
]

export const Proyectos = [
  {
    id: 1,
    name: 'Henry Games',
    description:
      'Henry Games es una plataforma que permite a los usuarios gestionar información de videojuegos de manera intuitiva y eficiente, también integra una API que proporciona información detallada sobre más de 300.000 videojuegos, lo que hace que la gestión de la información sea aún más completa y actualizada.',
    skills: [skills[1], skills[2], skills[3], skills[4], skills[5], skills[6], skills[7]],
    images: [
      {
        id: 1,
        img: {}
      }
    ]
  },
  {
    id: 2,
    name: 'FusionaJob',
    description: 'Una app que permite conectar a candidatos y reclutadores',
    skills: [{ id: 1, name: 'HTML', icon: {} }],
    images: [
      {
        id: 1,
        img: {}
      }
    ]
  },
  {
    id: 3,
    name: 'Portafolio',
    description: 'Es donde estáis',
    skills: [{ id: 1, name: 'HTML', icon: {} }],
    images: [
      {
        id: 1,
        img: {}
      }
    ]
  }
]
