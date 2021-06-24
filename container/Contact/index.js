import React from 'react';
import { useFormik } from 'formik';
import PortTextInput from '../../component/PortTextInput';
import Button from '../../component/Button';
import PortText from '../../component/PortText';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.tel) {
    errors.tel = 'Required';
  } else if (!/^[+]?[0-9]{3}[0-9]{3}[0-9]{4,6}$/i.test(values.tel)) {
    errors.tel = 'Invalid phone number';
  }

  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form id="Contact" onSubmit={formik.handleSubmit}>
      <div>
        <div className="contactContainer">
          <div>
            <PortText variant="portHeadingCaption" component="h1">
              Contact
            </PortText>
            <PortText variant="portHeadingText">GET IN TOUCH</PortText>
          </div>
          <div>
            <div className="contactForm">
              <div>
                <PortTextInput
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="contactInput"
                  placeholder="Name"
                  className={formik.errors.name ? 'borderBottom' : null}
                />
              </div>
              <div>
                <PortTextInput
                  id="tel"
                  name="tel"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.tel}
                  variant="contactInput"
                  placeholder="Phone Number"
                  className={formik.errors.tel ? 'borderBottom' : null}
                />
              </div>
            </div>
            <PortTextInput
              variant="contactTextArea"
              component="textarea"
              placeholder="How can we help you?"
            />
          </div>
          <Button type="submit" className="buttonMargin">
            SEND MESSAGE
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
