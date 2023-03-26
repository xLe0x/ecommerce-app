import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import Container from "./components/Container";
import Product from "./components/Product";

function App() {
  return (
    <main>
      <Container classes="flex items-stretch justify-evenly max-sm:flex-col">
        <aside className="flex flex-col gap-y-6 border-r-[1px] max-sm:hidden border-r-black pt-4 pr-4">
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
        </aside>
        <div className="rounded flex items-center justify-evenly p-10 mx-8 mt-4 bg-black text-white max-sm:w-full max-sm:flex-col max-sm:mx-0">
          <div className="text">
            <div className="flex items-center gap-4 mb-8">
              <img src={"/apple.png"} alt="apple-logo" width={40} height={40} />
              <p>iPhone 14 series</p>
            </div>
            <div className="text-5xl leading-normal font-bold mb-8 max-sm:text-2xl max-sm:mb-2">
              <p>
                Up to 10% <br /> off Voucher
              </p>
            </div>
            <div className="link">
              <a href="#" className="underline">
                Shop Now ={">"}
              </a>
            </div>
          </div>
          <div className="image max-sm:mt-8">
            <img src={"/hero.png"} alt="hero image" width={450} height={450} />
          </div>
        </div>
      </Container>
      <div className="sales mt-32 mb-16">
        <Container classes="">
          <div className="todays flex items-center gap-x-4 mb-4">
            <div className="px-3 py-5 rounded bg-red-500"></div>
            <h2 className="text-2xl font-semibold text-red-500">Today's</h2>
          </div>
          <h4 className="sales-header font-bold text-3xl">Flash Sales</h4>
          <Swiper
            className="mySwiper"
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            controller={{ inverse: true }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
          >
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
          </Swiper>
          <div className="products-btn my-12 grid place-content-center">
            <button className="px-6 py-3 bg-red-500 rounded text-white">
              View All Products
            </button>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default App;
