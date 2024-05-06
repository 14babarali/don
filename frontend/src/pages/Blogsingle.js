import React from 'react'
import Layout from '../components/Layout/Layout'
export default function Blogsingle() {
  return (
    <Layout title={"Medlocate  - Blog  "}>
    <>
  {/* Title */}
  {/* Preloader */}
   {/*  <div className="preloader">
    <div className="loader">
      <div className="loader-outter" />
      <div className="loader-inner" />
      <div className="indicator">
        <svg width="16px" height="12px">
          <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
          <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
        </svg>
      </div>
    </div>
  </div> */}
 
  {/* End Preloader */}

  <section className="news-single section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-12">
          <div className="row">
            <div className="col-12">
              <div className="single-main">
                {/* News Head */}
                <div className="news-head">
                  <img src="img/blog1.jpg" alt="#" />
                </div>
                {/* News Title */}
                <h1 className="news-title">
                  <a href="news-single.html">
                  The COVID-19 Vaccine Can Impact 
                  Mammograms. What You Should Do (and Why You Shouldn’t Worry!)..
                  </a>
                </h1>
                {/* Meta */}
                <div className="meta">
                  <div className="meta-left">
                    <span className="author">
                      <a href="#">
                        <img src="img/author1.jpg" alt="#" />
                     babar ali
                      </a>
                    </span>
                    <span className="date">
                      <i className="fa fa-clock-o" />
                      02 Dec 2023
                    </span>
                  </div>
                  <div className="meta-right">
                    <span className="comments">
                      <a href="#">
                        <i className="fa fa-comments" />
                        5k Comments
                      </a>
                    </span>
                    <span className="views">
                      <i className="fa fa-eye" />
                      2M Views
                    </span>
                  </div>
                </div>
                {/* News Text */}
                <div className="news-text">
                  <p>
                  In early 2021, a team of Penn Medicine radiologists
                   began to notice a rise in axillary lymphadenopathy 
                   (swollen lymph nodes in the armpits) on multiple types of
                    breast imaging (mammography, ultrasound and MRI).

                  Axillary lymphadenopathy can be a sign of breast cancer.
                   In most of the women, though, the swelling subsided within weeks.
                    Subsequent tests and scans showed no evidence of breast cancer.
                  
                  Good news, ultimately – but why was this happening? Why the 
                  sudden rise in enlarged lymph nodes in the arm pit?.
                  </p>
                  <p>
                  Axillary lymphadenopathy can be a sign of breast cancer. 
                  In most of the women, though, the swelling subsided within weeks.
                   Subsequent tests and scans showed no evidence of breast cancer.

                  Good news, ultimately – but why was this happening? 
                  Why the sudden rise in enlarged lymph nodes in the arm pit?
                  </p>
                  <div className="image-gallery">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-image">
                          <img src="img/blog2.jpg" alt="#" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-image">
                          <img src="img/blog3.jpg" alt="#" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                  We suspected a correlation between these abnormal mammograms 
                  and the COVID-19 vaccine, but didn't know for sure,” says Christine Edmonds, MD, 
                  breast radiologist at the Hospital of the University of Pennsylvania (HUP).
                  </p>
                  <blockquote className="overlay">
                    <p>
                    What We Now Know
                    </p>
                  </blockquote>
                  <p>
                  “We perform successful breast biopsies every day, but like any procedure 
                  involving a needle, it comes with risk,” Dr. Edmonds says. “So before we
                  
                  biopsy, we want to make sure that risk is justified. Just as importantly
                  , a false positive on a mammogram can induce anxiety in patients and other
                   hassles: Worry, scheduling and attending appointments, biopsy discomfort,
                    the wait for 
                  results. We don’t want women to experience any of these things unnecessarily.”.
                  </p>
                  <p>
                  What We Now Know
                  </p>
                </div>
                <div className="blog-bottom">
                  {/* Social Share */}
                  <ul className="social-share">
                    <li className="facebook">
                      <a href="#">
                        <i className="fa fa-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fa fa-twitter" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li className="google-plus">
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li className="linkedin">
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li className="pinterest">
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                  </ul>
                  {/* Next Prev */}
                  <ul className="prev-next">
                    <li className="prev">
                      <a href="#">
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li className="next">
                      <a href="#">
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                  {/*/ End Next Prev */}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="blog-comments">
                <h2>All Comments</h2>
                <div className="comments-body">
                  {/* Single Comments */}
                  <div className="single-comments">
                    <div className="main">
                      <div className="head">
                        <img src="img/author1.jpg" alt="#" />
                      </div>
                      <div className="body">
                        <h4>Fatima Ahmad</h4>
                        <div className="comment-meta">
                          <span className="meta">
                            <i className="fa fa-calendar" />
                            Dec 05, 2023
                          </span>
                          <span className="meta">
                            <i className="fa fa-clock-o" />
                            09:38 Pm
                          </span>
                        </div>
                        <p>
                          Lorem Ipsum available, but the majority have suffered
                        </p>
                        <a href="#">
                          <i className="fa fa-reply" />
                          replay
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*/ End Single Comments */}
                  {/* Single Comments */}
                  <div className="single-comments left">
                    <div className="main">
                      <div className="head">
                        <img src="img/author2.jpg" alt="#" />
                      </div>
                      <div className="body">
                        <h4>Ali Hassan</h4>
                        <div className="comment-meta">
                          <span className="meta">
                            <i className="fa fa-calendar" />
                            Dec 10, 2023
                          </span>
                          <span className="meta">
                            <i className="fa fa-clock-o" />
                            12:8 AM
                          </span>
                        </div>
                        <p>
                          Lorem Ipsum available, but the majority have suffered
                      
                         
                        </p>
                        <a href="#">
                          <i className="fa fa-reply" />
                          replay
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*/ End Single Comments */}
                  {/* Single Comments */}
                  <div className="single-comments">
                    <div className="main">
                      <div className="head">
                        <img src="img/author3.jpg" alt="#" />
                      </div>
                      <div className="body">
                        <h4>Rida </h4>
                        <div className="comment-meta">
                          <span className="meta">
                            <i className="fa fa-calendar" />
                            Dec 12, 2023
                          </span>
                          <span className="meta">
                            <i className="fa fa-clock-o" />
                            10:20 pm
                          </span>
                        </div>
                        <p>
                          Lorem Ipsum available,  Mirum est notare quam littera
                          gothica, quam nunc putamus parum claram, anteposuerit
                          litterarum formas
                        </p>
                        <a href="#">
                          <i className="fa fa-reply" />
                          replay
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*/ End Single Comments */}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="comments-form">
                <h2>Leave Comments</h2>
                {/* Contact Form */}
                <form className="form" method="post" action="mail/mail.php">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group">
                        <i className="fa fa-user" />
                        <input
                          type="text"
                          name="first-name"
                          placeholder="First name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group">
                        <i className="fa fa-envelope" />
                        <input
                          type="text"
                          name="last-name"
                          placeholder="Last name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group">
                        <i className="fa fa-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group message">
                        <i className="fa fa-pencil" />
                        <textarea
                          name="message"
                          rows={7}
                          placeholder="Type Your Message Here"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group button">
                        <button type="submit" className="btn primary">
                          <i className="fa fa-send" />
                          Submit Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/*/ End Contact Form */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="main-sidebar">
            {/* Single Widget */}
            <div className="single-widget search">
              <div className="form">
                <input type="email" placeholder="Search Here..." />
                <a className="button" href="#">
                  <i className="fa fa-search" />
                </a>
              </div>
            </div>
            {/*/ End Single Widget */}
            {/* Single Widget */}
            <div className="single-widget category">
              <h3 className="title">Blog Categories</h3>
              <ul className="categor-list">
                <li>
                  <a href="#">Medlocate1</a>
                </li>
                <li>
                  <a href="#">Medlocate1</a>
                </li>
                <li>
                  <a href="#">Medlocate1</a>
                </li>
                <li>
                  <a href="#">Medlocate1</a>
                </li>
                <li>
                  <a href="#">Medlocate1</a>
                </li>
              </ul>
            </div>
            {/*/ End Single Widget */}
            {/* Single Widget */}
            <div className="single-widget recent-post">
              <h3 className="title">Recent post</h3>
              {/* Single Post */}
              <div className="single-post">
                <div className="image">
                  <img src="img/blog-sidebar1.jpg" alt="#" />
                </div>
                <div className="content">
                  <h5>
                    <a href="#">We have annnocuced  Mage Offer.</a>
                  </h5>
                  <ul className="comment">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      Npv 11, 2023
                    </li>
                    <li>
                      <i className="fa fa-commenting-o" aria-hidden="true" />
                      322
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Post */}
              {/* Single Post */}
              <div className="single-post">
                <div className="image">
                  <img src="img/blog-sidebar2.jpg" alt="#" />
                </div>
                <div className="content">
                  <h5>
                    <a href="#">Medlocate post 3.</a>
                  </h5>
                  <ul className="comment">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      Nov 26, 2023
                    </li>
                    <li>
                      <i className="fa fa-commenting-o" aria-hidden="true" />
                      5K
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Post */}
              {/* Single Post */}
              <div className="single-post">
                <div className="image">
                  <img src="img/blog-sidebar3.jpg" alt="#" />
                </div>
                <div className="content">
                  <h5>
                    <a href="#">Medlocate 4.</a>
                  </h5>
                  <ul className="comment">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      Oct 28, 2023
                    </li>
                    <li>
                      <i className="fa fa-commenting-o" aria-hidden="true" />
                      4k
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Post */}
            </div>
            {/*/ End Single Widget */}
            {/* Single Widget */}
            {/*/ End Single Widget */}
            {/* Single Widget */}
            <div className="single-widget side-tags">
              <h3 className="title">Tags</h3>
              <ul className="tag">
                <li>
                  <a href="#">Medlocate1</a>
                </li>
                <li>
                  <a href="#">Medlocate1</a>
                </li>
                <li>
                  <a href="#">Medlocate1</a>
                </li>
                <li>
                  <a href="#">Medlocate1</a>
                </li>
                <li>
                  <a href="#">Medlocate1</a>
                </li>
                <li>
                  <a href="#">Medlocate1</a>
                </li>
                <li>
                  <a href="#">Medlocate1</a>
                </li>
              </ul>
            </div>
            {/*/ End Single Widget */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/ End Single News */}

 
  
</>
</Layout>
    
    
  
  )
}
