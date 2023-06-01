import styles from './card.module.css';

const Card = () => {
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
      <div className={styles.avatarWrapper}></div>
    </div>
  );
};

export default Card;
