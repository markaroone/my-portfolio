import React from 'react';
import { useLocation } from 'react-router-dom';
import RecentProjectItem from './RecentProjectItem';
import { recentProjectsData } from '../../data/recentProjects';

import styles from './RecentProjects.module.css';

const recentProjects = recentProjectsData.slice(0, 4);

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const allProjectImages = Object.values(
  importAll(
    require.context(
      `${__dirname}/../../assets/images/projects/all`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  )
);

recentProjects.forEach(
  (project) =>
    (project.images = allProjectImages.filter((img) => {
      if (+img.substr(14, 1) === project.number) return img;
    }))
);

const RecentProjects = () => {
  const location = useLocation().pathname.slice(1);
  return (
    <div className={styles.projects}>
      <h3>Recent Projects</h3>

      <ul className={styles['projects-container']}>
        {recentProjects.map((project, i) => (
          <RecentProjectItem key={i} project={project} location={location} />
        ))}
      </ul>
    </div>
  );
};

export default RecentProjects;
