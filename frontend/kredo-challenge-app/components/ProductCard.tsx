import * as models from '../models';

export default function ProductCard({item}) {
    const product: models.Product = item;
	return (
        <div className='card'>
            <div className="card-body">
                <h5 className="card-title text-secondary">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Price: ${product.price}</h6>
                <p className="card-text text-secondary">{product.description}</p>
            </div>
        </div>
	);
}