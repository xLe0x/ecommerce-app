import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex mt-28">
      <div className="img max-xl:hidden">
        <img src="/register-img.png" alt="" />
      </div>
      <div className="form flex flex-col gap-12 xl:mt-32 items-center mx-auto">
        <div className="text flex flex-col gap-4">
          <h3 className="text-4xl font-medium">Create an account</h3>
          <p>Enter your details below</p>
        </div>
        <div className="inputs flex flex-col gap-12">
          <input
            type="text"
            placeholder="Name"
            className="outline-none border-b-2 py-2 border-gray-500"
          />
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
          <button className="bg-red-500 px-4 py-3 text-white font-medium rounded">
            Create Account
          </button>
          <p className="text-center">
            Already have account?{" "}
            <Link
              to={"/login"}
              className="text-gray-700 text-lg border-b-2 border-gray-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
