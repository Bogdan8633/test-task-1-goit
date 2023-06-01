import { useState } from 'react';

import styles from './card.module.css';

const Card = () => {
  const [activeBtn, setActiveBtn] = useState(true);

  return (
    <div className={styles.card}>
      <a href="/" className={styles.logoLink}>
        <img
          className={styles.logoImg}
          src={require('images/LogoPng.png')}
          alt="logo"
        />
      </a>

      <div className={styles.backgroundImg}></div>
      <div className={styles.avatarWrapper}>
        <img src={require('images/group1.png')} alt="line" />
        <img
          className={styles.avatar}
          src={require('images/avatar.png')}
          alt="avatar"
        />
      </div>
      <ul className={styles.infoList}>
        <li>
          <h2 className={styles.title}> 777 tweets</h2>
        </li>
        <li>
          <h2 className={styles.title}> 100,500 Followers</h2>
        </li>
      </ul>
      <button
        onClick={() => {
          setActiveBtn(prevState => !prevState);
          console.log('Чи має бути activeBtn активованою: ', activeBtn);
        }}
        className={activeBtn ? `${styles.btn} ${styles.active}` : styles.btn}
        type="button"
      >
        {activeBtn ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default Card;
