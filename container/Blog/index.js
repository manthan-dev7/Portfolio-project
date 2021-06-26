import Image from 'next/image';
import Button from '../../component/Button';
import Card from '../../component/Card';
import Data from './data';
import styles from './blog.module.scss';
import PortText from '../../component/PortText';

const Blog = ({ children, url }) => (
  //   <scroll>
  <div className={styles.cardSetBlog}>
    {Data.map(item => (
      <Card className={styles.cardBlog}>
        <Image src={item.image} variant="cardBlogImg" height="full" width="full" />
        <PortText variant="portCardHeaderText">{item.header}</PortText>
        <PortText variant="portParaText">{item.text}</PortText>
        <div className={styles.cardSideData}>
          <PortText variant="portCardReadText">Read More</PortText>
          <PortText variant="portCardDateText">Read More</PortText>
        </div>
      </Card>
    ))}
  </div>
  //   </scroll>
);

export default Blog;
