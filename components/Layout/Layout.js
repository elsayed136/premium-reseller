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
				<meta name='description' content='Bit68 FrontEnd Task'></meta>
			</Head>
			<MainNavigation />
			<main>{props.children}</main>
			<Footer />
		</>
	);
}

export default Layout;
