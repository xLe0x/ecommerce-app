import Container from "./Container";

export default function Footer() {
  return (
    <div className="bg-black text-white mt-8">
      <Container classes="grid grid-cols-4 py-12 px-8 max-sm:grid-cols-1 gap-8">
        <div className="one flex flex-col gap-2">
          <h5 className="text-2xl font-semibold">Exclusive</h5>
          <p className="font-semibold">Subscribe</p>
          <div className="sub relative mt-4 flex flex-col gap-4">
            <p>Get 10% off your first order</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-48 px-6 py-2 bg-black border-white border-2 rounded focus:outline-none"
            ></input>
            <img
              src="/icon-send.png"
              alt=""
              className="absolute bottom-3 right-24 max-sm:hidden w-5"
            />
          </div>
        </div>
        <div className="two flex flex-col gap-2">
          <h5 className="text-2xl font-semibold">Support</h5>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>email@email.com</p>
          <p>+73628-28693-28338</p>
        </div>
        <div className="three flex flex-col gap-2">
          <h5 className="text-2xl font-semibold">Account</h5>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="four flex flex-col gap-2">
          <h5 className="text-2xl  font-semibold">Quick Link</h5>
          <p>Privacy</p>
          <p>Terms of use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </Container>
      <div className="copyright text-center mt-8 pb-4 opacity-50">
        <p>
          Copyright Ammar Mo. Saber {new Date().getFullYear()}. All right
          reserved
        </p>
      </div>
    </div>
  );
}
