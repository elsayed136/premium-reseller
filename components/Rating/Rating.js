import Image from 'next/image';
import StarEmpty from '../../assets/imgs/star-empty.png';
import Star from '../../assets/imgs/star.png';
import classes from './Rating.module.scss';

const Rating = ({ numberOfStars, numberOfReviews }) => {
	return (
		<div className={classes.rating}>
			<div className={classes.stars}>
				{Array.from({ length: 5 }, (v, i) => i).map(v =>
					v < numberOfStars ? (
						<Image src={Star} width={17} height={16} />
					) : (
						<Image src={StarEmpty} width={17} height={16} />
					)
				)}
			</div>
			<span className={classes.reviews}>({numberOfReviews} Reviews)</span>
		</div>
	);
};

export default Rating;
