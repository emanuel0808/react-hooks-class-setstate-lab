import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: false,
    };
  }

  toggleInCart = () => {
    this.setState((prevState) => ({
      inCart: !prevState.inCart,
    }));
  };

  render() {
    const { name, category } = this.props;
    const { inCart } = this.state;

    return (
      <li className={inCart ? "in-cart" : ""} onClick={this.toggleInCart}>
        {name} - {category}
      </li>
    );
  }
}

export default Item;
