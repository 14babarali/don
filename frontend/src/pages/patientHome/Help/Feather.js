import React, { Component } from "react";
import "./Feather.css"; // Import the custom CSS file

export default class Feather extends Component {
  addFeatherToClassName = (originalClassName) => {
    // Add "feather-" prefix to each class name
    return originalClassName
      ? originalClassName
          .split(" ")
          .map((className) => `feather-${className}`)
          .join(" ")
      : "feather"; // Apply "feather" class for elements without any class
  };

  render() {
    return (
      <>
        <section
          className={this.addFeatherToClassName(
            "solution-we-offer healthcare-we-offer main-area medician-doorstep section-p60"
          )}
        >
          <div className={this.addFeatherToClassName("container")}>
            <div className={this.addFeatherToClassName("row mb40")}>
              <div className={this.addFeatherToClassName("col-md-12")}>
                <div
                  className={this.addFeatherToClassName(
                    "prof-web-design-section-heading text-center"
                  )}
                >
                  <h2 className={this.addFeatherToClassName("title-heading")}>
                    Medicine Delivery At Your Doorstep
                  </h2>
                </div>
              </div>
            </div>
            <div className={this.addFeatherToClassName("row")}>
              <div className={this.addFeatherToClassName("col-md-12")}>
                <div
                  className={this.addFeatherToClassName(
                    "solution-offer-wrapper solution-offer-grid-container bg-white container-medicain"
                  )}
                >
                  <div
                    className={this.addFeatherToClassName(
                      "solution-box border-dashed-top border-dashed-left border-dashed-bottom"
                    )}
                  >
                    <div className={this.addFeatherToClassName("")}>
                      <i
                        className="fas fa-user"
                      />
                    </div>
                    <div
                      className={this.addFeatherToClassName(
                        "-icsolutionon-heading"
                      )}
                    >
                      <h4>Senior Citizens</h4>
                      <p>
                        Freeing them from dependencies providing them with an
                        easy option to purchase their medicines
                      </p>
                    </div>
                  </div>
                  <div
                    className={this.addFeatherToClassName(
                      "solution-box border-dashed-top border-dashed-left border-dashed-bottom"
                    )}
                  >
                    <div
                      className={this.addFeatherToClassName("solution-icon-bg")}
                    >
                      <i
                        className="fas fa-female"
                      />
                    </div>
                    <div
                      className={this.addFeatherToClassName(
                        "solution-icon-heading"
                      )}
                    >
                      <h4>House Wives</h4>
                      <p>
                        Can buy medicines and all health care supplies staying
                        at home
                      </p>
                    </div>
                  </div>
                  <div
                    className={this.addFeatherToClassName(
                      "solution-box border-dashed-top border-dashed-left border-dashed-bottom"
                    )}
                  >
                    <div
                      className={this.addFeatherToClassName("solution-icon-bg")}
                    >
                      <i
                        className=
                          "fas fa-briefcase"
                        
                      />
                    </div>
                    <div
                      className={this.addFeatherToClassName(
                        "solution-icon-heading"
                      )}
                    >
                      <h4>Working Professionals</h4>
                      <p>
                        Don’t have to take out separate time from their
                        exhaustive days to buy medicines
                      </p>
                    </div>
                  </div>
                  <div
                    className={this.addFeatherToClassName(
                      "solution-box border-dashed-top border-dashed-left border-dashed-bottom border-dashed-left border-dashed-right"
                    )}
                  >
                    <div
                      className={this.addFeatherToClassName("solution-icon-bg")}
                    >
                      <i
                        className="fas fa-tree"
                      />
                    </div>
                    <div
                      className={this.addFeatherToClassName(
                        "solution-icon-heading"
                      )}
                    >
                      <h4>Rural Population</h4>
                      <p>
                        Is now being accessible to original and quality
                        medicines
                      </p>
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
