/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

export const Slides = ({ slideIcons, slideIconNames, closeSection }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [translateValue, setTranslateValue] = useState(0);
	const [autoSlides, setAutoSlides] = useState(1);

	const goToPrevSlide = () => {
		const slide = setInterval(() => goToNextSlide(), 6000);
		if (currentIndex === 0) return;

		clearInterval(slide);
		setCurrentIndex(currentIndex - 1);
		setTranslateValue(translateValue + (() => slideWidth()))
		setAutoSlides(slide)
	};

	const goToNextSlide = () => {
		const slide = setInterval(() => goToNextSlide(), 6000);
		if (currentIndex === slideIcons.length - 1) {
			clearInterval(slide);
			setCurrentIndex(0);
			setTranslateValue(0);
			setAutoSlides(slide);
			return;
		}
		clearInterval(autoSlides);
		setCurrentIndex(currentIndex + 1);
		setTranslateValue(translateValue + -(() => slideWidth()))
		setAutoSlides(slide)
	};

	useEffect(() => {
		setAutoSlides(setInterval(() => goToNextSlide(), 6000))
	}, [])

	const slideWidth = () => {
		return document.querySelector('.slide').clientWidth;
	};

	const slide = (image) => {
		const styles = {
			backgroundImage: `url(${image})`,
			backgroundSize: '100px 100px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '50% 60%'
		};
		return <div className="slide" style={styles} />;
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
					{slideIcons.map((image, i) => slide(image))}
				</div>
			</div>
			<div className="align-arrows">
				<h1 className="hobby">{slideIconNames[currentIndex]}</h1>
				<div className="btn-container">
					<div className="arrowBack arrow" onClick={() => goToPrevSlide()} />
					<div className="close-section" onClick={() => closeSection()} />
					<div className="arrowNext arrow" onClick={() => goToNextSlide()} />
				</div>
			</div>
		</>
	);
}
