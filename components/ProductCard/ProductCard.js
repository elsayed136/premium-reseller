import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
	const router = useRouter();

	const clickHandler = () => router.push(product.id);

	return (
		<div className={classes.product} onClick={clickHandler}>
			<div className={classes.product__img}>
				<Image
					src={product.img[0]}
					width={220}
					height={220}
					layout='responsive'
				/>
			</div>
			<p className={classes.product__title}>{product.name}</p>
			<p className={classes.product__price}>
				{product.price !== product.priceAfterdiscount && (
					<strong className={classes.product__discount}>
						${product.price.toFixed(2)}
					</strong>
				)}

				<strong
					className={`${
						product.price !== product.priceAfterdiscount &&
						classes.product__price_old
					}`}
				>
					${product.price.toFixed(2)}
				</strong>
			</p>
			<span
				className={`${classes.available} ${
					product.inStock ? classes.in_stoke : classes.out_stoke
				}`}
			>
				{product.inStock ? 'In Stock' : 'Out of Stock'}
			</span>
		</div>
	);
};

export default ProductCard;
