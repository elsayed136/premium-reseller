import ImageSlider from '../components/ImageSlider/ImageSlider';
import ProductsPreview from '../components/ProductsPreview/ProductsPreview';

export default function HomePage({ slides, products }) {
	return (
		<>
			<ImageSlider slides={slides} />
			<ProductsPreview products={products} />
		</>
	);
}

export async function getStaticProps() {
	const [slidesRes, productsRes] = await Promise.all([
		fetch(`https://63189f2cf6b281877c71eab0.mockapi.io/slider`),
		fetch(`https://63189f2cf6b281877c71eab0.mockapi.io/products`),
	]);

	const [slides, products] = await Promise.all([
		slidesRes.json(),
		productsRes.json(),
	]);

	return {
		props: {
			slides,
			products,
		},
	};
}
