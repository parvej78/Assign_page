import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1 className="hh">Sign-Up Page</h1>

        <div className="ui form">

          <div className="field">
            <label>FirstName &nbsp;</label>
            <input type="text" name="firstName" placeholder="Enter firstname" />
          </div><br></br>

          <div className="field">
            <label>LastName &nbsp;</label>
            <input type="text" name="lastName" placeholder="Enter lastname" />
          </div><br></br>

          <div className="field">
            <label>Username &nbsp;</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>

          <div className="fields">
            <label>Email-Id &nbsp;</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={formValues.email}
              onChange={handleChange}
              className="e"
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password &nbsp;</label>
            <input
              type="password"
              name="password"
              placeholder=" Enter Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>

          <div className="field">
            <label>PhoneNo. &nbsp;</label>
            <input countryCode="+91" type="phone" name="phone" placeholder="Enter phoneNumber" />
          </div><br></br>

          <div className="field">
            <label>Country &nbsp;</label>
            <select>
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>Afghanistan</option>
            </select>
          </div><br></br>

          <div className="field">
            <label>City &nbsp;</label>
            <select >
              <option>Select city</option>
              <option>Jaipur</option>
              <option>Gangapur City</option>
              <option>SWM</option>
            </select>
          </div><br></br>

          <div className="field">
            <label>PanCard No.</label>
            <input type="phone" placeholder="Enter panCard number" />
          </div><br></br>

          <div className="field">
            <label>AdharCard No.</label>
            <input type="phone" placeholder="Enter adharCard number" />
          </div><br></br>

          <button className="btn">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default App;
