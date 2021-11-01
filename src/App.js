import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    newItem: "",
    dept: "",
    rating: "",
    list: [],
    visible: true,
    formVisible: true,
    backVisible: false,
    dataVisible: false,
  };

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem(e) {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem,
      dept: this.state.dept,
      rating: this.state.rating,
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: "",
      dept: "",
      rating: "",
      visible: false,
      formVisible: false,
      backVisible: true,
      dataVisible: true,
    });
  }

  goBack() {
    this.setState({
      visible: true,
      formVisible: true,
      backVisible: false,
      dataVisible: false,
    });
  }

  checkHandle(e) {
    this.state.rating.length === 0 ||
    this.state.dept.length === 0 ||
    this.state.newItem.length === 0
      ? alert("fill all feilds")
      : this.addItem();
  }

  render() {
    return (
      <div className="form">
        <h1>Employee Feedback {this.state.visible ? "Form" : "Data"}</h1>
        <div
          className="Display"
          style={{ display: this.state.formVisible ? "flex" : "none" }}
        >
          <div>
            {" "}
            <label>
              Name :
              <input
                className="input input1"
                value={this.state.newItem}
                onChange={(e) => this.updateInput("newItem", e.target.value)}
              />
            </label>
            <br />
            <label>
              Department :
              <input
                className="input input2"
                value={this.state.dept}
                onChange={(e) => this.updateInput("dept", e.target.value)}
              />
            </label>
            <br />
            <label>
              Rating :
              <input
                type="number"
                className="input input3"
                value={this.state.rating}
                onChange={(e) => this.updateInput("rating", e.target.value)}
              />
            </label>
            <br />
            <button
              id="submit"
              className="btn"
              onClick={(e) => this.checkHandle()}
            >
              Submit
            </button>
          </div>
        </div>

        <ul
          className="listOf"
          style={{
            visibility: this.state.formVisible ? "hidden" : "visible",
          }}
        >
          {this.state.list.map((item) => {
            return (
              <li style={{ margin: "1.5rem" }} key={item.id}>
                Name : {item.value} | Department : {item.dept} | Rating :
                {item.rating}
              </li>
            );
          })}
        </ul>

        <button
          className="goback"
          style={{
            display: this.state.backVisible ? "block" : "none",
          }}
          onClick={() => this.goBack()}
          className="btn"
        >
          Go Back{" "}
        </button>
      </div>
    );
  }
}

export default App;
