import React, { useState } from "react";
import "./../../App.css";
import Recaptcha from "./Recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

// dev API 
// const url = process.env.REACT_APP_API_ENDPOINT || 'https:127.0.0.1:5000/api/send' ;

// production API 
// const url = process.env.REACT_APP_API_ENDPOINT || 'api/send' ;


const ContactForm = () => {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  //Result of message
  const [result, setResult] = useState('');
  //Status of sending message
  const [status, setStatus] = useState('Submit');

  function resetEmailForm() {
    setEmailForm({ name: '', email: '', phone: '', subject: '', message: '' });
  }

  function handleEmailFormChange(event) {
    setEmailForm((prevEmailData) => {
      return {
        ...prevEmailData,
        [event.target.name]: event.target.value,
      };
    });

    if (result.length > 0) {
      setResult('');
    }
  }

  const handleSubmit = async (e) => {
    setResult('');
    e.preventDefault();
    setStatus('Sending...');

    const { name, email, phone, subject, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    };
    
    try {
      // let response = await fetch('https://153.92.8.192:5000/send', {
      let response = await fetch('https://localhost:5000/api/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Private-Network": "true",

          "Access-Control-Request-Headers": "*",

        },
        body: JSON.stringify(details),
      });
      setStatus('Submit');
      let result = await response.json();

      if (result.status === 'success') {
        setResult('Thank you for getting in touch');
        resetEmailForm();
      } else if (result.status === 'fail') {
        alert('Thank you for getting in touch!');
      }
    } catch (error) {
      console.error(error);
      setStatus('Submit');
      setResult('Thank you for getting in touch!');
    }
  
  };



  return (
    <section id="contact" className="mb-4 position-relative w-100">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12">
            <h1 className="module-title font-alt">
              Contact Enquires &amp; Support
            </h1>
            <div className="module-subtitle font-serif"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="module-subtitle font-serif">
              Making a change starts with one conversation.<br></br>
              Fill in the form below to book a consultation.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <hr className="divider-w mt-10 mb-20" />
            <form
              id='contact-form'
              className='contact-form'
              onSubmit={handleSubmit}
              // action="http://greigmcmahon.com:50000/send"
              method='POST'
            >
              <div className="row">
                {/* Honeypot */}
                <div className="">
                  <div className="">
                    <input
                      // className="form-control"
                      placeholder=''
                      type='hidden'
                      name='hidden'
                      required
                      value={emailForm.hidden}
                      onChange={handleEmailFormChange}
                    />
                  </div>
                </div>
                {/* Name */}
                <div className="col-md-6 mb-2">
                  <div className="form-group mb-sm-10">
                    {/* <label className="formLabel" htmlFor="name">
                      Name:
                    </label> */}
                    <input
                      className="form-control mobile"
                      placeholder='name*'
                      type='text'
                      name='name'
                      autocomplete
                      required
                      value={emailForm.name}
                      onChange={handleEmailFormChange}
                    />

                  </div>
                </div>
                {/* Email */}
                <div className="col-md-6  mb-2">
                  <div className="form-group mb-sm-10">
                    {/* <label className="formLabel" htmlFor="email">
                      Email:
                    </label> */}
                    <input
                      className="form-control mobile"
                      placeholder='email address*'
                      type='email'
                      name='email'
                      autocomplete
                      required={true}
                      value={emailForm.email}
                      onChange={handleEmailFormChange}
                    />
                  </div>
                </div>
                {/* Phone */}
                <div className="col-md-6  mb-2">
                  <div className="form-group mb-sm-10">
                    {/* <label className="formLabel" htmlFor="phone">
                      Phone:
                    </label> */}
                    <input
                      className="form-control mobile"
                      placeholder='Phone*'
                      type='phone'
                      name='phone'
                      autocomplete
                      required={true}
                      value={emailForm.phone}
                      onChange={handleEmailFormChange}
                    />
                  </div>
                </div>
                {/* Subject */}
                <div className="col-md-6  mb-2">
                  <div className="form-group mb-sm-10">
                    {/* <label className="formLabel" htmlFor="subject">
                      Subject:
                    </label> */}
                    <input
                      className="form-control mobile"
                      placeholder='Subject*'
                      type='subject'
                      name='subject'
                      autocomplete
                      required={true}
                      value={emailForm.subject}
                      onChange={handleEmailFormChange}
                    />
                  </div>
                </div>
                {/* Message */}
                <div className="col-12 mb-2">
                  <div className="form-group">
                    {/* <label className="formLabel" htmlFor="message">
                      Message:
                    </label> */}
                    <textarea
                      className="form-control h-25"
                      maxLength={300}
                      placeholder='message (max 300 characters)*'
                      name='message'
                      autocomplete
                      required={true}
                      value={emailForm.message}
                      onChange={handleEmailFormChange}
                    />
                  </div>
                </div>
                {/* Recaptcha */}
                <Recaptcha />
                <div className="col-md-12 col-sm-6 d-grid gap-2 mb-4">
                  <button
                    className="btn btn-block btn-round btn-d submit-button"
                    type='submit'>
                    {status}
                  </button>
                  <h3 className="message-result">{result}</h3>

                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-6">
            <hr className="divider-w mt-10 mb-20" />
            {/* Contact Tabs */}
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <FontAwesomeIcon className="icon-contact" icon={faPhone} />{" "}
                  Contact Details
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <FontAwesomeIcon
                    className="icon-contact"
                    icon={faLocationDot}
                  />{" "}
                  Address
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <FontAwesomeIcon className="icon-contact" icon={faTicket} />{" "}
                  Support
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                Phone:
                <a href="tel:555-555-5555">0449 606 926</a> <br />
                Email:
                <a href="mailto:info@greigmcmahon.com" target="_top">
                  info@greigmcmahon.com
                </a>
              </div>

              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                Melbourne based but can work remote from any corner of the globe!!
                {/* New office will be opening soon. */}
              </div>

              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                Daily ongoing maintenace and support.
                {/* Support is offered 24/7 all days of the year */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
