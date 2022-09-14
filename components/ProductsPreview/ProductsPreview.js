import Image from 'next/image';
import ArrowLeft from '../../assets/imgs/arrow-left@2x.png';
import ArrowRight from '../../assets/imgs/arrow-right@2x.png';
import Container from '../Container/Container';
import Dot from '../Dot/Dot';
import IconButton from '../IconButton/IconButton';
import classes from './ProductsPreview.module.scss';

const ProductsPreview = ({ products }) => {
	return (
		<div className={classes.products_preview}>
			<Container>
				<h1 className={classes.title}>Explore Products</h1>
				<div className={classes.preview}>
					<div className='product'>
						<div
							className='prodcut__img'
							style={{ position: 'relative', width: '220px', height: '220px' }}
						>
							<Image src={products[0].img[0]} layout='fill' />
						</div>
						<p className='product__title'>{products[0].name}</p>
						<p>
							<strong>${products[0].price}</strong>
						</p>
						<span className='product__price'>
							{products[0].inStock ? 'In Stock' : 'Out of Stock'}
						</span>
					</div>
				</div>
				<div className={classes.pagination}>
					<IconButton icon={ArrowLeft} />
					<div className={classes.dots}>
						<Dot fill />
						<Dot />
						<Dot />
						<Dot />
					</div>
					<IconButton icon={ArrowRight} />
				</div>
			</Container>
		</div>
	);
};

export default ProductsPreview;
