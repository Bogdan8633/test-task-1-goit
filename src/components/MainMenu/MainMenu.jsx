import { useState } from 'react';
import styles from './mainMenu.module.css';

const MainMenu = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  //   const handleClick = idx => setActiveIndex(idx);

  const elements = items.map(({ id, text, link }, index) => (
    <li key={id}>
      <a
        onClick={() => setActiveIndex(index)}
        className={
          activeIndex === index
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
        href={link}
      >
        {text}
      </a>
    </li>
  ));

  return <ul className={styles.menu}>{elements}</ul>;
};

MainMenu.defaultProps = {
  items: [],
};

export default MainMenu;
