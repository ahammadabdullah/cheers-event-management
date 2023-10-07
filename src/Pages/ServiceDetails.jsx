import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

const ServiceDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [service, setService] = useState({});
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const findData = data.find((service) => service.id == id);
    setService(findData);
  }, [id, data]);

  return (
    <div className="max-w-7xl mx-auto">
      <img src={service?.image} alt="" />
      <div className="w-3/4 mx-auto">
        <h3 className="text-4xl py-3 font-bold text-primary">
          {service?.headline}{" "}
        </h3>
        <p>{service?.fullDesc}</p>
        <h3 className="text-3xl py-3 font-bold text-primary">Features</h3>
        <ul>
          {service?.features?.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              {" "}
              <IoMdArrowForward className="text-primary" />{" "}
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 mb-20">
          <Link to={"/"}>
            <button className="py-3 px-4 mr-3 bg-primary text-white font-semibold">
              Go Back Home
            </button>
          </Link>
          <button className="py-3 px-4 bg-primary text-white font-semibold">
            {" "}
            Book Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
