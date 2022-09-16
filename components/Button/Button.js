import classes from './Button.module.scss';

const Button = ({ children, className, ...otherProps }) => {
	return (
		<button className={`${classes.btn} ${className}`} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
