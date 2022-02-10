import { FC, useContext } from 'react';
import { SearchContext } from '../../contexts/search';

type Product = {
  id: number;
  brand: string;
  description: string;
  price: number;
  image: string;
};

interface Props {
  product?: Product;
}

const ProductLayout: FC<Props> = ({ product }) => {
  const { search } = useContext(SearchContext);
  const isPalindrome = (text?: string) =>
    text === text?.split('').reverse().join('');
  const renderPrice = (price?: number) => {
    switch (isPalindrome(search)) {
      case true:
        let newPrice = (price as number) / 2;
        return newPrice.toLocaleString('es-CL', {
          style: 'currency',
          currency: 'CLP',
        });
      default:
        return price?.toLocaleString('es-CL', {
          style: 'currency',
          currency: 'CLP',
        });
    }
  };
  return (
    <div className="w-[55vw] md:w-[45vw] lg:w-[25vw] bg-white">
      <img
        src="https://via.placeholder.com/800x600"
        alt="product"
        className="h-[40%] w-full"
      />
      <div className="p-2">
        <div className="flex gap-2">
          <h3 className="text-sm">
            <b>{product?.brand}</b>
          </h3>
          <p className="text-sm text-gray-400">{product?.description}</p>
        </div>
        <div>
          <div className="flex items-center mt-3 mb-1 gap-2">
            <p className="text-xl">{renderPrice(product?.price)}</p>
            {isPalindrome(search) && (
              <p
                data-testid="discount-label"
                className="text-xs bg-red-500 rounded-full p-1 text-white"
              >
                50%
              </p>
            )}
          </div>
          {isPalindrome(search) && (
            <p className="text-xs line-through text-gray-400">
              {product?.price.toLocaleString('es-CL', {
                style: 'currency',
                currency: 'CLP',
              })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
