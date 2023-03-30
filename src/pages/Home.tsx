import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import Container from "../components/Container";
import Product from "../components/Product";
import Category from "../components/Category";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../rtk/slices/productsSlice";
import { Link } from "react-router-dom";

interface Product {
  image: string;
  price: number;
  title: string;
  id: number;
}

export default function Home() {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Container classes="flex items-stretch justify-evenly max-sm:flex-col">
        <aside className="flex flex-col gap-y-6 border-r-[1px] max-md:hidden border-r-black pt-4 pr-4">
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
          <p>Women's Fashion</p>
        </aside>
        <div className="rounded flex items-center max-sm:items-start justify-evenly p-10 mx-8 mt-4 bg-black text-white max-sm:w-full max-sm:flex-col max-sm:mx-0">
          <div className="text">
            <div className="flex items-center gap-3 mb-8">
              <img src={"/apple.png"} alt="apple-logo" width={40} height={40} />
              <p className="font-medium">iPhone 14 series</p>
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
            {products.map((product: Product) => {
              return (
                <SwiperSlide>
                  <Product
                    ProductObject={product}
                    ProductID={product.id}
                    ProductImg={product.image}
                    ProductPrice={product.price}
                    ProductTitle={product.title}
                    key={product.id}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="products-btn my-12 grid place-content-center">
            <Link
              to={"/products"}
              className="px-6 py-3 bg-red-500 rounded text-white"
            >
              View All Products
            </Link>
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
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
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
            <div className="bullets text-white flex max-sm:gap-x-1 gap-x-8 my-8">
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
          <div className="grid max-h-fit grid-cols-2 grid-rows-2 max-md:grid-cols-1 gap-8 my-8 text-white">
            <div className="one max-md:max-h-fit relative bg-black rounded">
              <div className="text absolute  bottom-8 left-4 text-lg max-w-sm z-10">
                <h4 className="text-2xl max-sm:text-xl font-semibold">
                  Playstation 5
                </h4>
                <p className="max-sm:hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, impedit!
                </p>
                <a href="" className="underline">
                  Shop Now
                </a>
              </div>
              <div className="img absolute bottom-0 left-12">
                <img src="/playstation.png" alt="" />
              </div>
            </div>
            <div className="two min-w-full grid gap-8">
              <div className="flex items-center justify-between bg-black px-8 py-16 rounded">
                <div className="text">
                  <h4 className="text-2xl max-sm:text-xl font-semibold mb-4">
                    Men's Collection's
                  </h4>
                  <p className="max-w-xs max-sm:hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, impedit!
                  </p>
                  <a href="" className="underline">
                    Shop Now
                  </a>
                </div>
                <div className="img">
                  <img src="/man1.jpg" alt="" />
                </div>
              </div>
              <div className="three flex max-sm:flex-col gap-4">
                <div className="relative bg-black rounded p-4 w-1/2 max-sm:w-full">
                  <div className="text absolute bottom-4 left-4">
                    <h4 className="text-2xl max-sm:text-lg font-semibold">
                      Speakers
                    </h4>
                    <p className="max-sm:hidden">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                    <a href="" className="underline">
                      Shop Now
                    </a>
                  </div>
                  <div className="img">
                    <img src="/perfumes.png" alt="" />
                  </div>
                </div>
                <div className="relative bg-black rounded p-4 w-1/2 max-sm:w-full">
                  <div className="text absolute bottom-4 left-4">
                    <h4 className="text-2xl max-sm:text-lg font-semibold">
                      Perfumes
                    </h4>
                    <p className="max-sm:hidden">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
                    <a href="" className="underline">
                      Shop Now
                    </a>
                  </div>
                  <div className="img">
                    <img src="/speakers.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="features mt-16 mb-8 md:-mt-96">
        <Container classes="flex max-md:flex-col gap-8 items-center justify-between text-center">
          <div className="feature">
            <img src="/Services.png" alt="" className="mx-auto" />
            <div className="text mt-2">
              <h5 className="text-bold text-2xl">Free and fast delivery</h5>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src="/Services(1).png" alt="" className="mx-auto" />
            <div className="text mt-2">
              <h5 className="text-bold text-2xl">24/7 customer service</h5>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src="/Services(2).png" alt="" className="mx-auto" />
            <div className="text mt-2">
              <h5 className="text-bold text-2xl">Money back guarantee</h5>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
