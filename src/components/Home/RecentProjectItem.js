import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RecentProjectItem.module.css';

const RecentProjectItem = ({ project }) => {
  const navigate = useNavigate();

  const navigateToProjectsHandler = () => {
    navigate('/projects');
  };

  return (
    <li className={styles.project} onClick={navigateToProjectsHandler}>
      <a href={project.link} target='_blank'>
        <img src={project.images[2]} alt='project image' />

        <div className={styles.overlay}>
          <a className={styles.repo} href={project.repo} target='_blank'>
            Github repo{' '}
            <i>
              <ion-icon name='chevron-forward-outline'></ion-icon>
            </i>
          </a>
          <p className={styles.name}>{project.name}</p>
          <p className={styles.description}>{project.description}</p>

          <ul className={styles.tags}>
            {project.tech.map((tag, i) => (
              <li key={i} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
};

export default RecentProjectItem;
