import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Projects.module.css';
import { recentProjectsData } from '../data/recentProjects';
import RecentProjectItem from '../components/Home/RecentProjectItem';

const Projects = () => {
  const location = useLocation().pathname.slice(1);
  return (
    <section className={styles.projects}>
      <h3>Projects</h3>

      <ul className={styles['projects-container']}>
        {recentProjectsData.map((data, i) => {
          return (
            <RecentProjectItem key={i} project={data} location={location} />
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
