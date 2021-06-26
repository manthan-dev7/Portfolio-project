import PortText from '../../component/PortText';
import Button from '../../component/Button';
import Code from '../../public/svg/code-working-outline.svg';
import Create from '../../public/svg/create-outline.svg';
import Laptop from '../../public/svg/laptop-outline.svg';
import Phone from '../../public/svg/phone-portrait-outline.svg';
import Rocket from '../../public/svg/rocket-outline.svg';
import Help from '../../public/svg/help-buoy.svg';

const Services = () => (
  <div className="Service">
    <div>
      <PortText variant="portHeadingCaption" component="h4">
        SERVICES
      </PortText>
      <PortText variant="portHeadingText" component="h1">
        WHAT I CAN DO
      </PortText>
    </div>
    {/* 6 service cards */}

    {/* r1 c1 */}
    <div className="mainbox">
      <div className="box">
        <Button variant="portServiceButton">
          <Laptop height={35} width={35} />
        </Button>
        <PortText variant="portServiceSubHeadingText">
          <b> WEB DESIGN</b>
        </PortText>
        <PortText variant="portParaText" component="p">
          Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text
          ever.
        </PortText>
      </div>

      {/* r1 c2 */}
      <div className="box">
        <Button variant="portServiceButton">
          <Code height={35} width={35} />
        </Button>
        <PortText variant="portServiceSubHeadingText">
          <b> WEB DEVELOPMENT</b>
        </PortText>
        <PortText variant="portParaText" component="p">
          Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text
          ever.
        </PortText>
      </div>

      {/* r1 c3 */}
      <div className="box">
        <Button variant="portServiceButton">
          <Phone height={35} width={35} />
        </Button>
        <PortText variant="portServiceSubHeadingText">
          <b>RESPONSIVE DESIGN</b>
        </PortText>
        <PortText variant="portParaText" component="p">
          Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text
          ever.
        </PortText>
      </div>

      {/* r2 c1 */}
      <div className="box">
        <Button variant="portServiceButton">
          <Rocket height={35} width={35} />
        </Button>
        <PortText variant="portServiceSubHeadingText">
          <b> BRANDING IDENTITY</b>
        </PortText>
        <PortText variant="portParaText" component="p">
          Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text
          ever.
        </PortText>
      </div>

      {/* r2 c2 */}
      <div className="box">
        <Button variant="portServiceButton">
          <Create height={35} width={35} />
        </Button>
        <PortText variant="portServiceSubHeadingText">
          <b> CREATIVE DESIGN </b>
        </PortText>
        <PortText variant="portParaText" component="p">
          Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text
          ever.
        </PortText>
      </div>

      {/* r2 c3 */}
      <div className="box">
        <Button variant="portServiceButton">
          <Help height={35} width={35} />
        </Button>
        <PortText variant="portServiceSubHeadingText">
          <b> SUPPORT </b>
        </PortText>
        <PortText variant="portParaText" component="p">
          Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text
          ever.
        </PortText>
      </div>
    </div>
  </div>
);

export default Services;
