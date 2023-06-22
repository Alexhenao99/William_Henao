import Modal from '@/components/Modal'
import ProjectById from '@/components/ProjectById'

const ProjectModal = ({ params }) => {
  return (
    <Modal>
      <ProjectById id={params.id} />
    </Modal>
  )
}

export default ProjectModal
