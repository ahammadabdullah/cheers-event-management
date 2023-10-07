import { IoLogoGoogle } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-hot-toast";

const Login = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => toast.success("Successfully logged in"))
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="bg-base-300 min-h-screen ">
      <div className="max-w-7xl mx-auto py-20">
        <div className="md:w-2/4 w-[90%] bg-white text-center mx-auto">
          <div className="w-3/4  mx-auto">
            <h3 className="text-3xl font-bold pt-20 pb-10 text-primary">
              Login to your account
            </h3>
            <hr />
            <form className="pt-10">
              <label className="block text-left">Email Address</label>
              <input
                className="w-full bg-gray-100 py-5 pl-5 my-4 text-primary focus:border-primary  focus:outline-primary "
                type="email"
                name="email"
                placeholder="Email"
              />
              <label className="block text-left">Password</label>
              <input
                className="w-full bg-gray-100 py-5 pl-5 my-4 text-primary focus:border-primary  focus:outline-primary"
                type="password"
                name="password"
                placeholder="Password"
              />
              <input
                className="w-full bg-primary rounded-md py-4 text-white my-4"
                type="submit"
                value="login"
              />
            </form>
            <p className="pb-8">
              Dont’t Have An Account ?{" "}
              <Link
                state={location.state}
                to={"/register"}
                className=" font-bold text-primary"
              >
                Register
              </Link>
            </p>

            <p className="border-t-2 w-[50%] mx-auto border-primary pt-8 py-5">
              Continue With
            </p>
            <div className="pb-8">
              <button
                onClick={handleGoogleLogin}
                className="w-full py-4 flex items-center justify-center gap-3 text-primary border-2 rounded-md border-primary "
              >
                {" "}
                <IoLogoGoogle /> <span className="font-bold">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
