import Image from 'next/image';
import classes from './IconButton.module.scss';

const IconButton = ({ icon, className, hideForMobile, ...otherProps }) => {
	const hide = hideForMobile ? classes.hide_for_mobile : '';
	return (
		<button className={`${classes.btn} ${className} ${hide}`} {...otherProps}>
			<Image src={icon} width={24} height={24} alt='Icon' />
		</button>
	);
};

export default IconButton;
