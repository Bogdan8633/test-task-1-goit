import { useState } from 'react';

import styles from './card.module.css';

const Card = ({ user, tweets, followers, avatar }) => {
  const [activeBtn, setActiveBtn] = useState(false);

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
          // src={require('images/avatar.png')}
          src={avatar}
          alt="avatar"
        />
      </div>
      <ul className={styles.infoList}>
        <li>
          <h2 className={styles.title}>{user}</h2>
        </li>
        <li>
          <h2 className={styles.title}>{tweets} TWEETS</h2>
        </li>
        <li>
          <h2 className={styles.title}>{followers} FOLLOWERS</h2>
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
