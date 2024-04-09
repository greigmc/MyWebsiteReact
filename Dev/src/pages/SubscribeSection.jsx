import React from "react";
import "./../App.css";

const SubscribeSection = () => {
  return (
    <section id="Subscribe" className="position-relative w-100">
      <div className="module-small bg-dark">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="callout-text font-alt">
                <h3 className="callout-title">Subscribe now</h3>

                <p>We will not spam your email.</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="callout-btn-box">
                <div id="mc_embed_signup">
              {/* Campaign Monitor  */}
                {/* <form 
                  class="js-cm-form" 
                  id="subForm" 
                  action="https://www.createsend.com/t/subscribeerror?description=" 
                  method="post" 
                  data-id="191722FC90141D02184CB1B62AB3DC2697D196BAEED7E8E6C1422CF16E3EB6F89A042622CE312C0091A811AB53AC6AE1A967A6276805338670FAD5B632C6E895"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_self"
                  >
                  <div className="input-group">
                  <input
                    className="required email form-control input-group-btn"
                    placeholder='Your Email'
                    type='email'
                    name='cm-tlpzl-tlpzl'
                    autocomplete
                    required
                    data-validation-required-message="Please enter your email address."
                    aria-label="Email" 
                    // className="js-cm-email-input qa-input-email" 
                    id="fieldEmail" 
                    maxlength="200" 
                  />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-g btn-round"
                        id=""
                        type="submit"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Submit
                      </button>
                    </span>
                  </div>
                </form>
                <script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script> */}

                {/* mailchimp */}
                  <form
                    action="https://greigmcmahon.us21.list-manage.com/subscribe/post?u=eeaf3811487af5a2e902d4206&amp;id=1a26dc2b49&amp;f_id=0070e8e1f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_self"
                  >
                    <div className="input-group">
                      <input
                        className="required email form-control input-group-btn"
                        placeholder='Your Email'
                        type='email'
                        name='email'
                        autocomplete
                        required
                        data-validation-required-message="Please enter your email address."
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-g btn-round"
                          id="mc-embedded-subscribe"
                          type="submit"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Submit
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="text-center" id="subscription-response"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
