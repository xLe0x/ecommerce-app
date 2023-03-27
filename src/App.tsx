import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

import Container from "./components/Container";
import Product from "./components/Product";
import Category from "./components/Category";

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
            <div className="text-5xl leading-normal font-bold mb-8 max-sm:text-3xl max-sm:mb-2">
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

      <div className="sales my-32">
        <Container classes="">
          <div className="todays flex items-center gap-x-4 mb-8">
            <div className="px-3 py-5 rounded bg-red-500"></div>
            <h2 className="text-2xl font-semibold text-red-500">Today's</h2>
          </div>
          <h4 className="sales-header font-bold text-4xl">Flash Sales</h4>
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
          <hr className="bg-gray-700 h-1 rounded" />
        </Container>
      </div>

      <div className="categories my-32">
        <Container classes="">
          <div className="todays flex items-center gap-x-4 mb-8">
            <div className="px-3 py-5 rounded bg-red-500"></div>
            <h2 className="text-2xl font-semibold text-red-500">Categories</h2>
          </div>
          <h4 className="sales-header font-bold text-4xl">
            Browse by Category
          </h4>
          <Swiper
            className="mySwiper mb-12"
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
          >
            <SwiperSlide>
              <Category />
            </SwiperSlide>
            <SwiperSlide>
              <Category />
            </SwiperSlide>
            <SwiperSlide>
              <Category />
            </SwiperSlide>
            <SwiperSlide>
              <Category />
            </SwiperSlide>
            <SwiperSlide>
              <Category />
            </SwiperSlide>
          </Swiper>
          <hr className="bg-gray-700 h-1 rounded" />
        </Container>
      </div>

      <div className="this-month my-32">
        <Container classes="">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="px-3 py-5 rounded bg-red-500"></div>
            <h2 className="text-2xl font-semibold text-red-500">This Month</h2>
          </div>
          <div className="header flex justify-between items-center">
            <h4 className="sales-header font-bold text-4xl">
              Best Selling Products
            </h4>
            <button className="px-10 py-4 rounded bg-red-500 text-white max-sm:hidden">
              View All
            </button>
          </div>
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
          <hr className="bg-gray-700 h-1 rounded" />
        </Container>
      </div>

      <div className="big-offer my-32 mx-2">
        <Container classes="flex max-sm:flex-col gap-4 bg-black items-center justify-around p-16 rounded group">
          <div className="text">
            <h4 className="header text-2xl text-emerald-300 mb-8 font-semibold">
              Categories
            </h4>
            <h4 className="title text-5xl text-white font-bold leading-normal">
              Enhance Your <br /> Music Experience
            </h4>
            <div className="bullets text-white flex gap-x-8 my-8">
              <div className="bullet pt-3 font-semibold bg-white text-black rounded-full w-20 h-20 text-center">
                <p className="font-bold text-xl">23</p>
                <p>Hours</p>
              </div>
              <div className="bullet pt-3 font-semibold bg-white text-black rounded-full w-20 h-20 text-center">
                <p className="font-bold text-xl">23</p>
                <p>Hours</p>
              </div>
              <div className="bullet pt-3 font-semibold bg-white text-black rounded-full w-20 h-20 text-center">
                <p className="font-bold text-xl">23</p>
                <p>Hours</p>
              </div>
              <div className="bullet pt-3 font-semibold bg-white text-black rounded-full w-20 h-20 text-center">
                <p className="font-bold text-xl">23</p>
                <p>Hours</p>
              </div>
            </div>
            <button className="buy-now-btn bg-emerald-400 text-white px-8 py-3 rounded">
              Buy Now!
            </button>
          </div>
          <div className="img blur-xl max-sm:blur-none transition duration-300 group-hover:blur-0">
            <img src="/boombox.png" alt="" />
          </div>
        </Container>
      </div>

      <div className="featured">
        <Container classes="">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="px-3 py-5 rounded bg-red-500"></div>
            <h2 className="text-2xl font-semibold text-red-500">Featured</h2>
          </div>
          <h4 className="font-bold text-4xl">New Arrival</h4>
        </Container>
      </div>
    </main>
  );
}

export default App;
