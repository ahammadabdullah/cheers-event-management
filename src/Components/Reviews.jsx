import { useEffect, useState } from "react";
import { FiPenTool } from "react-icons/fi";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="bg-portfolio">
      <h3 className="pt-20  text-2xl md:text-4xl text-white font-bold text-center font-vidaloka">
        Happy Clients About Us
      </h3>
      <div className="text-center w-[90%] lg:w-3/4 mx-auto py-10">
        {reviews.map((review) => (
          <div key={review.id} className="pb-5">
            <p className="text-white italic text-base md:text-xl">
              {" "}
              "{review.review}"
            </p>
            <p>
              <small className=" font-semibold gap-2 text-white">
                - <span>{review.name}</span>
              </small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
