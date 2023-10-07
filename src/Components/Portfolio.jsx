import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-portfolio !font-vidaloka font-bold text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-0 justify-around py-20">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="flex flex-col justify-center items-center "
        >
          <h3 className="text-7xl">88</h3>
          <div>
            <hr className="w-10" />
          </div>
          <h3 className="text-xl">Projects</h3>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="flex flex-col justify-center items-center"
        >
          <h3 className="text-7xl">120</h3>
          <div>
            <hr className="w-10" />
          </div>
          <h3 className="text-xl">Clients</h3>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="flex flex-col justify-center items-center"
        >
          <h3 className="text-7xl">18</h3>
          <div>
            <hr className="w-10" />
          </div>
          <h3 className="text-xl">Members</h3>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="flex flex-col justify-center items-center"
        >
          <h3 className="text-7xl">11</h3>
          <div>
            <hr className="w-10" />
          </div>
          <h3 className="text-xl">Awards</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
