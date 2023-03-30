import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/slices/cartSlice";

export default function Product(props: {
  ProductImg: string;
  ProductTitle: string;
  ProductPrice: number;
  ProductID: number;
  ProductObject: object;
}) {
  const dispatch = useDispatch();

  const [added, setAdded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAdded(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [added]);

  return (
    <div className="mt-12 select-none">
      <div className="rounded max-w-xs flex p-2 relative group">
        {added && (
          <p className="absolute transition-all ease-in-out inset-0 w-full h-full bg-slate-900 text-white rounded text-2xl font-medium grid place-content-center">
            Added
          </p>
        )}
        <div className="discount px-3 py-1 bg-red-500 text-white rounded w-fit h-fit">
          <p>40%</p>
        </div>
        <div className="img min-h-full max-h-full">
          <img src={props.ProductImg} alt="" className="max-h-80" />
        </div>
        <div className="icons absolute top-2 right-4 flex flex-col gap-y-4">
          <img src="/Wishlist.svg" alt="wishlist-img" />
          <img src="/Eye.svg" alt="eye-img" />
        </div>
        <div className="bg-[#111] text-white text-center absolute left-0 bottom-0 opacity-0 group-hover:opacity-100 max-sm:opacity-100 transition-opacity ease-linear w-full rounded-b p-1">
          <button
            className="text-lg font-semibold"
            onClick={() => {
              dispatch(
                addToCart(JSON.parse(JSON.stringify(props.ProductObject)))
              );
              setAdded(true);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="decs mt-4 ">
        <p className="font-medium text-lg">{props.ProductTitle}</p>
        <div className="price flex gap-4 mt-2">
          <p className="current text-red-500 font-medium">
            {props.ProductPrice}
          </p>
          <p className="previous line-through opacity-50">$160</p>
        </div>
        <div className="rating mt-2">
          ⭐ ⭐ ⭐ ⭐ ⭐ <span className="opacity-50">(88)</span>
        </div>
      </div>
    </div>
  );
}
