import styles from './Hero.module.css'
import Slider from "react-slick";
import SliderItem from './SliderItem';

export default function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "ease",
    arrows: false
  };

  return (
    <Slider {...settings} className={styles.Slider}>
      <SliderItem/>
      <SliderItem/>
      <SliderItem/>
    </Slider>
  )
}