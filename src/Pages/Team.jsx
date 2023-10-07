import { useEffect, useState } from "react";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Team = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="bg-banner3 bg-cover bg-blend-overlay bg-gray-700">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl  text-primary font-bold text-center py-20">
          Meet Our Teams
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white">
          {data?.map((member) => (
            <div
              className="mx-auto flex flex-col justify-center pb-20 "
              key={member.id}
            >
              <img
                className="w-[200px]"
                src={member?.image}
                alt={member.name}
              />
              <h3 className="text-2xl font-bold text-center pt-5">
                {member.name}
              </h3>
              <p className="text-center">{member.designation}</p>
              <div className="text-primary flex justify-center gap-4 text-xl pt-2">
                <IoLogoFacebook />
                <IoLogoTwitter />
                <IoLogoLinkedin />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
