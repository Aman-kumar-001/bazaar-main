
import "./NewsLetter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products.</p>
      <div className="form">
        <input type="text" placeholder="email address" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Newsletter;