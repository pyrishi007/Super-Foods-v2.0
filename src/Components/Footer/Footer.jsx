import "../Footer/footer.css";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <div className="logo-with-icons">
            <h2>Super Food's</h2>
            <div className="footer-icons">
              {/* Placeholder for orange icons */}
              <span className="icon-placeholder"></span>
              <span className="icon-placeholder"></span>
              <span className="icon-placeholder"></span>
            </div>
          </div>
          <div className="footer-icons-2">
            {/* Placeholder for orange icons */}

            <img src={facebook} alt="" className="facebook" />

            <img src={instagram} alt="" />

            <img src={twitter} alt="" />
          </div>
          <div className="footer-section-moreInfo">
            <h3>Why Choose Us?</h3>
            <ul>
              <li> Fresh Ingredients Daily</li>
              <li> Super Fast Delivery</li>
              <li> Home-style Cooking</li>
              <li> Healthy & Nutritious</li>
            </ul>
          </div>
        </div>

        <div className="footer-container">
          {/* Column 1 - About */}
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              At Super Food's, we bring wholesome, fresh meals crafted with
              care. Healthy, delicious, and convenient  every bite should feel
              special.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>About Us</li>
              <li>Offers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Phone: +91 82108 74695</p>
            <p>Email: gorai123n@gmail.com</p>
            <p>Address: 21, Food Street, Bangalore, India</p>
            <p>
              We are here to ensure your meals are delivered with care and love.
            </p>
          </div>

          {/* Column 4 - Orange Highlights / Features */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Super Food's. All Rights Reserved. <br />
          Disclaimer: All content, images, and information on this site are for
          informational purposes only. Prices and offers are subject to change.
          Super Food's is not responsible for any discrepancies or errors.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
