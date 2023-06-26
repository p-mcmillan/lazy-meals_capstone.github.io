import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import "../../styles/SignUp.scss";
import ReCAPTCHA from "react-google-recaptcha";

function SignUpForm() {
  const { Formik } = formik;
  const captchaRef = useRef();

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    province: yup.string().required(),
    postalcode: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  const onChange = () => {};

  return (
    <div className="form-wrapper">
      <h1 className="form-header">Sign Up</h1>

      <div className="form-paragraph">
        <p>Thank you for choosing to sign up for our local area alerts! </p>

        <p>
          By completing this form, you will gain access to important updates and
          timely notifications specifically tailored to your local community.
        </p>
        <p>
          {" "}
          We aim to keep you connected and ensure that you never miss out on
          crucial information that matters to you and your neighbors. Simply
          provide us with your contact details, address, and preferences, and
          we'll make sure you receive the alerts that are most relevant to your
          local area. Welcome aboard!
        </p>
      </div>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          city: "",
          province: "",
          postalcode: "",
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label className="custom-label">First name</Form.Label>
                <Form.Control
                  className="custom-input"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  style={{ backgroundColor: "#E3DFF2" }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label className="custom-label">Last name</Form.Label>
                <Form.Control
                  type="text"
                  className="custom-input"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  style={{ backgroundColor: "#E3DFF2" }}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationFormikEmail">
                <Form.Label className="custom-label">Email</Form.Label>
                <InputGroup hasValidation>
                  {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                  <Form.Control
                    type="email"
                    className="custom-input"
                    // placeholder="E-mail"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    style={{ backgroundColor: "#E3DFF2" }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label className="custom-label">City</Form.Label>
                <Form.Control
                  type="text"
                  className="custom-input"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                  style={{ backgroundColor: "#E3DFF2" }}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label className="custom-label">Province</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Province"
                  name="province"
                  className="custom-input"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.province}
                  style={{ backgroundColor: "#E3DFF2" }}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.province}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label className="custom-label">Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Postal Code"
                  name="postalcode"
                  className="custom-input"
                  value={values.postalcode}
                  onChange={handleChange}
                  isInvalid={!!errors.postalcode}
                  style={{ backgroundColor: "#E3DFF2" }}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.postalcode}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label={<strong>Agree to terms and conditions</strong>}
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
                className="custom-checkbox"
              />
            </Form.Group>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              ref={captchaRef}
              onChange={onChange}
              theme="dark"
            />

            <Button className="btn" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUpForm;
