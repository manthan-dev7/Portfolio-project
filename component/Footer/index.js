import PortText from '../PortText';
import style from './portFooter.module.scss';

const Footer = () => (
  <div className={style.main}>
    <div className={style.footerMain}>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">Manthan T</PortText>
        <PortText variant="portContactDetailText">lorem Ipsum donor sit.</PortText>
      </div>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">Phone No.</PortText>
        <PortText variant="portContactDetailText">(+91) 7359560659</PortText>
      </div>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">Email</PortText>
        <PortText variant="portContactDetailText">manthanthakkar@gmail.com</PortText>
      </div>
      <div className={style.footerText}>
        <PortText variant="portContactHeadingText">Address</PortText>
        <PortText variant="portContactDetailText">123 lorem ipsum New York, USA.</PortText>
      </div>
    </div>
    <div className={style.footText}>
      <div className={style.footerLine} />
      <PortText variant="portFooterText">
        Kalvin © 2018. All Right Reserved, Designed By Cosmos-Themes.
      </PortText>
    </div>
  </div>
);

export default Footer;
