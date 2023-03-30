import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Navbar() {
  const cartCount = useSelector((state: any) => state.cart.length);

  return (
    <>
      <div className="upper-offer flex justify-between items-center bg-black text-white p-4 max-sm:p-2">
        <Container classes="flex place-content-center">
          <div className="flex gap-2 max-sm:flex-col max-sm:text-center">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a href="#" className="underline">
              Shop Now
            </a>
          </div>
        </Container>
      </div>
      <Container classes="border-b-[1px] border-b-black">
        <nav className="flex items-center justify-between my-4">
          <div className="logo">
            <Link to={"/"} className="text-2xl font-bold cursor-pointer">
              Exclusive
            </Link>
          </div>
          <div className="links max-md:hidden">
            <ul className="flex items-center justify-between gap-4">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <Link to={"/register"}>Sign Up</Link>
              </li>
              <li className=" px-2 py-1 rounded">
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <div className="search relative max-sm:hidden">
              <input
                type="text"
                placeholder="what are you looking for?"
                className="bg-slate-100 text-stone-900 px-1 py-1 rounded focus-within:outline-none"
              />
              <img
                src={"/Vector.svg"}
                alt="search-icon"
                className="absolute top-1 right-1 mx-1"
                width={20}
                height={20}
              />
            </div>
            <div className="flex gap-4">
              <img
                src={"/Wishlist.svg"}
                alt="wishlist-icon"
                width={30}
                height={30}
              />
              <Link to={"/cart"} className="cart relative">
                {cartCount > 0 && (
                  <p className="bg-red-500 text-white w-6 h-6 rounded-full absolute -top-3 -right-3 text-center">
                    {cartCount}
                  </p>
                )}
                <img
                  src={"/Cart1.svg"}
                  alt="cart-icon"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
}
