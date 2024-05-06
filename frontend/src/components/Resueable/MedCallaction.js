
import {Link} from 'react-router-dom'

export default function MedCallaction() {
  return (
    <>
    
    <section className="call-action overlay" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="content">
            <h2>Feel Freely COnatacus ? Call @ 1234 56789</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              porttitor dictum turpis nec gravida.
            </p>
            <div className="button">
              <Link to="/contact" className="btn">
                Contact Now
              </Link>
              <Link to="#" className="btn second">
                Learn More
                <i className="fa fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
    </>
  )
}
