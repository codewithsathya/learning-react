import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    return this.state.tags.length === 0 ? (
      <p>There are no tags</p>
    ) : (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <React.Fragment>{this.renderTags()}</React.Fragment>;
  }
}

export default Counter;
