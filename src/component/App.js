import React from "react";
import InputField from "./InputField";
import RenderList from "./RenderList";
import Header from "./Header";


class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <InputField />
        <RenderList />
      </div>
    );
  }
}

export default App;
