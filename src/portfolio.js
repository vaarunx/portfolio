const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://knagaitsev.github.io',
  title: 'KN.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kirill Nagaitsev',
  role: 'Ph.D. Student at ',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: '#projects',
  social: {
    // linkedin: 'https://linkedin.com',
    github: 'https://github.com/knagaitsev',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Interrupt Polling',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Operating Systems', 'Compilers', 'Parallelism'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Vlang',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Compilers', 'Parallelism', 'Heterogeneous Hardware'],
    // sourceCode: 'https://github.com',
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
  email: 'knagaitsev@u.northwestern.edu',
}

export { header, about, projects, skills, contact, publications }
