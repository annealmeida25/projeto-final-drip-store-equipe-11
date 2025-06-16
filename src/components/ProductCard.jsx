import { Card } from 'primereact/card';
const ProductCard = ({ image, category, name, price = 0, priceDiscount = null }) => {

    const header = (
        <img
            alt={name}
            src={image}
            style={{
                width: '292px',
                height: '321px',
                objectFit: 'cover',
            }}
        />
    );

    const footer = (
        <div className="flex flex-column gap-2">
            <h4 className="absolute top-0 border-solid border-round-md">50% off</h4>
            <span className="text-base font-light">{category}</span>
            <span className="text-xl font-bold">{name}</span>
            <div className="flex align-items-center gap-3">
                {priceDiscount !== null ? (
                    <>
                        <span className="text-xl line-through text-500">
                            R$ {price.toFixed(2)}
                        </span>
                        <span className="text-2xl font-bold text-900">
                            R$ {priceDiscount.toFixed(2)}
                        </span>
                    </>
                ) : (
                    <span className="text-2xl font-bold text-900">
                        R$ {price.toFixed(2)}
                    </span>
                )}
            </div>
        </div>
    );

    return (
        <Card
            header={header}
            footer={footer}
            className="w-19rem m-2 shadow-2 hover:shadow-4 transition-all transition-duration-500"
        />
    );
};

export default ProductCard;