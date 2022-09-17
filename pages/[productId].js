import React from 'react';
import Container from '../components/Container/Container';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import ProductsPreview from '../components/ProductsPreview/ProductsPreview';

const ProductPage = ({ products, product }) => {
	return (
		<div>
			<Container>
				<ProductDetails product={product} />
				<ProductsPreview
					products={products}
					title='Explore Products'
					hideForDesktop
				/>
			</Container>
		</div>
	);
};

export default ProductPage;

export async function getStaticProps(ctx) {
	const { params } = ctx;
	const [productRes, productsRes] = await Promise.all([
		fetch(
			`https://63189f2cf6b281877c71eab0.mockapi.io/products/${params.productId}`
		),
		fetch(`https://63189f2cf6b281877c71eab0.mockapi.io/products`),
	]);

	const [product, products] = await Promise.all([
		productRes.json(),
		productsRes.json(),
	]);

	return {
		props: {
			product,
			products,
		},
	};
}

export async function getStaticPaths() {
	const productsRes = await fetch(
		`https://63189f2cf6b281877c71eab0.mockapi.io/products`
	);
	const products = await productsRes.json();

	const paths = products.map(product => ({
		params: { productId: product.id },
	}));

	return {
		paths,
		fallback: false,
	};
}
