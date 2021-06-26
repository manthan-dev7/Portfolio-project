/* eslint-disable jsx-a11y/alt-text */
// import Image from 'next/image';
import Button from '../../component/Button';
import PortText from '../../component/PortText';
import Github from '../../public/svg/logo-github.svg';
import Linkedin from '../../public/svg/linkedin.svg';
import Twitter from '../../public/svg/logo-twitter.svg';
import Gmail from '../../public/svg/mail.svg';

const About = () => (
  <div className="portAbtMain">
    {/* <div > */}
    <img src="/image/portfolio/about-img.jpeg" className="abtImage" />
    {/* </div> */}
    <div className="portTextDiv">
      <PortText variant="portHeadingText">ABOUT ME.</PortText>
      <PortText variant="portAboutCaption1">UI/UX Designer & Web Developer</PortText>
      <PortText variant="portParaAboutText">
        I'm
        <b> Manthan Thakkar </b>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to specimen book.
      </PortText>
      <PortText variant="portParaAboutText">
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English.
      </PortText>
      <div className="portSocial">
        <a href="https://github.com/manthan-dev7" target="_blank">
          <Button className="portSocialBtn" variant="portSocialButton">
            <Github className="btnHover" height={18} width={18} />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/manthan-thakkar-b4a114171/" target="_blank">
          <Button className="portSocialBtn" variant="portSocialButton">
            <Linkedin className="btnHover" height={18} width={18} />
          </Button>
        </a>
        <a href="https://twitter.com/ThakkarManthan" target="_blank">
          <Button className="portSocialBtn" variant="portSocialButton">
            <Twitter className="btnHover" height={18} width={18} />
          </Button>
        </a>
        <a href="mailto:manthanthakkar.dev@gmail.com" target="_blank">
          <Button className="portSocialBtn" variant="portSocialButton">
            <Gmail className="btnHover" height={18} width={18} />
          </Button>
        </a>
      </div>

      <a href="/asets/cv.pdf" target="_blank">
        <Button>Download cv</Button>
      </a>
    </div>
  </div>
);

export default About;
