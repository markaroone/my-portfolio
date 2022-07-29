import React from 'react';
import styles from './RecentProjectItem.module.css';

const RecentProjectItem = ({ project, location }) => {
  const navigateToProjectApplicationHandler = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <li className={styles.project}>
      <a href={project.link} target='_blank'>
        <img src={project.images[2]} alt='project image' />

        <div className={styles.overlay}>
          <button
            className={styles.repo}
            onClick={(e) => {
              navigateToProjectApplicationHandler(project.repo);
              e.preventDefault();
            }}
          >
            github repo
            <i>
              <ion-icon name='chevron-forward-outline'></ion-icon>
            </i>
          </button>

          <p className={styles.name}>{project.name}</p>
          <p className={styles.description}>{project.description}</p>

          <ul className={styles.tags}>
            {project.tech.map((tag, i) => (
              <li
                key={i}
                className={styles.tag}
                id={styles[`${tag.toLowerCase()}`]}
              >
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
