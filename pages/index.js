import ImageSlider from '../components/ImageSlider/ImageSlider';

export default function HomePage({ slides }) {
	return (
		<>
			<ImageSlider slides={slides} />
		</>
	);
}

export async function getStaticProps() {
	const response = await fetch(
		`https://63189f2cf6b281877c71eab0.mockapi.io/slider`
	);
	const slides = await response.json();

	return {
		props: {
			slides,
		},
	};
}
