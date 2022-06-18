import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { boolean, number, text } from '@storybook/addon-knobs';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Props = {
	slideIcons: string[];
	slideIconNames: string[];
	closeSection: () => void;
}

export const CarouselSlides: FC<Props> = ({ slideIcons, slideIconNames, closeSection }) => {
  const tooglesGroupId = 'Toggles';
  const valuesGroupId = 'Values';
  const mainGroupId = 'Main';

  const getConfigurableProps = () => ({
    showArrows: boolean('showArrows', true, tooglesGroupId),
    showStatus: boolean('showStatus', false, tooglesGroupId),
    showIndicators: boolean('showIndicators', false, tooglesGroupId),
    infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
    showThumbs: boolean('showThumbs', false, tooglesGroupId),
    useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    autoPlay: boolean('autoPlay', true, tooglesGroupId),
    stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
    swipeable: boolean('swipeable', true, tooglesGroupId),
    dynamicHeight: boolean('dynamicHeight', false, tooglesGroupId),
    emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    autoFocus: boolean('autoFocus', false, tooglesGroupId),
    thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    interval: number('interval', 6000, {}, valuesGroupId),
    transitionTime: number('transitionTime', 1000, {}, valuesGroupId),
    swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
    ariaLabel: text('ariaLabel', '')
  });

  const carouselDiv = (image: string, i: number) => {
		const styles = {
			backgroundImage: `url(${image})`,
			backgroundSize: '100px 100px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '50% 60%',
      marginBottom: '70px'
		};
		return (
      <div className="carouselDiv">
        <div className="slide" key={i} style={styles} />
        <h1 className="hobby">{slideIconNames[i]}</h1>
      </div>
    );
	};

	return (
    <div className="carouselContainer">
    <div className="browserCarousel">
      <Carousel
        centerMode
        centerSlidePercentage={number('centerSlidePercentage', 40, {}, mainGroupId)}
        {...getConfigurableProps()}
      >
        {slideIcons.map((image: string, i: number) => carouselDiv(image, i))}
      </Carousel>
    </div>
    <div className="mobileCarousel">
      <Carousel centerMode {...getConfigurableProps()}>
        {slideIcons.map((image: string, i: number) => carouselDiv(image, i))}
      </Carousel>
    </div>
  </div>
	);
}
