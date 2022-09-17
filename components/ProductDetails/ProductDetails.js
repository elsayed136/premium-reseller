import Image from 'next/image';
import CIB_Logo from '../../assets/imgs/CIB_Logo.png';
import HeartIcon from '../../assets/imgs/heart.png';
import ReturnIcon from '../../assets/imgs/return.png';
import ShippingIcon from '../../assets/imgs/shipping.png';
import Button from '../Button/Button';
import CardInput from '../CardInput/CardInput';
import Rating from '../Rating/Rating';
import TitleAndValue from '../TitleAndValue/TitleAndValue';
import classes from './ProductDetails.module.scss';

const ProductDetails = ({ product }) => {
	const {
		img,
		price,
		priceAfterdiscount,
		inStock,
		numberOfStars,
		numberOfReviews,
	} = product;

	const isInStock = inStock ? `${classes.active}` : '';

	const imgs = img.map((url, index) => (
		<Image key={index} src={url} width={80} height={80} />
	));
	return (
		<div className={classes.product_details}>
			<div className={classes.imgs_container}>
				<div className={classes.product_imgs}>{imgs}</div>
				<div className={classes.product_img}>
					<Image src={img[0]} width={531} height={531} />
				</div>
			</div>

			<div className={`${classes.details} ${isInStock}`}>
				<div className={classes.heart}>
					<Image src={HeartIcon} width={24} height={24} />
				</div>
				<span className={classes.brand}>apple</span>
				<h2 className={classes.title}>
					Apple - iPhone 13 Pro 5G 128GB - Sierra Blue (Verizon)
				</h2>
				<Rating
					numberOfStars={numberOfStars}
					numberOfReviews={numberOfReviews}
				/>
				<p className={classes.price}>
					<strong
						className={`${price !== priceAfterdiscount && classes.discount}`}
					>
						{new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD',
							maximumSignificantDigits: priceAfterdiscount.toString().length,
						}).format(priceAfterdiscount)}
					</strong>
				</p>

				<span
					className={`${classes.available} ${
						inStock ? classes.in_stoke : classes.out_stoke
					}`}
				>
					{inStock ? 'In Stock' : 'Out of Stock'}
				</span>

				<div className={classes.quantity_container}>
					<button
						className={`${classes.quantity_btn} ${classes.quantity_plus}`}
					></button>
					<span className={classes.quantity_value}>1</span>
					<button
						className={`${classes.quantity_btn} ${classes.quantity_minus}`}
					></button>
				</div>

				<div className={classes.card_input_container}>
					<div className={classes.card_input_row}>
						<CardInput name='insurance_type'>Full Price</CardInput>
						<CardInput name='insurance_type'>Installments</CardInput>
					</div>
					<div className={classes.card_input_row}>
						<CardInput name='bank'>
							<Image src={CIB_Logo} width={88} height={42} />
						</CardInput>
						<CardInput name='bank'>
							<Image src={CIB_Logo} width={88} height={42} />
						</CardInput>
						<CardInput name='bank'>
							<Image src={CIB_Logo} width={88} height={42} />
						</CardInput>
						<CardInput name='bank'>
							<Image src={CIB_Logo} width={88} height={42} />
						</CardInput>
					</div>

					<div className={classes.card_input_row}>
						<span className={classes.card_input_row_lable}>Memory</span>
						<CardInput name='memory'>
							<TitleAndValue title='128GB' price='$999.00' />
						</CardInput>
						<CardInput name='memory'>
							<TitleAndValue title='256GB' price='$999.00' />
						</CardInput>
						<CardInput name='memory'>
							<TitleAndValue title='512GB' price='$999.00' />
						</CardInput>
						<CardInput name='memory'>
							<TitleAndValue title='1TB' price='$999.00' />
						</CardInput>
					</div>
					<div className={classes.card_input_row}>
						<span className={classes.card_input_row_lable}>Color</span>
						<CardInput name='color'>
							<TitleAndValue colorName='Silver' colorValue='#EDEDED' />
						</CardInput>
						<CardInput name='color'>
							<TitleAndValue colorName='Sierra Blue' colorValue='#90BAD1' />
						</CardInput>
					</div>
					<div className={classes.card_input_row}>
						<span className={classes.card_input_row_lable}>Insurance</span>
						<CardInput name='insurance'>
							<TitleAndValue title='1 year' price='$99.00' />
						</CardInput>
						<CardInput name='insurance'>
							<TitleAndValue title='2 year' price='$159.00' />
						</CardInput>
					</div>
				</div>

				<Button className={classes.add_to_cart_btn}>Add to cart</Button>

				<div className={classes.shipping}>
					<div className={classes.shipping_feat}>
						<Image src={ShippingIcon} width={20} height={20} />
						Free shipping, arrives by Tue, Nov 23
					</div>
					<div className={classes.shipping_feat}>
						<Image src={ReturnIcon} width={20} height={20} />
						Free 10-day return window starts Dec 26th Details
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
