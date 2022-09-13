import MainNavigation from '../MainNavigation/MainNavigation';
import classes from './Layout.module.scss';

function Layout(props) {
	return (
		<>
			<MainNavigation />
			<main>{props.children}</main>
		</>
	);
}

export default Layout;
