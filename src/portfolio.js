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
    // livePreview: 'https://github.com',
  },
  {
    name: 'Popularity Sentiment Index of World Leaders',
    description:
      'This project serves as a comparison of select rank world leaders based on popular opinion through popular reddit threads by using several machine learning models',
    stack: ["Python", "Keras", "MongoDB", "NLP", "Transformers"],
    sourceCode: 'https://github.com/thuhinkhanna/PoliticalLikeability',
    // livePreview: 'https://github.com',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const publications = [
  {
    name: 'funcX: Federated Function as a Service for Science',
    authors: ['Zhuozhao Li', 'Ryan Chard', 'Yadu Babuji', 'Ben Galewsky', 'Tyler Skluzacek', 'Kirill Nagaitsev', 'Anna Woodard', 'Ben Blaiszik', 'Josh Bryan', 'Daniel S. Katz', 'Ian Foster', 'Kyle Chard'],
    sourceCode: 'https://github.com/funcx-faas/funcX',
    livePreview: 'https://arxiv.org/abs/2209.11631',
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

export { header, about, projects, skills, contact, publications, education }
