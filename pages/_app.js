import Document, { Head, Html, Main, NextScript } from 'next/document';
import Layout from '../components/Layout/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
