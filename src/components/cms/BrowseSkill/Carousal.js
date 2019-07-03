import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import raspberrypi from '../../../images/raspberrypi.png';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
import './Carousal.css';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const SliderImage = styled.img`
  width: 70rem;
  height: 24rem;
  border: 5px solid #fff;
  display: block;
`;

const Carousal = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    // nextArrow: <ChevronRight color="primary"/>,
    // prevArrow: <ChevronLeft color="primary"/>,
    // nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />
    adaptiveHeight: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        <SliderImage src={raspberrypi} />
        <SliderImage src={raspberrypi} />
        <SliderImage src={raspberrypi} />
      </Slider>
    </Container>
  );
};

export default Carousal;
