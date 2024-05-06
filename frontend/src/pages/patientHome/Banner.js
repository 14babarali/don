import React, { Component } from 'react'


import PropTypes from 'prop-types'; // Import PropTypes for type-checking

export default class Banner extends Component {
 
  render() {
    const { image, title } = this.props;
    return (
        <>
       
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        body {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            min-height: 100vh;\n            margin: 0;\n            font-family: Arial, sans-serif;\n        }\n        .container {\n            text-align: center;\n            position: relative;\n        }\n        #rectangleImage {\n            max-width: 100%;\n            height: auto;\n        }\n        .heading-2 {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            background: rgba(255, 255, 255, 0.7);\n            padding: 20px;\n            border-radius: 5px;\n        }\n        .heading-1 {\n            font-weight: bold;\n            font-size: 24px; /* Adjust the text size as needed */\n        }\n        .paragraph-122 {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, 0);\n        }\n        .paragraph-14 {\n            font-size: 16px; /* Adjust the text size as needed */\n        }\n    "
          }}
        />
       <div className="container">
          <img id="rectangleImage" src={image} alt="Banner" />
          <div id="services" className="heading-2">
            <div className="heading-1">{title}</div>
          </div>
        </div>
       
      </>
      
    )
  }
}
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};