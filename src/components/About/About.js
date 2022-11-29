import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
// import pic1 from './propic1.jpeg';
import pic2 from './propic2.jpeg';

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <div className='propic-cont'>
        {/* <img src={pic1} className='propic propic-bottom' alt="Kirill Nagaitsev" /> */}
        <img src={pic2} className='propic propic-top' alt="Kirill Nagaitsev" />
      </div>

      {name && (
        <h1>
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}<span className='university'>Northwestern University</span></h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Projects
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
