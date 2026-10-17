import "./footer.css";
import arrow from "../../img/arrows/arrow-up-right.png";
function Footer() {
  return (
    <div className="footer">
      <div className="subscription">
        <div className="text-form">
          <div>
            <p>
              <span className="black-word">Join Our </span>
              <span className="red-word">Newsletter</span>
            </p>
            <p className="subtitle-subscription">
              Be the first to know about our latest updates, exclusive offers,
              and more.
            </p>
          </div>
          <div className="email-btn">
            <input
              className="email-input"
              placeholder="Enter your email address"
            />
            <button className="btn-subscribe">
              <p>Subscribe</p>
            </button>
          </div>
        </div>
        <div>
          <hr className="line" />
        </div>
        <ul className="list-links">
          <div>
            <p className="title-links">Product & Service</p>
            <div className="position-between">
              <li id="first-row">Products</li>
              <li>Services</li>
              <li>Appliances</li>
              <li className="marker-point">
                Storage
                <span className="marker">New</span>
              </li>
              <li className="arrow-text">
                Lifestyle
                <img src={arrow} className="arrow" alt="Arrow" />
              </li>
            </div>
          </div>
          <div>
            <p className="title-links">Shop Now</p>
            <div className="position-between">
              <li id="first-row">Offers</li>
              <li>Promos</li>
              <li>Online Shop FAQ</li>
              <li className="marker-point">
                Business Offer
                <span className="marker">New</span>
              </li>
              <li className="arrow-text">
                Student Offer
                <img src={arrow} className="arrow" alt="Arrow" />
              </li>
            </div>
          </div>
          <div>
            <p className="title-links">Support</p>
            <div className="position-between">
              <li id="first-row">Contact</li>
              <li className="arrow-text">
                Email Support
                <img src={arrow} className="arrow" alt="Arrow" />
              </li>
              <li className="arrow-text">
                Live Chat
                <img src={arrow} className="arrow" alt="Arrow" />
              </li>
              <li>Phone Support</li>
              <li className="arrow-text">
                Community
                <img src={arrow} className="arrow" alt="Arrow" />
              </li>
            </div>
          </div>
          <div>
            <p className="title-links">Account</p>
            <div className="position-between">
              <li id="first-row">My Products</li>
              <li>Orders</li>
              <li>Wishlist</li>
              <li className="marker-point">
                Service
                <span className="marker">New</span>
              </li>
              <li className="arrow-text">
                Rewards
                <img src={arrow} className="arrow" alt="Arrow" />
              </li>
            </div>
          </div>
          <div>
            <p className="title-links">About</p>
            <div className="position-between">
              <li id="first-row">Company Info</li>
              <li>Brand Guidelines</li>
              <li>Careers</li>
              <li className="marker-point" className="arrow-text">
                Investors
                <span className="marker">New</span>
                <img src={arrow} className="arrow" alt="Arrow" />
              </li>
              <li className="arrow-text">
                About Us
                <img src={arrow} className="arrow" alt="Arrow" />
              </li>
            </div>
          </div>
        </ul>
        <div>
          <hr className="line-after" />
        </div>
        <div className="line-privacy">
          <div className="main-points">
            <p>English</p>
            <p>Privacy</p>
            <p>Legal</p>
          </div>
          <div className="copyright">
            <p>© 2023 Cadet UI. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
