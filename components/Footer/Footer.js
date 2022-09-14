import Image from 'next/image';
import F1 from '../../assets/imgs/footer_1.png';
import F2 from '../../assets/imgs/footer_2.png';
import F3 from '../../assets/imgs/footer_3.png';
import F4 from '../../assets/imgs/footer_4.png';
import Container from '../Container/Container';
import classes from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={classes.footer}>
			<Container>
				<div className={classes.footer__feats}>
					<div className={classes.footer__feat}>
						<Image src={F1} alt='Premium Reseller' />
					</div>
					<div className={classes.footer__feat}>
						<Image src={F2} alt='Authorised Reseller' />
					</div>
					<div className={classes.footer__feat}>
						<Image src={F3} alt='Authorised Service Provider' />
					</div>
					<div className={classes.footer__feat}>
						<Image src={F4} alt='Solution Expert Education' />
					</div>
				</div>
				<p className={classes.copyright}>
					Copyright &copy; 2022 - All rights reserved
				</p>
			</Container>
		</div>
	);
};

export default Footer;
