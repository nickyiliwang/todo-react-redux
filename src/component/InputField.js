import React from "react";

class InputField extends React.Component {
  state = {
    term: ""
  };

  onInputHandler = e => {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted fluid action input">
          <input
            onChange={this.onInputHandler}
            type="text"
            placeholder="Enter Task ..."
          />
          <button className="ui button primary">ADD</button>
          <button className="ui button negative">RESET</button>
        </div>
      </div>
    );
  }
}

export default InputField;
