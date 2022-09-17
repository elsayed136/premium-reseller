import ArrowLeft from '../../assets/imgs/arrow-left@2x.png';
import ArrowRight from '../../assets/imgs/arrow-right@2x.png';
import Container from '../Container/Container';
import Dot from '../Dot/Dot';
import IconButton from '../IconButton/IconButton';
import ProductCard from '../ProductCard/ProductCard';
import classes from './ProductsPreview.module.scss';

const ProductsPreview = ({ products, title, hideForDesktop }) => {
	return (
		<div className={classes.products_preview}>
			<Container>
				{title && (
					<h1
						className={`${classes.title} ${
							hideForDesktop && classes.hide_for_desktop
						}`}
					>
						{title}
					</h1>
				)}
				<div className={classes.preview}>
					{products
						.filter((_, i) => i < 4)
						.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
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
