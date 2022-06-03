/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect } from 'react';

type Props = {
	slideIcons: string[];
	slideIconNames: string[];
	closeSection: () => void;
}

export const Slides: FC<Props> = ({ slideIcons, slideIconNames, closeSection }) => {
	const [translateValue, setTranslateValue] = useState<number>(0);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [autoSlides, setAutoSlides] = useState<NodeJS.Timer>(setInterval(() => {}));
	const [slideWidth, setSlideWidth] = useState(0);

	const goToPrevSlide = () => {
		if (currentIndex === 0) {
			return;
		} else {
			clearInterval(autoSlides);
			setCurrentIndex(currentIndex - 1);
			setTranslateValue(translateValue + slideWidth);
			setAutoSlides(setInterval(() => goToNextSlide(), 6000));
		}
	};

	const goToNextSlide = () => {
		const slide = setInterval(() => goToNextSlide(), 6000);
		if (currentIndex === slideIcons.length - 1) {
			clearInterval(autoSlides);
			setCurrentIndex(0);
			setTranslateValue(0);
			setAutoSlides(slide);
		} else {
			clearInterval(autoSlides);
			setCurrentIndex(currentIndex + 1);
			setTranslateValue(translateValue + -(slideWidth))
			setAutoSlides(slide)
		}
	};

	useEffect(() => {		
		setSlideWidth(document.querySelector('.slide')?.clientWidth || 0)

		return () => {
			setSlideWidth(0);
		}
	}, [document.querySelector('.slide')])

	useEffect(() => {
		const slideInterval = setInterval(() => goToNextSlide(), 6000)
		setAutoSlides(slideInterval)

		return () => {
			setAutoSlides(setInterval(() => {}))
			clearInterval(autoSlides);
		};
	}, [])

	const slide = (image: string, i: number) => {
		const styles = {
			backgroundImage: `url(${image})`,
			backgroundSize: '100px 100px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '50% 60%'
		};
		return <div className="slide" key={i} style={styles} />;
	};

	return (
		<>
			<div className="slider">
				<div
					className="slider-wrapper"
					style={{
						transform: `translateX(${translateValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}>
					{slideIcons.map((image: string, i: number) => slide(image, i))}
				</div>
			</div>
			<div className="align-arrows">
				<h1 className="hobby">{slideIconNames[currentIndex]}</h1>
				<div className="btn-container">
					<div className="arrowBack arrow" onClick={() => goToPrevSlide()} />
					<button className="close-section" onClick={() => closeSection()} />
					<div className="arrowNext arrow" onClick={() => goToNextSlide()} />
				</div>
			</div>
		</>
	);
}

// const Slide = ({ image }: string) => {
// 	const styles = {
// 		backgroundImage: `url(${image})`,
// 		backgroundSize: '100px 100px',
// 		backgroundRepeat: 'no-repeat',
// 		backgroundPosition: '50% 60%'
// 	};
// 	return <div className="slide" style={styles} />;
// };
