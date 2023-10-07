import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-base-300 py-10">
      <h3 className="text-center text-2xl lg:text-4xl font-bold  text-primary font-vidaloka">
        Our Services
      </h3>
      <div className="max-w-7xl mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-5">
        {services.map((service) => {
          return (
            <div className="mx-auto w-[350px] " key={service.id}>
              <img
                className="h-[214px] w-[350px]"
                src={service.image}
                alt={service.title}
              />
              <div className="border border-primary ">
                <h2 className="text-xl font-semibold py-3 pl-3">
                  {service.title}
                </h2>
                <p className="pl-3 h-[105px]">{service.shortDesc}</p>
                <h2 className="pl-3 pb-3 pt-3">
                  Pricing starts from:{" "}
                  <span className="font-bold">{service.pricing}</span>
                </h2>
                <button className="w-full py-2 bg-primary text-white font-semibold">
                  Full Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
