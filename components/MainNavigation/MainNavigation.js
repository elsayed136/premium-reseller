import Image from 'next/image';
import Link from 'next/link';
import BagIcon from '../../assets/imgs/bag@2x.png';
import Logo from '../../assets/imgs/logo@2x.png';
import MenuIcon from '../../assets/imgs/menu@2x.png';
import ProfileIcon from '../../assets/imgs/profile@2x.png';
import SearchIcon from '../../assets/imgs/search@2x.png';
import Container from '../Container/Container';
import classes from './MainNavigation.module.scss';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<Container className={classes.header__flex}>
				<div className={classes.header__logo}>
					<Image src={Logo} alt='Apple Logo' />
				</div>

				<button className={classes.navbar__toggler} type='button'>
					<Image src={MenuIcon} />
				</button>

				<nav className={classes.navbar}>
					<ul className={classes.navbar__menu}>
						<li>
							<Link href=''>Mac</Link>
						</li>
						<li>
							<Link href=''>iPad</Link>
						</li>
						<li>
							<Link href=''>iPhone</Link>
						</li>
						<li>
							<Link href=''>Watch</Link>
						</li>
						<li>
							<Link href=''>TV</Link>
						</li>
						<li>
							<Link href=''>Accessories</Link>
						</li>
						<li>
							<Link href=''>Offers</Link>
						</li>
					</ul>
					<ul className={classes.navbar__menu}>
						<li>
							<Link href=''>Support</Link>
						</li>
						<li>
							<Link href=''>Services</Link>
						</li>
						<li>
							<Link href=''>Locations</Link>
						</li>
					</ul>
				</nav>
				<div className={classes.header__icons}>
					<Image src={SearchIcon} width={24} height={24} />
					<Image src={ProfileIcon} width={24} height={24} />
					<Image src={BagIcon} width={24} height={24} />
				</div>
			</Container>
		</header>
	);
}

export default MainNavigation;
