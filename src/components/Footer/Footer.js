import React from 'react';
import styles from './Footer.module.css';

const socialsArr = [
  { href: 'https://www.instagram.com/markaroone/', icon: 'logo-instagram' },
  {
    href: 'https://www.facebook.com/markchristianfajardo/',
    icon: 'logo-facebook',
  },
  {
    href: 'https://www.linkedin.com/in/mark-christian-fajardo/',
    icon: 'logo-linkedin',
  },
  { href: 'https://github.com/markaroone/', icon: 'logo-github' },
  { href: 'https://gitlab.com/markaroone/', icon: 'logo-gitlab' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socials}>
        {socialsArr.map((el, i) => (
          <li key={i}>
            <a href={`${el.href}`} target='_blank'>
              <ion-icon name={`${el.icon}`}></ion-icon>
            </a>
          </li>
        ))}
      </ul>

      <p>Created by Mark Christian Fajardo - 2022</p>
    </footer>
  );
};

export default Footer;
