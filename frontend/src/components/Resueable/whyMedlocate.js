import React from 'react'

export default function whyMedlocate() {
  return (
    <>
    
    <section className="why-choose section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>We Offer Different Services To Improve Your Health</h2>
            <img src="../../public/img/sectionimg.png" alt="#" />
            <p>
            Are You Looking for Your Prescribed Medicine Delivery?
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-12">
          {/* Start Choose Left */}
          <div className="choose-left">
            <h3>Who We Are</h3>
            <p>
            MedLocate is more than just a platform; it's a lifeline for patients
             seeking essential medications. Our mission is to reduce the
             time spent searching for medicines, making it easier for patients 
             to access their prescribed drugs..{" "}
            </p>
            <p>
            When a patient submits a medication request through MedLocate,
             we swiftly connect them with multiple pharmacies. If the medication is 
             available at any of these pharmacies, they accept the request, and the patient is notified.
              Real-time chat enables seamless
             communication between the patient and the pharmacy, 
             making ordering and pickup options convenient.{" "}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list">
                  <li>
                    <i className="fa fa-caret-right" />
                    Maecenas vitae luctus nibh.{" "}
                  </li>
                  <li>
                    <i className="fa fa-caret-right" />
                    Duis massa massa.
                  </li>
                  <li>
                    <i className="fa fa-caret-right" />
                    Aliquam feugiat interdum.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list">
                  <li>
                    <i className="fa fa-caret-right" />
                    Maecenas vitae luctus nibh.{" "}
                  </li>
                  <li>
                    <i className="fa fa-caret-right" />
                    Duis massa massa.
                  </li>
                  <li>
                    <i className="fa fa-caret-right" />
                    Aliquam feugiat interdum.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Choose Left */}
        </div>
        <div className="col-lg-6 col-12">
          {/* Start Choose Rights */}
          <div className="choose-right">
            <div className="video-image">
              {/* Video Animation */}
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1" />
                  <div className="waves wave-2" />
                  <div className="waves wave-3" />
                </div>
              </div>
              {/*/ End Video Animation */}
              <a
                href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                className="video video-popup mfp-iframe"
              >
                <i className="fa fa-play" />
              </a>
            </div>
          </div>
          {/* End Choose Rights */}
        </div>
      </div>
    </div>
  </section>
    
    </>
  )
}
