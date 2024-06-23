const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'VS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Varun Rishwandh Sekar',
  role: "Grad Student at ",
  description:"Hi! I'm pursuing Master's in Computer Science at Northeastern University. I have a professional experience of over 15 months in software development. I'm an innovative thinker, a problem solver and I'm skilled in building apps using Java, Python, JS.",
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
    workExperiencePoints: ["Worked in developing the ruling engine and matching service for an audit application with several queues that compares extracted document data against available system data using text semantic similarity.",
    "Engineered solutions for identifying and converting the orientation of a document in real-time, resulting in 20% reduction in processing errors.",    
    "Reduced the dependency of manual human intervention and increased the efficiency of classifying and extracting select mortgage documents."],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Graduate Intern',
    company: "Mr. Cooper",
    work_years: 'Nov 2022 - April 2023',


    workExperiencePoints: ["Developed the front-end website of a job portal (Naan Mudhalvan) using NuxtJS for the government of Tamil Nadu, India.", 
      "Trained and developed Conditional Random Field (CRF) and spaCy models for key information extraction and page clustering; integrated these models into a Java service for enhanced data processing.",
      "Integrated sonarqube and debricked to over 80 components."
      , "Increased code coverage of various Java and Python components from 0% to over 70% using JUnit and PyTest respectively."],
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Java Development Intern',
    company: "Ziroh Labs",
    work_years: 'Jan 2022 - March 2022',
    workExperiencePoints: ["This project serves as a comparison of select rank world leaders based on popular opinion through popular reddit threads by using several machine learning model"],
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Backend Developer Intern',
    company: "Grey Scientific Labs",
    work_years: 'April 2021 - Dec 2021',
    workExperiencePoints: ["This project serves as a comparison of select rank world leaders based on popular opinion through popular reddit threads by using several machine learning model"],
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
    isWork: true,
    isEducation: false,
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
