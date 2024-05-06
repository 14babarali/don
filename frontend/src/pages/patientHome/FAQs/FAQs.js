import React, { Component } from "react";
import "./FAQs.css"; // Replace with your actual CSS file

export default class FAQs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
    };
  }

  handleToggle = (faqNumber) => {
    this.setState((prevState) => ({
      expanded: prevState.expanded === faqNumber ? null : faqNumber,
    }));
  };

  render() {
    return (
      <>
        {/* FAQs Section */}
        <section className="our-success-stories main-area healtcare-our-srories">
          <div className="container">
            <div className="row mb20">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="common-que-asked-heading text-center">
                  <h2>FAQs</h2>
                  <p>Answering the ‘Whats’, ‘Whys’ and ‘Hows’ for you!</p>
                </div>
              </div>
            </div>
            <div className="maindivfaq">
            
            <div className="lefthalfdiv">
            <div className="row mb50">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="common-question-wrapper">
                  <div
                    id="que_ans_accordion"
                    className="panel-group"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    {/* FAQ Item 1 */}
                    <div className="panel panel-que-ans">
                      <div id="headingOne" className="panel-heading" role="tab">
                        <div className="panel-title">
                          <div>
                            <span className="badge-que-ans">1 </span>
                          </div>
                          <div>
                            <a
                              className="collapsed"
                              role="button"
                              onClick={() => this.handleToggle(1)}
                              aria-expanded={this.state.expanded === 1}
                              aria-controls="questionOne"
                            >
                              What is MedLocate?
                              <br />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="questionOne"
                        className={`que-ans-wrapper-content panel-collapse ${
                          this.state.expanded === 1
                            ? "collapse show"
                            : "collapse"
                        }`}
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div className="panel-body">
                          MedLocate is a platform designed to connect patients
                          with pharmacies, making it easier for individuals to
                          access essential medications. We streamline the
                          process of searching for medicines, providing a
                          convenient solution for patients to obtain their
                          prescribed drugs.
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item 2 */}
                    <div className="panel panel-que-ans">
                      <div id="headingTwo" className="panel-heading" role="tab">
                        <div className="panel-title">
                          <div>
                            <span className="badge-que-ans">2 </span>
                          </div>
                          <div>
                            <a
                              className="collapsed"
                              role="button"
                              onClick={() => this.handleToggle(2)}
                              aria-expanded={this.state.expanded === 2}
                              aria-controls="questionTwo"
                            >
                              How does MedLocate work?
                              <br />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="questionTwo"
                        className={`que-ans-wrapper-content panel-collapse ${
                          this.state.expanded === 2
                            ? "collapse show"
                            : "collapse"
                        }`}
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="panel-body">
                          When a patient submits a medication request through
                          MedLocate, we connect them with multiple pharmacies.
                          If the medication is available, pharmacies accept the
                          request, and the patient is notified. Real-time chat
                          facilitates communication, enabling seamless
                          coordination between the patient and the pharmacy for
                          convenient ordering and pickup. .
                        </div>
                      </div>
                    </div>
                    {/* Add more FAQ 3 */}
                    <div className="panel panel-que-ans">
                      <div
                        id="headingThree"
                        className="panel-heading"
                        role="tab"
                      >
                        <div className="panel-title">
                          <div>
                            <span className="badge-que-ans">3 </span>
                          </div>
                          <div>
                            <a
                              className="collapsed"
                              role="button"
                              onClick={() => this.handleToggle(3)}
                              aria-expanded={this.state.expanded === 3}
                              aria-controls="questionTwo"
                            >
                              What services does MedLocate offer?
                              <br />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="questionTwo"
                        className={`que-ans-wrapper-content panel-collapse ${
                          this.state.expanded === 3
                            ? "collapse show"
                            : "collapse"
                        }`}
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          MedLocate's primary service is to connect patients
                          with pharmacies to facilitate the quick and reliable
                          access of essential medications. Patients can choose
                          to order medicines online or visit a pharmacy in
                          person, saving valuable time and simplifying the
                          healthcare experienc
                        </div>
                      </div>
                    </div>
              
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="righthalfdiv">
            <div className="row mb50">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="common-question-wrapper">
                  <div
                    id="que_ans_accordion"
                    className="panel-group"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                  
                    {/* Add more FAQ 4*/}
                    <div className="panel panel-que-ans">
                      <div
                        id="headingThree"
                        className="panel-heading"
                        role="tab"
                      >
                        <div className="panel-title">
                          <div>
                            <span className="badge-que-ans">4 </span>
                          </div>
                          <div>
                            <a
                              className="collapsed"
                              role="button"
                              onClick={() => this.handleToggle(4)}
                              aria-expanded={this.state.expanded === 4}
                              aria-controls="questionTwo"
                            >
                              How can I contact customer support?
                              <br />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="questionTwo"
                        className={`que-ans-wrapper-content panel-collapse ${
                          this.state.expanded === 4
                            ? "collapse show"
                            : "collapse"
                        }`}
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          For customer support, please email us at
                          support@medlocate.com. Our support team is dedicated
                          to assisting you with any questions or concerns.
                        </div>
                      </div>
                    </div>
                    {/* Add more FAQ 5*/}
                    <div className="panel panel-que-ans">
                      <div
                        id="headingThree"
                        className="panel-heading"
                        role="tab"
                      >
                        <div className="panel-title">
                          <div>
                            <span className="badge-que-ans">5 </span>
                          </div>
                          <div>
                            <a
                              className="collapsed"
                              role="button"
                              onClick={() => this.handleToggle(5)}
                              aria-expanded={this.state.expanded === 5}
                              aria-controls="questionTwo"
                            >
                              Are there business opportunities with MedLocate?
                              <br />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="questionTwo"
                        className={`que-ans-wrapper-content panel-collapse ${
                          this.state.expanded === 5
                            ? "collapse show"
                            : "collapse"
                        }`}
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          Yes, we welcome business inquiries. If you have
                          business-related inquiries, please contact us at
                          business@medlocate.com. We are open to exploring
                          collaborations and partnerships.
                        </div>
                      </div>
                    </div>{" "}
                   
                    {/* Add more FAQ 6*/}
                    <div className="panel panel-que-ans">
                      <div
                        id="headingThree"
                        className="panel-heading"
                        role="tab"
                      >
                        <div className="panel-title">
                          <div>
                            <span className="badge-que-ans"> </span>
                          </div>
                          <div>
                            <a
                              className="collapsed"
                              role="button"
                              onClick={() => this.handleToggle(8)}
                              aria-expanded={this.state.expanded === 8}
                              aria-controls="questionEight"
                            >
                              Why should I use MedLocate to obtain my
                              medications?
                              <br />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="questionEight"
                        className={`que-ans-wrapper-content panel-collapse ${
                          this.state.expanded === 8
                            ? "collapse show"
                            : "collapse"
                        }`}
                        role="tabpanel"
                        aria-labelledby="headingEight"
                      >
                        <div className="panel-body">
                          MedLocate offers a streamlined solution for accessing
                          essential medications. Here are a few reasons to use
                          our platform: Convenience: MedLocate simplifies the
                          process of obtaining prescribed drugs. You can submit
                          a medication request from the comfort of your home.
                          Multiple Options: We connect you with multiple
                          pharmacies, increasing the chances of finding your
                          required medication. This allows you to explore
                          various options and choose the one that suits you
                          best. Real-Time Communication: Our platform
                          facilitates real-time communication between you and
                          the pharmacy. This ensures seamless coordination for a
                          convenient ordering and pickup experience.
                          Time-Saving: By reducing the time spent searching for
                          medicines, MedLocate saves you valuable time, making
                          the healthcare process more efficient.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
