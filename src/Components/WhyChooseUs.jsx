import { IoCheckmarkSharp } from "react-icons/io5";
import baby from "../assets/baby.png";
const WhyChooseUs = () => {
  //     Scouting a venue
  // Developing a theme
  // Coordinating paper goods with a stationery vendor
  // Organizing a tasting with up to three caterers
  // Recommending up to three florists (if necessary)
  // Recommending up to three photographers (if necessary)
  // Managing your guest list
  // Assisting with rentals
  // And, depending on the wishes, being on-site or on-call during the event to ensure everything runs smoothly
  return (
    <div className="bg-base-300 pt-10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-4xl text-primary font-semibold">
          Why Choose Us
        </h3>
        <div className="flex justify-between items-center pt-4">
          <div className="pl-4">
            <h3 className="text-primary text-2xl pb-4 ">
              Cause, A partial list of our services includes:
            </h3>
            <ul className="pb-4 text-base lg:text-xl">
              <li className="flex items-center gap-2">
                {" "}
                <IoCheckmarkSharp className="text-primary" />{" "}
                <span>Scouting a venue</span>
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkSharp className="text-primary" />{" "}
                <span>Developing a theme</span>
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkSharp className="text-primary" />{" "}
                <span>Coordinating paper goods with a stationery vendor</span>
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkSharp className="text-primary" />{" "}
                <span>Organizing a tasting with up to three caterers</span>
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkSharp className="text-primary" />{" "}
                <span>Recommending up to three florists (if necessary)</span>
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkSharp className="text-primary" />{" "}
                <span>
                  Recommending up to three photographers (if necessary)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkSharp className="text-primary" />{" "}
                <span>Managing your guest list</span>
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkSharp className="text-primary" />{" "}
                <span>Assisting with rentals</span>
              </li>
            </ul>
          </div>
          <img
            className="w-[50%] hidden md:block"
            src={baby}
            alt="baby image"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
