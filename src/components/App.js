import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "light",
    };
  }

  toggleMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === "light" ? "dark" : "light",
    }));
  };

  render() {
    const { mode } = this.state;
    return (
      <div className={mode}>
        <button onClick={this.toggleMode}>Toggle Mode</button>
      </div>
    );
  }
}

export default App;
