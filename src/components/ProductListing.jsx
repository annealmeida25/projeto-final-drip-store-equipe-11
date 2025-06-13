import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/soho-light/theme.css';
import ProductCard from './ProductCard';


const ProductListing = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
      <ProductCard
        image="https://i.zst.com.br/thumbs/12/3d/17/1273029423.jpg"
        category={"Tênis"}
        name="Nomad XYZ"
        price={100}
        priceDiscount={50}
      />
       <ProductCard
        image="https://i.zst.com.br/thumbs/12/3d/17/1273029423.jpg"
        category={"Tênis"}
        name="Nomad XYZ"
        price={100}
        priceDiscount={50}
      />
       <ProductCard
        image="https://i.zst.com.br/thumbs/12/3d/17/1273029423.jpg"
        category={"Tênis"}
        name="Nomad XYZ"
        price={100}
        priceDiscount={50}
      />
       <ProductCard
        image="https://i.zst.com.br/thumbs/12/3d/17/1273029423.jpg"
        category={"Tênis"}
        name="Nomad XYZ"
        price={100}
        priceDiscount={50}
      />
       <ProductCard
        image="https://i.zst.com.br/thumbs/12/3d/17/1273029423.jpg"
        category={"Tênis"}
        name="Nomad XYZ"
        price={100}
        priceDiscount={50}
      />
      </div>
    </>
  );
}

export default ProductListing;