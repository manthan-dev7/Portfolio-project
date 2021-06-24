import Image from 'next/image';
// import Slider from 'react-slick';
import Button from '../../component/Button';
// import Card from '../../component/Card';
// import Data from './data';
import PortText from '../../component/PortText';
import { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';

// const settings = {
//   dots: false,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   pauseOnHover: true,
//   arrows: false,
//   initialSlide: 0,
//   mobileFirst: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 900,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

const Blog = ({ data }) => {
  const blogRef = useRef(null);
  const intervalRef = useRef();
  const cardRef = useRef([]);

  const startScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      // check current scrollposstion
      // get fullwidth
      // const cardWidth = cardRef.current[0].offsetWidth;
      const total = blogRef.current.scrollLeft + blogRef.current.offsetWidth;
      console.log(blogRef.current.scrollWidth);
      console.log(Math.round(total));
      if (Math.round(total) === blogRef.current.scrollWidth) {
        blogRef.current.scrollLeft = 0;
      } else {
        blogRef.current.scrollLeft += cardWidth;
      }
    }, 3000);
  }, []);

  const stopScroll = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startScroll();
    blogRef.current.addEventListener('mouseover', stopScroll);
    blogRef.current.addEventListener('mouseout', startScroll);
    return () => {
      blogRef.current.removeEventListener('mouseover', stopScroll);
      blogRef.current.removeEventListener('mouseout', startScroll);
    };
  }, [startScroll, stopScroll]);
  return (
    <section id="Blog" className="blogSpacing">
      <div className="textAlign">
        <PortText variant="portHeadingCaption">{data.Header.title}</PortText>
        <PortText variant="portHeadingText" component="h1">
          {data.Header.caption}
        </PortText>
      </div>
      <div className="cardSetBlog">
        {/* <div className='sliderShow}> */}
        <div id="sliderModal" className="sliderShow" ref={blogRef}>
          {data.blogs.map((x, i) => (
            <div
              key={x.id}
              className="cardBlog"
              ref={el => {
                cardRef.current[i] = el;
              }}>
              <Image
                src="/image/blog/img-2.jpg"
                className="portImgHover"
                height="250vh"
                width="360vw"
              />
              <div className="cardPadding">
                <PortText variant="portCardHeaderText">{x.title}</PortText>
                <PortText variant="portParaText" className="breakClass">
                  {x.description}
                </PortText>
                <div className="cardSideData">
                  <a href="/singleBlog">
                    <PortText variant="portCardReadText">Read More</PortText>
                  </a>
                  <PortText variant="portCardDateText">Date Here</PortText>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="cardBlog">
          <Image
            src="/image/blog/img-3.jpg"
            className="portImgHover"
            height="250vh"
            width="360vw"
          />
          <div className="cardPadding">
            <PortText variant="portCardHeaderText">
              The best of web design and web design inspiration
            </PortText>
            <PortText variant="portParaText">
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first ...
            </PortText>
            <div className="cardSideData">
              <PortText variant="portCardReadText">Read More</PortText>
              <PortText variant="portCardDateText">Date Here</PortText>
            </div>
          </div>
        </div>
        <div className="cardBlog">
          <Image
            src="/image/blog/img-4.jpg"
            className="portImgHover"
            height="250vh"
            width="360vw"
          />
          <div className="cardPadding">
            <PortText variant="portCardHeaderText">
              The best of web design and web design inspiration
            </PortText>
            <PortText variant="portParaText">
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first ...
            </PortText>
            <div className="cardSideData">
              <a href="/singleBlog">
                <PortText variant="portCardReadText">Read More</PortText>
              </a>
              <PortText variant="portCardDateText">Date Here</PortText>
            </div>
          </div>
        </div>
        <div className="cardBlog">
          <Image
            src="/image/blog/img-1.jpg"
            className="portImgHover"
            height="250vh"
            width="360vw"
          />
          <div className="cardPadding">
            <PortText variant="portCardHeaderText">
              The best of web design and web design inspiration
            </PortText>
            <PortText variant="portParaText">
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first ...
            </PortText>
            <div className="cardSideData">
              <a href="/singleBlog">
                <PortText variant="portCardReadText">Read More</PortText>
              </a>
              <PortText variant="portCardDateText">Date Here</PortText>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <div className="textAlign">
        <a href="/BlogPage">
          <Button>View More</Button>
        </a>
      </div>
    </section>
  );
};

export default Blog;
