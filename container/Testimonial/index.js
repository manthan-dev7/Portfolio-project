import classNames from 'classnames';
import PortText from '../../component/PortText';
import styles from './_portTestimonial.module.scss';

const Testimonial = () => (
  <section className={styles.testimonial}>
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <div
            className={classNames(styles.authorImg, {
              active: true,
            })}>
            <img src="/image/testimonial/img-1.jpg" alt="" />
          </div>
          <PortText variant="portTestimonialText">Mr John Doe</PortText>
          <PortText variant="portTestimonialRoleText">Creative Director</PortText>
          <PortText variant="portTestimonialPText" className={styles.description}>
            Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe
            asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum
            autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In
            similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus
            quas!
          </PortText>
        </div>
        <div className={styles.slide1}>
          <div className={styles.authorImg}>
            <img src="/image/testimonial/img-1.jpg" alt="" />
          </div>
          <PortText variant="portTestimonialText">Mr John Doe adfadf</PortText>
          <PortText variant="portTestimonialRoleText">Creative Director</PortText>
          <PortText variant="portTestimonialPText" className={styles.description}>
            Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe
            asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum
            autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In
            similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus
            quas!
          </PortText>
        </div>
      </div>

      <div className={styles.dot}>
        <div className={styles.individualDot}>
          <span></span>
        </div>
        <div className={styles.individualDot}>
          <span></span>
        </div>
        <div className={styles.individualDot}>
          <span></span>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
