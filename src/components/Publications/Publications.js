import uniqid from 'uniqid'
import { publications } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Publications.css'

const Publications = () => {
  if (!publications.length) return null

  return (
    <section id='publications' className='section publications'>
      <h2 className='section__title'>Publications</h2>

      <div className='publications__grid'>
        {publications.map((pub) => (
          <ProjectContainer key={uniqid()} project={pub} />
        ))}
      </div>
    </section>
  )
}

export default Publications
