import React, { Component } from "react";
import "./BlogItem.css";
import PlantData from "../../data";

class BlogItem extends Component {
  render() {
    // const { id, name, image } = this.props.blogpost;
    return (
      <div>
        {/* works after deleting nav and footer imports; and the components; */}
        <h3>title of blog item</h3>
        <h3>testing</h3>
        <p>description of the blog item</p>
      </div>
    );
  }
}

export default BlogItem;
