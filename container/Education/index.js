import React from 'react';
import PortText from '../../component/PortText';

const Education = () => (
  <div className="alignment">
    <div className="textAlign">
      <PortText variant="portHeadingCaption">Education & Skills</PortText>
      <PortText variant="portHeadingText" component="h1">
        What I Know
      </PortText>
    </div>
    <div className="leftbox">
      <div className="leftsubbox">
        <div className="leftTextAlign">
          <PortText variant="portTestimonialPText">2010-2012</PortText>
          <PortText variant="portTestimonialPText">Graphic Designer</PortText>
          <PortText variant="portTestimonialPText">International Design Institute</PortText>
        </div>
        <div className="leftTextAlign">
          <PortText variant="portTestimonialPText">2010-2012</PortText>
          <PortText variant="portTestimonialPText">Graphic Designer</PortText>
          <PortText variant="portTestimonialPText">International Design Institute</PortText>
        </div>
        <div className="leftTextAlign">
          <PortText variant="portTestimonialPText">2010-2012</PortText>
          <PortText variant="portTestimonialPText">Graphic Designer</PortText>
          <PortText variant="portTestimonialPText">International Design Institute</PortText>
        </div>
      </div>
      <div className="baralign">
        <div className="bars">
          <PortText variant="portEduPercent" component="h1">
            92%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption">HTML5</PortText>
            <div className="bar">
              <div className="ht1" />
            </div>
          </div>
        </div>
        <div className="bars">
          <PortText variant="portEduPercent" component="h1">
            80%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption">JAVASCRIPT</PortText>
            <div className="bar">
              <div className="ht2" />
            </div>
          </div>
        </div>
        <div className="bars">
          <PortText variant="portEduPercent" component="h1">
            72%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption">REACT</PortText>
            <div className="bar">
              <div className="ht3" />
            </div>
          </div>
        </div>
        <div className="bars">
          <PortText variant="portEduPercent" component="h1">
            85%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption">NEXTJS</PortText>
            <div className="bar">
              <div className="ht4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
