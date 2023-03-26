export default function Product() {
  return (
    <div className="mt-12 select-none">
      <div className="rounded max-w-xs bg-slate-100 flex p-2 relative group">
        <div className="discount px-3 py-1 bg-red-500 text-white rounded w-fit h-fit">
          <p>40%</p>
        </div>
        <div className="img">
          <img src={"/joystick.png"} alt="" />
        </div>
        <div className="icons absolute top-2 right-4 flex flex-col gap-y-4">
          <img src="/Wishlist.svg" alt="wishlist-img" />
          <img src="/Eye.svg" alt="eye-img" />
        </div>
        <div className="bg-[#111] text-white text-center absolute left-0 -bottom-full group-hover:bottom-0 transition-all ease-in-out duration-300 w-full rounded-b p-1">
          <p className="text-lg font-semibold">Add To Cart</p>
        </div>
      </div>
      <div className="decs mt-4">
        <p className="font-medium text-lg">HAVIT HV-G92 Gamepad</p>
        <div className="price flex gap-4 mt-2">
          <p className="current text-red-500 font-medium">$120</p>
          <p className="previous line-through opacity-50">$160</p>
        </div>
        <div className="rating mt-2">
          ⭐ ⭐ ⭐ ⭐ ⭐ <span className="opacity-50">(88)</span>
        </div>
      </div>
    </div>
  );
}
