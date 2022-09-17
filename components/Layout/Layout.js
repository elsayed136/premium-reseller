import Head from 'next/head';
import Footer from '../Footer/Footer';
import MainNavigation from '../MainNavigation/MainNavigation';
import classes from './Layout.module.scss';

function Layout(props) {
	return (
		<>
			<Head>
				<title>Premium Resller</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<MainNavigation />
			<main>{props.children}</main>
			<Footer />
		</>
	);
}

export default Layout;
