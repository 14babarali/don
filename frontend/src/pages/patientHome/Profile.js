import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, City, Country',
      username: 'johndoe123',
      image: '',
      isEditing: false,
    };
  }

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    this.setState({ isEditing: false });
    // Perform the update operation, e.g., send data to a server.
  };

  handleDelete = () => {
    // Implement the logic to delete the user's profile here.
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, phone, address, username, image, isEditing } = this.state;

    return (
      <div className="container mt-5">
        <h2 className="mb-4">Profile</h2>
        <div className="row">
          <div className="col-md-3">
            <img src={image} alt="User" className="img-fluid rounded-circle" />
            {isEditing && (
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={this.handleInputChange}
                className="mt-2"
              />
            )}
          </div>
          <div className="col-md-9">
            <div className="form-group">
              <label>Name:</label>
              {isEditing ? (
                <input name="name" value={name} onChange={this.handleInputChange} className="form-control" />
              ) : (
                <p>{name}</p>
              )}
            </div>
            <div className="form-group">
              <label>Email:</label>
              {isEditing ? (
                <input name="email" value={email} onChange={this.handleInputChange} className="form-control" />
              ) : (
                <p>{email}</p>
              )}
            </div>
            <div className="form-group">
              <label>Phone:</label>
              {isEditing ? (
                <input name="phone" value={phone} onChange={this.handleInputChange} className="form-control" />
              ) : (
                <p>{phone}</p>
              )}
            </div>
            <div className="form-group">
              <label>Address:</label>
              {isEditing ? (
                <input name="address" value={address} onChange={this.handleInputChange} className="form-control" />
              ) : (
                <p>{address}</p>
              )}
            </div>
            <div className="form-group">
              <label>Username:</label>
              {isEditing ? (
                <input name="username" value={username} onChange={this.handleInputChange} className="form-control" />
              ) : (
                <p>{username}</p>
              )}
            </div>
          </div>
        </div>
        {isEditing ? (
          <button onClick={this.handleSave} className="btn btn-primary">
            Save
          </button>
        ) : (
          <button onClick={this.handleEdit} className="btn btn-info">
            Edit
          </button>
        )}
        <button onClick={this.handleDelete} className="btn btn-danger ml-2">
          Delete Profile
        </button>
      </div>
    );
  }
}

export default Profile;
