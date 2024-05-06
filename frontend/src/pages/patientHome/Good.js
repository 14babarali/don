import React, { Component } from 'react';
//import PharmacyProfile from '../assets/PharmacyProfile.png'; 
// import Profile from '../assets/Profile.png';
import PHProfile from './PHProfile'
// Import your updated PharmacyProfile component
// import outsourcing_1_1_282 from '/outsourcing 1_1_282.png';
class Good extends Component {
  state = {
    displayedPharmacies: 4, // Initialize the number of displayed pharmacies
  };

  handleViewMore = () => {
    // Function to handle "View More" button click
    this.setState((prevState) => ({
      displayedPharmacies: prevState.displayedPharmacies + 4, // Show 4 more pharmacies on each click
    }));
  };

  // Sample nearby pharmacies data with logos
  nearbyPharmacies = [
    {
      name: 'Pharmacy A',
      address: '123 Main St',
      phone: '555-123-4567',
      website: 'https://pharmacy-a.com',
      logoUrl: 'URL_TO_LOGO_A', // Provide the URL to the logo
    },
    {
      name: 'Pharmacy B',
      address: '456 Elm St',
      phone: '555-987-6543',
      website: 'https://pharmacy-b.com',
      logoUrl: 'URL_TO_LOGO_B', // Provide the URL to the logo
    },
    {
      name: 'Pharmacy A',
      address: '123 Main St',
      phone: '555-123-4567',
      website: 'https://pharmacy-a.com',
      logoUrl: 'URL_TO_LOGO_A', // Provide the URL to the logo
    },
    {
      name: 'Pharmacy B',
      address: '456 Elm St',
      phone: '555-987-6543',
      website: 'https://pharmacy-b.com',
      // Provide the URL to the logo
    }, {
      name: 'Pharmacy A',
      address: '123 Main St',
      phone: '555-123-4567',
      website: 'https://pharmacy-a.com',
      logoUrl: 'URL_TO_LOGO_A', // Provide the URL to the logo
    },
    {
      name: 'Pharmacy B',
      address: '456 Elm St',
      phone: '555-987-6543',
      website: 'https://pharmacy-b.com',
      logoUrl: 'URL_TO_LOGO_B', // Provide the URL to the logo
    }, {
      name: 'Pharmacy A',
      address: '123 Main St',
      phone: '555-123-4567',
      website: 'https://pharmacy-a.com',
      logoUrl: 'URL_TO_LOGO_A', // Provide the URL to the logo
    },
    {
      name: 'Pharmacy B',
      address: '456 Elm St',
      phone: '555-987-6543',
      website: 'https://pharmacy-b.com',
      logoUrl: 'URL_TO_LOGO_B', // Provide the URL to the logo
    }, {
      name: 'Pharmacy A',
      address: '123 Main St',
      phone: '555-123-4567',
      website: 'https://pharmacy-a.com',
      logoUrl: 'URL_TO_LOGO_A', // Provide the URL to the logo
    },
    {
      name: 'Pharmacy B',
      address: '456 Elm St',
      phone: '555-987-6543',
      website: 'https://pharmacy-b.com',
      logoUrl: 'URL_TO_LOGO_B', // Provide the URL to the logo
    }, {
      name: 'Pharmacy A',
      address: '123 Main St',
      phone: '555-123-4567',
      website: 'https://pharmacy-a.com',
      logoUrl: 'URL_TO_LOGO_A', // Provide the URL to the logo
    },
    {
      name: 'Pharmacy B',
      address: '456 Elm St',
      phone: '555-987-6543',
      website: 'https://pharmacy-b.com',
      logoUrl: 'URL_TO_LOGO_B', // Provide the URL to the logo
    },
    // Add more pharmacy data objects here
  ];

  render() {
    const { displayedPharmacies } = this.state;

    return (
      <div>
        <br></br>
        <br></br>
       <div class="text-center">
  <h1 class="font-weight-bold">Near By Pharmacy </h1>
  <p class="text-large"> Are you looking near By Pharmacy.</p>
</div>
        <section className="container mt-4">
          <div className="row">
            {this.nearbyPharmacies.slice(0, displayedPharmacies).map((pharmacy, index) => (
              <PHProfile key={index} {...pharmacy} />
            ))}
          </div>
        </section>
        {displayedPharmacies < this.nearbyPharmacies.length && (
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={this.handleViewMore}>
              View More
            </button>
            <br></br>
            <br></br>
          </div>
        )}
      </div>
    );
  }
}

export default Good;
