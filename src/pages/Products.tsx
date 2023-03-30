import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getProducts } from "../rtk/slices/productsSlice";

interface Product {
  image: string;
  price: number;
  title: string;
  id: number;
}

export default function Products() {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 mx-16 my-8 gap-16">
      {products ? (
        products.map((product: Product) => {
          return (
            <Product
              ProductID={product.id}
              ProductImg={product.image}
              ProductPrice={product.price}
              ProductTitle={product.title}
              key={product.id}
              ProductObject={product}
            />
          );
        })
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
}
