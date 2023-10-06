import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <IoLogoFacebook />
            </a>
            <a>
              <IoLogoYoutube />
            </a>
            <a>
              <IoLogoTwitter />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by Cheers.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
