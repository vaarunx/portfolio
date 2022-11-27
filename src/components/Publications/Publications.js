import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Publications.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='publications' className='section publications'>
      <h2 className='section__title'>Publications</h2>

      <div className='publications__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
