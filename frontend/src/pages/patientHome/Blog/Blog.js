// Blog.js
import React, { Component } from 'react';
import './Blog.css'; // Replace with your actual CSS file

export default class Blog extends Component {
  render() {
    return (
      <div className="blog-container">
        <h1>Welcome to Our Blog</h1>
        <div className="blog-posts">
          {/* Dummy Blog Post 1 */}
          <div className="blog-post">
            <h2>Post Title 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, metus eget
              accumsan tincidunt, nulla enim egestas elit, ut porttitor libero nisl id augue.
            </p>
          </div>

          {/* Dummy Blog Post 2 */}
          <div className="blog-post">
            <h2>Post Title 2</h2>
            <p>
              Fusce non enim sem. Vestibulum ut fermentum velit. Quisque euismod justo id odio
              sagittis, vel fermentum augue porttitor.
            </p>
          </div>

          {/* Add more blog posts */}
        </div>
      </div>
    );
  }
}
