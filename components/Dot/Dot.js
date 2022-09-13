import classes from './Dot.module.scss';

const Dot = ({ fill = false, ...otherProps }) => {
	return (
		<button
			className={`${classes.dot} ${fill && classes.dot_fill}`}
			{...otherProps}
		></button>
	);
};

export default Dot;
