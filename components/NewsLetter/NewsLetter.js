import React from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './NewsLetter.module.scss';

const NewsLetter = () => {
	return (
		<div className={classes.news_letter}>
			<Container>
				<p className={classes.title}>
					Subscribe our newsletter to be notified when it’ll be live.
				</p>
				<input type='email' placeholder='Email address' />
				<Button className={classes.btn_left}>Subscribe</Button>
			</Container>
		</div>
	);
};

export default NewsLetter;
