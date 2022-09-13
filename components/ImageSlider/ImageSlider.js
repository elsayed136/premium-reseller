import Image from 'next/image';
import { useState } from 'react';
import ArrowLeft from '../../assets/imgs/arrow-left@2x.png';
import ArrowRight from '../../assets/imgs/arrow-right@2x.png';
import Container from '../Container/Container';
import Dot from '../Dot/Dot';
import IconButton from '../IconButton/IconButton';
import classes from './ImageSlider.module.scss';

const ImageSlider = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const count = slides.length - 1;

	const nextSlideHandler = () => {
		setCurrentSlide(prevStat => (currentSlide < count ? prevStat + 1 : 0));
	};

	const prevSlideHandler = () => {
		setCurrentSlide(prevStat => (currentSlide <= 0 ? count : prevStat - 1));
	};

	const goToSlideHandler = index => setCurrentSlide(index);

	return (
		<div className={classes.slider}>
			<Container style={{ position: 'relative' }}>
				<div className={classes.slide}>
					<Image
						src={slides[currentSlide].img}
						width={1920}
						height={494}
						layout='responsive'
						priority={true}
						as='image'
						alt='Iphone mobile phone'
					/>
				</div>
				<IconButton
					icon={ArrowLeft}
					className={classes.slider__next}
					onClick={prevSlideHandler}
					hideForMobile
				/>
				<IconButton
					icon={ArrowRight}
					className={classes.slider__prev}
					onClick={nextSlideHandler}
					hideForMobile
				/>
				<div className={classes.dots}>
					{slides.map((_, index) => (
						<Dot
							key={index}
							fill={currentSlide === index ? true : false}
							onClick={() => goToSlideHandler(index)}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default ImageSlider;
