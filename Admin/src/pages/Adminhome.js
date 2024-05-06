import React from 'react'
import AdminPanelLayout from '../components/AdminPanelLayout'
import './admi.css';
import Sidebar from '../components/Sidebar'
export default function Adminhome() {

     const medicines = [
        {
            id: 1,
            name: 'Medicine A',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'https://example.com/medicine-a.jpg', // Replace with actual image URL
       },
        {
            id: 2,
            name: 'Medicine A',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'https://example.com/medicine-a.jpg', // Replace with actual image URL
       },
         {
            id: 2,
            name: 'Medicine A',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'https://example.com/medicine-a.jpg', // Replace with actual image URL
        },
        // Add more medicine objects as needed
  ];
  
      const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            quote: 'The MedLocate platform has been a game-changer for our pharmacy!',
            imageUrl: 'https://example.com/john-doe.jpg', // Replace with actual image URL
        },
        // Add more testimonials as needed
    ];

    // Replace with actual announcement data
    const announcements = [
        {
            id: 1,
            title: 'New Medicine Available!',
            content: 'We now have Medicine X in stock. Get yours today!',
        },
        // Add more announcements as needed
    ];

    // Replace with actual medicine categories
    const medicineCategories = ['Pain Relievers', 'Antibiotics', 'Vitamins'];

    // Replace with actual pharmacy partnership data
    const pharmacyPartnerships = [
        {
            id: 1,
            name: 'ABC Pharmacy',
            logoUrl: 'https://example.com/abc-pharmacy-logo.png', // Replace with actual logo URL
        },
        // Add more pharmacy partnerships as needed
    ];

  return (

    <>


 
    <AdminPanelLayout>    </AdminPanelLayout>
      <h2>Admin</h2>

   <div className="admin-panel">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Admin Panel</a>
                    {/* Add navigation links here */}
                </div>
            </nav>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                        {/* Main content */}
                        <h1>Welcome to the Admin Panel</h1>
                        <p>
                            Your project aims to create a platform that helps patients find and acquire their required medicines efficiently. Here are some features you can add:
                        </p>
                        <ul>
                            <li>Dashboard overview with key metrics</li>
                            <li>Medicine requests management</li>
                            <li>Pharmacy management</li>
                            <li>Notifications and reminders</li>
                            <li>Chat history</li>
                            <li>User account management</li>
                        </ul>

                        {/* Featured Medicines Section */}
                        <section className="featured-medicines">
                           <div className="featured-medicines">
            <div className="container">
                <div className="row">
                    {medicines.map((medicine) => (
                        <div key={medicine.id} className="col-md-4">
                            <div className="card">
                                <img src={medicine.imageUrl} alt={medicine.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{medicine.name}</h5>
                                    <p className="card-text">{medicine.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
                        </section>

                      <section className="testimonials">
                <div className="container">
                    <div className="row">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="col-md-4">
                                <div className="card">
                                    <img src={testimonial.imageUrl} alt={testimonial.name} className="card-img-top" />
                                    <div className="card-body">
                                        <p className="card-text">{testimonial.quote}</p>
                                        <p className="card-text">{testimonial.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Announcements and Alerts Section */}
            <section className="announcements">
                <div className="container">
                    <div className="row">
                        {announcements.map((announcement) => (
                            <div key={announcement.id} className="col-md-6">
                                <div className="alert alert-info" role="alert">
                                    <strong>{announcement.title}</strong> {announcement.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Medicine Categories Section */}
            <section className="medicine-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Medicine Categories</h3>
                            <ul>
                                {medicineCategories.map((category) => (
                                    <li key={category}>{category}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pharmacy Partnerships Section */}
            <section className="pharmacy-partnerships">
                <div className="container">
                    <div className="row">
                        {pharmacyPartnerships.map((pharmacy) => (
                            <div key={pharmacy.id} className="col-md-3">
                                <img src={pharmacy.logoUrl} alt={pharmacy.name} className="img-fluid" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


                        {/* Call to Action (CTA) */}
                        <div className="cta">
                            <div className="cta">
    <button className="btn btn-primary mr-3">Register Now</button>
    <button className="btn btn-success">Request Medicine</button>
</div>
              </div>
              
               <h2 style={{ color: '#3AAFA9' }}>Admin</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', width: '45%', marginBottom: '20px' }}>
          <h3 style={{ color: '#17252A' }}>User Management</h3>
          <p style={{ color: '#3AAFA9' }}>Admin should be able to create, update, and delete accounts.</p>
          <p style={{ color: '#3AAFA9' }}>Admin can view the list of registered patients and pharmacy owners.</p>
          <p style={{ color: '#3AAFA9' }}>Admin can deactivate/reactivate patient and pharmacy accounts.</p>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', width: '45%', marginBottom: '20px' }}>
          <h3 style={{ color: '#17252A' }}>Medicine Requests</h3>
          <p style={{ color: '#3AAFA9' }}>Patients can send messages requesting their required medicines.</p>
          <p style={{ color: '#3AAFA9' }}>Pharmacies can respond with a "Yes" or "No" to fulfill the request.</p>
          <p style={{ color: '#3AAFA9' }}>If a pharmacy responds with "Yes", a chat option is enabled for the patient and pharmacy to communicate.</p>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', width: '45%', marginBottom: '20px' }}>
          <h3 style={{ color: '#17252A' }}>Profile Operations</h3>
          <p style={{ color: '#3AAFA9' }}>Patients and pharmacists can log in and access chat and order history.</p>
          <p style={{ color: '#3AAFA9' }}>Helps to review issues.</p>
        </div>
      </div>
                    </div>
                </div>
            </div>
        </div>
  
  
         </>
  
  )
}
