const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.ibb.co/SB1wb3F/WbQnbas.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-primary">Cheers</span>
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              Cheers is an event planning company specializing in creating
              custom, meaningful celebrations for life's greatest occasions.
              Founded in 2018, Cheers has been bringing the fun and joy to
              weddings, milestones birthdays, anniversaries, holiday parties,
              and more for over 5 years.
            </p>
            <p>
              Our team of experienced planners is dedicated to designing unique
              events that reflect our client's style, personality, and vision.
              From venue selection to entertainment to decor, we handle every
              detail with care and enthusiasm. Our goal is for you to relax and
              enjoy your special day while we take care of the planning and
              coordination.
            </p>
            <p>
              At Cheers, relationships matter. We get to know each client
              personally so we can craft an event just for them. We always keep
              our clients' happiness and satisfaction as top priorities. Our
              greatest reward is seeing the look on our clients' faces when
              their event vision comes to life.
            </p>
            <p>
              Whether it's an intimate dinner for two or a blowout bash for 200,
              contact Cheers to start planning your perfect celebration today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
