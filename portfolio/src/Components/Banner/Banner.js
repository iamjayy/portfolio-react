import React from "react";
import "./Banner.css";

export class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <article className="banner-text">
          <h1>{this.props.name}</h1>
          <p>{this.props.title}</p>
        </article>
      </div>
    );
  }
}
