import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">BAZAAR</div>
          <div className="text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </div>
          <div className="social-items">
            <div className="social-icon1"><Facebook /></div>
            <div className="social-icon2"><Twitter /></div>
            <div className="social-icon3"> <Instagram /></div>
            <div className="social-icon4"><Pinterest /></div>
          </div>
        </div>
        <div className="col">
          <div className="title">contact</div>
          <div className="c-item">
            <Room />
            <div className="text">G.T road Malout, sri mukhthar sahib , Punjab</div>
          </div>
          <div className="c-item">
            <Phone />
            <div className="text">8541806579</div>
          </div>
          <div className="c-item">
            <MailOutline />
            <div className="text">bazaar@gamil.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">UseFul Links</div>
          <span className="text">Man Fashion</span>
          <span className="text">Women</span>
          <span className="text">Kids Fashion</span>
          <span className="text">WishLists</span>
          <span className="text">Cart</span>
        </div>
        <div className="col"> <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy policy</span>
          <span className="text">Term & Condition</span>
          <span className="text">Contact us</span>
        </div>
      </div>
      <div className="bottam-bar">
        <div className="bottam-bar-content">
          <div className="text">
            Copyright &copy; 2023, BAZAAR.COM, All Rights Reserved
          </div>
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt=" " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;