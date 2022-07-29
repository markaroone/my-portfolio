const projects = [
  {
    name: 'Layag Travel Tours',
    description: 'A travel booking application for everyone.',
    number: 7,
    images: [],
    tech: ['mongoDB', 'express', 'react', 'node'],
    link: 'https://62e2dd6e4844471ccf13f227--lively-gumption-2fffc2.netlify.app/',
    repo: 'https://github.com/markaroone/project7-fe',
  },
  {
    name: 'Uplifted | Health Activity Tracker App',
    description: 'Health and activity tracking application.',
    number: 6,
    images: [],
    tech: ['mongoDB', 'express', 'react', 'node'],
    link: 'https://uplift-health-web.herokuapp.com/',
    repo: 'https://github.com/markaroone/project6-web',
  },
  {
    name: 'La Cucina Restaurant App',
    description: 'We deliver delicious foods at you doorstep.',
    number: 5,
    images: [],
    tech: ['html', 'css', 'javascript', 'react'],
    link: 'https://la-cusina.herokuapp.com/',
    repo: 'https://github.com/markaroone/project5',
  },
  {
    name: 'To Do List App',
    description: 'Create a to dos and set reminders.',
    number: 4,
    images: [],
    tech: ['html', 'css', 'javascript', 'react'],
    link: 'https://markaroone-todo-app.herokuapp.com/',
    repo: 'https://github.com/markaroone/project4',
  },
  {
    name: 'Pokedex',
    description: 'Search and filter Pokemons and see their stats.',
    number: 3,
    images: [],
    tech: ['html', 'css', 'javascript', 'react'],
    link: 'https://pokemon-pokedex-app-markaroone.herokuapp.com/',
    repo: 'https://github.com/markaroone/project3',
  },
  {
    name: 'Guessing Number Game',
    description: 'A number guessing game.',
    number: 2,
    images: [],
    tech: ['html', 'css', 'javascript'],
    link: 'https://code-breaker-number-guess.herokuapp.com/',
    repo: 'https://github.com/markaroone/project2',
  },
  {
    name: 'To Do List App',
    description: 'Static photography portfolio website.',
    number: 1,
    images: [],
    tech: ['html', 'css', 'javascript'],
    link: 'https://markaroone-photography.herokuapp.com/',
    repo: 'https://github.com/markaroone/project1',
  },
];

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const allProjectImages = Object.values(
  importAll(
    require.context(
      `${__dirname}/../assets/images/projects/all`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  )
);

projects.forEach(
  (project) =>
    (project.images = allProjectImages.filter((img) => {
      if (+img.substr(14, 1) === project.number) return img;
    }))
);

exports.recentProjectsData = projects;
