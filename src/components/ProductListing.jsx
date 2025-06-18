import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/soho-light/theme.css';
import ProductCard from './ProductCard';
import products from '../data/products.json';

const ProductListing = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-content-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            category={product.category}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        ))}

      </div>
    </>
  );
}

export default ProductListing;