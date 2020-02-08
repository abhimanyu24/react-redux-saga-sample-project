import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  state = {
    form: {
      name: "",
      newField: "",
      field2: ""
    }
  };
  handleSubmit = e => {
    console.log("form submitted", e);
    console.log("this.state.form", this.state.form);
    this.props.onNameChange(this.state.form.name);
    e.preventDefault();
  };
  handleOnChangeLegacy = event => {
    this.setState({ form: { inputVal: event.target.value } });
  };
  handleOnChange = (key, value) => {
    const newForm = {
      ...this.state.form,
      [key]: value
    };
    this.setState({ form: newForm });
  };
  render() {
    const { userLoading } = this.props;

    const isLoading = this.props.loading;
    if (isLoading) {
      return <span>Super Loading......</span>;
    }
    if (userLoading) {
      return <span>User Loading......</span>;
    }

    return (
      <div className="App">
        <div className="Age-label">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <span>your age: {this.props.age}</span>
          )}
        </div>
        <span>{this.props.currentUser.name}</span>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={event => this.handleOnChange("name", event.target.value)}
            value={this.state.form.name}
          />
          <input
            type="text"
            onChange={event =>
              this.handleOnChange("newField", event.target.value)
            }
            value={this.state.form.newField}
          />
          <input
            type="text"
            onChange={event =>
              this.handleOnChange("field2", event.target.value)
            }
            value={this.state.form.field2}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age.age,
    loading: state.age.loading,
    userLoading: state.currentUser.loading,
    currentUser: state.currentUser.currentUser
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onNameChange: name => dispatch({ type: "CHANGE_USER", name: name })
  };
};
export default connect(mapStateToProps, mapDispachToProps)(App);
