import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import cityList from "./city.list.min.json";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead-bs4.css";

class App extends Component {
  state = {
    color: "RED",
    img: 'url("https://wallpapercave.com/wp/aLUDwDa.jpg")',
    //img: 'url("images/city.jpg")',
    city: "Salt Lake City"
  };

  testHandler = () => {
    console.log("HSIEFHISEHFSIF");

    //let data = JSON.parse(cityList);
    console.log(cityList);
    //let newState = Object.assign({}, this.state);
    // newState = {};
    //.city = "LULUL";
    //.color = "BLUE";
    //newState.img = 'url("images/city.jpg")';
    this.setState({
      color: "WHITE",
      img: 'url("images/city.jpg")',
      city: "LULULULUL"
    });
  };

  render() {
    console.log("in render method");
    console.log("color inside render method: " + this.state.color);
    var divImage = {
      //background: this.state.color
      color: this.state.color,
      background: this.state.img
    };

    var divImage2 = {
      flex: 1,
      //backgroundColor: "rgba(0,0,0,.6"
      background: "rgba(0,0,0,.5)"
    };
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      // <div className="container">
      //   <div className="row align-items-start">
      //     <div className="col-sm">One of three columns</div>
      //     <div className="col-sm">One of three columns</div>
      //     <div className="col-sm">One of three columns</div>
      //     <div className="col-sm">One of three columns</div>
      //     <div className="col-sm">One of five columns</div>
      //   </div>
      // </div>
      // <div>
      //   <div className="fullscreen" style={divImage}>
      //     <div className="fullscreen2" style={divImage2}>
      //       <h1 className="display-2">Salt Lake City</h1>
      //       <div className="container mt-5">
      //         <div className="row align-self-end">
      //           <div className="col">
      //             <img
      //               src="https://picsum.photos/200"
      //               className="rounded-circle"
      //               alt="Europe"
      //             />
      //             <div className="caption">
      //               <p>
      //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      //                 Ab, quisquam?
      //               </p>
      //             </div>
      //           </div>
      //           <div className="col">One of three columns</div>
      //           <div className="col">One of three columns</div>
      //           <div className="col">One of three columns</div>
      //           <div className="col">One of three columns</div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      // <div className="fullscreen" style={divImage}>
      //   <div className="fullscreen" style={divImage2}>
      //     <h1 className="display-2">{this.state.city}</h1>
      //     <div className="container mt-5">
      //       <div className="row align-self-end">
      //         <div className="col">
      //           {/* <img
      //             src="https://picsum.photos/200"
      //             className="rounded-circle"
      //             alt="Europe"
      //           />
      //           <div className="caption">
      //             <p>
      //               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      //               Ab, quisquam?
      //             </p>
      //           </div> */}
      //           <h2 className="display-5">MON</h2>
      //           <button onClick={this.testHandler}>TEST</button>
      //         </div>
      //         <div className="col">
      //           <h2 className="display-5">TUE</h2>
      //         </div>
      //         <div className="col">
      //           <h2 className="display-5">WED</h2>
      //         </div>
      //         <div className="col">
      //           <h2 className="display-5">THU</h2>
      //         </div>
      //         <div className="col">
      //           <h2 className="display-5">FRI</h2>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className="fullscreen" style={divImage}>
        <div className="fullscreen" style={divImage2}>
          <h1 className="display-2">{this.state.city}</h1>
          <div className="container mt-5">
            <div className="row align-self-end">
              <div className="col">
                {/* <img
                  src="https://picsum.photos/200"
                  className="rounded-circle"
                  alt="Europe"
                />
                <div className="caption">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab, quisquam?
                  </p>
                </div> */}
                <h2 className="display-5">MON</h2>
                <button onClick={this.testHandler}>TEST</button>
              </div>
              <div className="col">
                <h2 className="display-5">TUE</h2>
              </div>
              <div className="col">
                <h2 className="display-5">WED</h2>
              </div>
              <div className="col">
                <h2 className="display-5">THU</h2>
              </div>
              <div className="col">
                <h2 className="display-5">FRI</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
