
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="register-container">
        <h3 style={{ textAlign: "center" }} >Create Account</h3>
        <form>
          <input type="text" id="fname" name="firstname" placeholder="name" />
          <input type="text" id="lname" name="lastname" placeholder="last name" />
          <input type="text" id="uname" name="username" placeholder="username" />
          <input type="email" id="mailid" name="email_address" placeholder="email" />
          <input type="password" id="<PASSWORD>" name="password" placeholder="password" />
          <input type="password" id="<PASSWORD>" name="password" placeholder="confirm password" />
          <div className="Agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <button>
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;