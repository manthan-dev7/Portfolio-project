import Card from '../../component/Card';
import styles from './_portPortfolio.module.scss';
import PortText from '../../component/PortText';

const Portfolio = () => (
  <section className={styles.center}>
    <div className={styles.portfolio}>
      <div className={styles.row}>
        <PortText variant="portCardHeaderText">Portfolio</PortText>
        <PortText variant="portHeaderTextPCard">Work I Have Done</PortText>
        {/* <div className={styles.headText}>
          <h6>Portfolio</h6>
          <h2>Work I Have Done</h2>
        </div> */}
        <div className={styles.pFilter}>
          <ul>
            <li className={styles.selItem}>All</li>
            <li>Web Design</li>
            <li>Application</li>
            <li>Development</li>
          </ul>
        </div>
      </div>

      <div className={styles.item}>
        <Card variant="cardPort">
          <div className={styles.relativeP}>
            <img src="/image/portfolio/img-1.jpg" alt="" />
            <div className={styles.itemContent}>
              <Card variant="hoverPort">
                <div className={styles.hoverContext}>
                  <PortText variant="portHoverCardText">Application</PortText>
                  <span>
                    <i className="">Icon here</i>
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <Card variant="cardPort">
          <div className={styles.relativeP}>
            <img src="/image/portfolio/img-2.jpg" alt="" />
            <div className={styles.itemContent}>
              <Card variant="hoverPort">
                <div className={styles.hoverContext}>
                  <PortText variant="portHoverCardText">Application</PortText>
                  <span>
                    <i className="">Icon here</i>
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <Card variant="cardPort">
          <div className={styles.relativeP}>
            <img src="/image/portfolio/img-3.jpg" alt="" />
            <div className={styles.itemContent}>
              <Card variant="hoverPort">
                <div className={styles.hoverContext}>
                  <PortText variant="portHoverCardText">Application</PortText>
                  <span>
                    <i className="">Icon here</i>
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <Card variant="cardPort">
          <div className={styles.relativeP}>
            <img src="/image/portfolio/img-4.jpg" alt="" />
            <div className={styles.itemContent}>
              <Card variant="hoverPort">
                <div className={styles.hoverContext}>
                  <PortText variant="portHoverCardText">Application</PortText>
                  <span>
                    <i className="">Icon here</i>
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <Card variant="cardPort">
          <div className={styles.relativeP}>
            <img src="/image/portfolio/img-5.jpg" alt="" />
            <div className={styles.itemContent}>
              <Card variant="hoverPort">
                <div className={styles.hoverContext}>
                  <PortText variant="portHoverCardText">Application</PortText>
                  <span>
                    <i className="">Icon here</i>
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <Card variant="cardPort">
          <div className={styles.relativeP}>
            <img src="/image/portfolio/img-6.jpg" alt="" />
            <div className={styles.itemContent}>
              <Card variant="hoverPort">
                <div className={styles.hoverContext}>
                  <PortText variant="portHoverCardText">Application</PortText>
                  <span>
                    <i className="">Icon here</i>
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);
export default Portfolio;
