import Container from "./Container";

export default function Navbar() {
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
            <h1 className="text-2xl font-bold">Exclusive</h1>
          </div>
          <div className="links max-sm:hidden">
            <ul className="flex items-center justify-between gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
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
              <img src={"/Cart1.svg"} alt="cart-icon" width={30} height={30} />
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
}
