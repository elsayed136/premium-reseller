import classes from './CardInput.module.scss';

const CardInput = ({ children, name }) => {
	return (
		<div className={classes.card_input}>
			<input className={classes.card_input_radio} type='radio' name={name} />
			<span className={classes.card_input_lable}>{children}</span>
		</div>
	);
};

export default CardInput;
