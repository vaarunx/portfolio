import uniqid from 'uniqid'
import { workExperience } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './WorkExperience.css'

const WorkExperience = () => {
  if (!workExperience.length) return null

  return (
    <section id='workex' className='section workex'>
      <h2 className='section__title'>Work Experience</h2>

      <div className='workex__grid'>
        {workExperience.map((pub) => (
        
          <ProjectContainer key={uniqid()} project={pub} />
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
