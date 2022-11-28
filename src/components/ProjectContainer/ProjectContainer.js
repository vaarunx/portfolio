import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    {!project.isPublication && (
      <h3>{project.name}</h3>
    )}

    {project.isPublication && (
      <h4>{project.name}</h4>
    )}

    {/* {project.isPublication && (
      <hr />
    )} */}

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

    {project.authors && (
      <p>
        {project.authors.map((item, idx) => (
          <span>
            {item === 'Kirill Nagaitsev' ? (<b>{item}</b>) : (<span>{item}</span>)}
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
