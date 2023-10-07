import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="bg-base-300  ">
        <div className="max-w-7xl mx-auto pt-20">
          <div className="pb-20">
            <div className="md:w-2/4 w-[90%] bg-white text-center mx-auto ">
              <div className="w-3/4 mx-auto">
                <h3 className="text-3xl font-bold pt-20 pb-10 text-primary">
                  Register your account
                </h3>
                <hr />
                <form className="pt-10">
                  <label className="block text-left">Your Name</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <label className="block text-left">photo URL</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="text"
                    name="photo"
                    placeholder="photo URL"
                  />
                  <label className="block text-left">Email Address</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <label className="block text-left">Password</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <input
                    className="w-full bg-primary rounded-md py-4 text-white my-4"
                    type="submit"
                    value="Register"
                  />
                </form>
                <p className="py-8">
                  Already Have An Account ?{" "}
                  <Link to={"/login"} className=" font-bold text-primary">
                    Login Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
