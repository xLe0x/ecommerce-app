export default function Login() {
  return (
    <div className="flex mt-28">
      <div className="img max-xl:hidden">
        <img src="/register-img.png" alt="" />
      </div>
      <div className="form flex flex-col gap-12 xl:mt-32 items-center mx-auto">
        <div className="text flex flex-col gap-4">
          <h3 className="text-4xl font-medium">Login to Exclusive</h3>
          <p>Enter your details below</p>
        </div>
        <div className="inputs flex flex-col gap-12">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="outline-none border-b-2 py-2 border-gray-500"
          />
          <input
            type="text"
            placeholder="Password"
            className="outline-none border-b-2 py-2 border-gray-500"
          />
          <div className="btns flex items-center justify-between">
            <button className="bg-red-500 px-6 py-3 text-white font-medium rounded">
              Login
            </button>
            <p className="text-red-500 font-medium">Forget Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
