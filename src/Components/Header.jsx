const Header = () => {
  return (
    <div>
      {/* banner section */}
      <div className="bg-banner bg-blend-overlay bg-slate-500 md:h-[600px] h-[350px]  flex items-center justify-center">
        <div className=" ">
          <div className="text-center px-6">
            <h1 className="text-primary text-left text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl">
              We Create
            </h1>
            <h1 className="text-4xl text-left  tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              You Celebrate
            </h1>
            <p className="mt-5 max-w-md mx-auto text-lg text-left text-gray-500 sm:text-xl md:text-xl">
              Planning a Wedding, Proposal, or Event in our Busy city is not so
              easy and it takes skills (and time) to make it all look easy-going
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
