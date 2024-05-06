import React from 'react'

export default function Feautes() {
  return (
    <>

    <section className="Feautes section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>We Are Always Ready to Help You &amp; Your Family</h2>
            
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <div className="single-features">
            <div className="signle-icon">
              <i className="fas fa-shopping-cart fa-3x" />
            </div>
            <h3> Online Ordering</h3>
            <p>
              Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
              vulputate.
            </p>
          </div>
          {/* End Single features */}
        </div>
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <div className="single-features">
            <div className="signle-icon">
              <i className="fas fa-save fa-3x" />
            </div>
            <h3>Real-Time Chat</h3>
            <p>
              Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
              vulputate.
            </p>
          </div>
          {/* End Single features */}
        </div>
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <div className="single-features last">
            <div className="signle-icon">
              <i className="fas fa-comment fa-3x" />
            </div>
            <h3>Time-Saving</h3>
            <p>
              Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
              vulputate.
            </p>
          </div>
          {/* End Single features */}
        </div>
      </div>
    </div>
  </section>

    </>
  )
}
