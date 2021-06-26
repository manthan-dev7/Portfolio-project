import styles from './portNav.module.scss';

const Navigation = () => (
  <div className={styles.portNav}>
    <a className={styles.portEle} href="#">
      home
    </a>
    <a className={styles.portEle} href="#">
      about
    </a>
    <a className={styles.portEle} href="#">
      services
    </a>
    <a className={styles.portEle} href="#">
      works
    </a>
    <a className={styles.portEle} href="#">
      blog
    </a>
    <a className={styles.portEle} href="#">
      contact
    </a>
  </div>
);

export default Navigation;
