import React from 'react';
import classes from './TitleAndValue.module.scss';

const TitleAndValue = ({ title, price, colorName, colorValue }) => {
	return (
		<>
			{title && <p className={classes.title}>{title}</p>}
			{price && <p className={classes.price}>{price}</p>}
			{colorName && <p className={classes.color_name}>{colorName}</p>}
			{colorValue && (
				<p
					className={classes.color_value}
					style={{ backgroundColor: `${colorValue}` }}
				></p>
			)}
		</>
	);
};
export default TitleAndValue;
