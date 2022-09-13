import classes from './Container.module.scss';

const Container = ({ children, className, ...otherProps }) => {
	return (
		<div className={`${classes.container} ${className}`} {...otherProps}>
			{children}
		</div>
	);
};

export default Container;
