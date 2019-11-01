import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:3000/"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
        <h1>Saint-Petersburg</h1>
          {response
              ? <p>
                The temperature is: {response} °F
              </p>
              : <p>Loading...</p>}
        </div>
    );
  }
}
export default App;