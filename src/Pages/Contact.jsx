const Contact = () => {
  return (
    <div className=" bg-banner2 bg-cover bg-blend-overlay bg-gray-700">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center !text-primary ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white ">
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white "
            >
              Your email
            </label>
            <input
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-none dark:focus:border-primary dark:shadow-sm-light focus:border-primary focus:ring-primary"
              placeholder="Your email here"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-none dark:focus:border-primary dark:shadow-sm-light focus:border-primary focus:ring-primary"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-none dark:focus:border-primary dark:shadow-sm-light focus:border-primary focus:ring-primary"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-primary focus:outline-none focus:ring-0 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-0"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
