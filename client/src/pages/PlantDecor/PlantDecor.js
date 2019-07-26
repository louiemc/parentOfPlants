import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import BlogItem from "../../components/BlogItem/BlogItem";
import "./PlantDecor.css";
import PlantData from "../../data.json";
// import Plants from "../Plants/Plants";

class PlantDecor extends Component {
  render() {
    return (
      // return this.props.plants.map (blogpost => (
      <div>
        <Nav />
        <h1 className="blogPageTitle">A Healthier Mind and Greener Home</h1>

        {/* <BlogItem key={PlantData.id} blogpost={blogpost} /> */}
        {/* <BlogItem /> */}

        <div className="blogBody">

        <p>Under Construction</p>

          {/* <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div>

          <div className="blogDiv">
            <a href="" target="blank">
              <img src="" alt="blog post image" className="blogImage" />
              <p className="blogTitle">Title of Blog</p>
            </a>
          </div> */}


        </div>

        <Footer />
      </div>
    );
  }
}

export default PlantDecor;
