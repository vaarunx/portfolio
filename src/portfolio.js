const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'VS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Varun Rishwandh Sekar',
  role: 'Software Engineer at ',
  description: "I'm a Software Engineer with a huge interest in Backend Dev",
  resume: 'https://drive.google.com/file/d/1jfTq0LbnFmSZ5r7YgQcXiurNBPPfm6Ck/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/varunrishwandh/',
    github: 'https://github.com/vaarunx',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Real-Time Content Filtering',
    description:
      'This project contains several deep learning models that classifies the contents of a webpage as Safe or Not safe for work (NSFW) by using techniques such as image classification and sentiment analysis. This is implemented in real-time with a cross-browser web extension that would be able to remove or redact the unmoderated content from the web pages displayed in the client’s browser.',
    
      stack: ["Javascript", "Keras", "Flask", "ExpressJS", "Transformers", "CNN"],
    sourceCode: 'https://github.com/vaarunx/realtime-censorship',
  },
  {
    name: 'Popularity Sentiment Index of World Leaders',
    description:
      'This project serves as a comparison of select rank world leaders based on popular opinion through popular reddit threads by using several machine learning models',
    stack: ["Python", "Keras", "MongoDB", "NLP", "Transformers"],
    sourceCode: 'https://github.com/thuhinkhanna/PoliticalLikeability',
  },
  {
    name: 'Web-app to share Cooking recipes',
    description:
      'Designed and developed a Recipe sharing and food media platform for users to store and share recipes. Added CRUD operations and allowed the users to either share the recipes either publicly or to privately store them. Implemented an email authentication system and the ability to reset passwords through OTPs',
    stack: ["Python" , "Django" , "MySQL", "HTML", "CSS", "Javascript"],
    sourceCode: 'https://github.com/thuhinkhanna/PoliticalLikeability',
  },
  // {
  //   name: 'Web-app to share Cooking recipes2',
  //   description:
  //     'Designed and developed a Recipe sharing and food media platform for users to store and share recipes. Added CRUD operations and allowed the users to either share the recipes either publicly or to privately store them. Implemented an email authentication system and the ability to reset passwords through OTPs',
  //   stack: ["Python" , "Django" , "MySQL", "HTML", "CSS", "Javascript"],
  //   sourceCode: 'https://github.com/thuhinkhanna/PoliticalLikeability',
  // },
  // {
  //   name: 'Web-app to share Cooking recipes',
  //   description:
  //     'Designed and developed a Recipe sharing and food media platform for users to store and share recipes. Added CRUD operations and allowed the users to either share the recipes either publicly or to privately store them. Implemented an email authentication system and the ability to reset passwords through OTPs',
  //   stack: ["Python" , "Django" , "MySQL", "HTML", "CSS", "Javascript"],
  //   sourceCode: 'https://github.com/thuhinkhanna/PoliticalLikeability',
  // },

]

const publications = [
  {
    name: 'Hybrid Perception Analysis of World Leaders in Reddit using Sentiment Analysis',
    authors: ['Varun Rishwandh Sekar', 'Thuhin Khanna R', 'Suraj N', 'Priya Vijay' ],
    livePreview: 'https://doi.org/10.1109/AICAPS57044.2023.10074005',
    isPublication: true,
  }
]

const workExperience = [
  {
    name: 'Software Engineer - I',
    company: "Mr. Cooper",
    work_years: 'May 2023 - Present',
    description: "This project serves as a comparison of select rank world leaders based on popular opinion through popular reddit threads by using several machine learning model",
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
  },
  {
    name: 'Graduate Intern',
    company: "Mr. Cooper",
    work_years: 'Nov 2022 - April 2023',
    description: "This project serves as a comparison of select rank world leaders based on popular opinion through popular reddit threads by using several machine learning model",
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
  },
  {
    name: 'Java Development Intern',
    company: "Ziroh Labs",
    work_years: 'Jan 2022 - March 2022',
    description: "This project serves as a comparison of select rank world leaders based on popular opinion through popular reddit threads by using several machine learning model",
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
  },
  {
    name: 'Backend Developer Intern',
    company: "Grey Scientific Labs",
    work_years: 'April 2021 - Dec 2021',
    description: "This project serves as a comparison of select rank world leaders based on popular opinion through popular reddit threads by using several machine learning model",
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
  }


]

const education = [
  {
    name: 'Anna University',
    description: 'B.E in Computer Science and Engineering',
    gpa: "9.04 / 10",
    years: '2019 - 2023',
    isPublication: true,
    isEducation: true,
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'varunrishwandh10@gmail.com',
}

export { header, about, projects, skills, contact, publications, education, workExperience }
