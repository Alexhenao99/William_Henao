import ProjectById from '@/components/ProjectById'

const ProjectByIdPage = ({ params }) => {
  return (
    <section className='h-screen w-full'>
      <ProjectById id={params.id} />
    </section>
  )
}

export default ProjectByIdPage
