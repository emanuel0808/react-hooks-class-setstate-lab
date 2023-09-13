import React, { Component } from "react";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "All",
    };
  }

  handleCategoryChange = (e) => {
    this.setState({ selectedCategory: e.target.value });
  };

  render() {
    const { items } = this.props;
    const { selectedCategory } = this.state;

    const filteredItems =
      selectedCategory === "All"
        ? items
        : items.filter((item) => item.category === selectedCategory);

    return (
      <div>
        <select onChange={this.handleCategoryChange}>
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Produce">Produce</option>
          <option value="Dessert">Dessert</option>
        </select>
        <ul className="Items">
          {filteredItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.category}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
