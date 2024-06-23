import uniqid from 'uniqid'
import ProgressBar from "@ramonak/react-progress-bar";
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  const skillEntries = Object.entries(skills);

  if (!skillEntries.length) return null

  const barColor = (skillLevel) => {
    let fontColor = "#2d63dd";
    if(skillLevel < 40){
      fontColor = "#FFCC33";
    }
    return fontColor
  }
  const currentTheme = () => {
    const theme = localStorage.getItem("themeName");
    let label = "#bc9fbd"
    if (theme === "light"){
      label = "#5b84a4"
    }
    return label
  }

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>My Skills</h2>
      <ul className='skills__grid'>
        {skillEntries.map(([skill, percentage]) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
            <ProgressBar 
              completed={percentage}
              bgColor={barColor(percentage)}
              labelAlignment="outside"
              height="0.85em"
              width="80%"
              labelColor={currentTheme()}
              labelSize="1em"
              />
          </li>
        ))}
      </ul>
    </section>

  )
}

export default Skills
