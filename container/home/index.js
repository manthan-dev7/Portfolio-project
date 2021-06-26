import Navigation from '../../component/Navigation';
import PortText from '../../component/PortText';
import styles from './_portHome.module.scss';

const Home = () => {
  const imgSlider = () => {
    const arr = [
      {
        id: 1,
        src: '/image/Home/img-1.jpg',
      },
      {
        id: 2,
        src: '/image/Home/img-2.jpg',
      },
    ];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
    }
  };
  return (
    <section id="home" className={styles.banner}>
      <PortText variant="portLogoText">Manthan</PortText>
      <Navigation />
      <div className={styles.containerH}>
        <div className={styles.caption}>
          <PortText variant="portHeaderHomeText" className={styles.header}>
            Hi I'm Manthan.
          </PortText>
          <PortText variant="portHeaderCaption" className={styles.desc}>
            Creative Designer and Developer located in Ahmedabad.
            <br />
            Specialized in
            <b>Creating Websites.</b>
            <b>Designing Logo.</b>
            <b>Designing UI/UX.</b>
          </PortText>
        </div>
        <div className={styles.arrow}>
          <img src="/svg/expand_more_white_24dp.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
