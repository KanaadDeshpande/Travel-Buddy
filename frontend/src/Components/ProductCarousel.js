import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';
import a from '../screens/landing/img/1st-big-item.jpg';

const ProductCarousel = () => {
	const dispatch = useDispatch();

	const productTopRated = useSelector((state) => state.productTopRated);
	let { loading, error, products } = productTopRated;
	loading = false;
	useEffect(() => {
		dispatch(listTopProducts());
	}, [dispatch]);

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant="danger">{error}</Message>
	) : (
		<Carousel pause="hover" className="bg-dark">
			{products.map((product) => (
				<Carousel.Item key={product.id}>
					<Link to={`/product/${product.id}`}>
						{/* <Image src={product.image} alt={product.name} fluid /> */}
						<Image
							src="images/alexa.jpg"
							alt={product.name}
							fluid
						/>
						<Carousel.Caption className="carousel-caption">
							<h2>{product.name}</h2>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default ProductCarousel;
