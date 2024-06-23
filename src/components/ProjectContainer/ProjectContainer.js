import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import SchoolIcon from '@material-ui/icons/School'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    {project.isPublication ? (<h4>{project.name}</h4>) : (<h3>{project.name}</h3>)}

    {project.years && (
      <p className='years'>
        <span className="school">
          <SchoolIcon />
        </span>
        <span>{project.years}</span>
      </p>
    )}
    {project.company && (
      <p className='years workex'>
        <span>
          <b>{project.company}</b> 
          <div className = 'workex_years'>
          {project.work_years}
          </div>
        </span>
      </p>
    )}

  <div className="project__container">
    {project.isWork && (
      <>
        {project.workExperiencePoints && (
          <ul className='project__workExperiencePoints'>
            {project.workExperiencePoints.map((desc) => (
              <li className='project__workExperiencePoints' key={uniqid()}>{desc}</li>
            ))}
          </ul>
        )}
      </>
    )}
  </div>



    {project.isEducation && (<hr />)}

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.gpa && (
      <p className = 'gpa'>
        <span>GPA: {project.gpa}</span>
      </p>
    )}

    {project.authors && (
      <p>
        {project.authors.map((item, idx) => (
          <span key={uniqid()}>
            {item === 'Varun Rishwandh Sekar' ? (<b>{item}</b>) : (<span>{item}</span>)}
            {idx !== project.authors.length - 1 && (', ')}
          </span>
        ))}
      </p>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
