import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import cityList from "./city.list.min.json";

import "./components/WeatherCard.js";
import WeatherCard from "./components/WeatherCard.js";

// import { Typeahead } from "react-bootstrap-typeahead";
// import "react-bootstrap-typeahead/css/Typeahead.css";
// import "react-bootstrap-typeahead/css/Typeahead-bs4.css";
// import { asyncContainer } from "react-bootstrap-typeahead";
// const AsyncTypeahead = asyncContainer(Typeahead);

class App extends Component {
  state = {
    color: "RED",
    img: 'url("https://wallpapercave.com/wp/aLUDwDa.jpg")',
    //img: 'url("images/city.jpg")',
    city: "Salt Lake City",
    isLoading: false,

    weatherCards: [
      {
        id: 0,
        weatherImg: "http://openweathermap.org/img/w/13d.png",
        weatherStatus: "Rainy",
        tempC: 21,
        dateString: "2019-01-24 21:00:00"
      },
      {
        id: 1,
        weatherImg: null,
        weatherStatus: null,
        tempC: null
      },
      {
        id: 2,
        weatherImg: null,
        weatherStatus: null,
        tempC: null
      },
      {
        id: 3,
        weatherImg: null,
        weatherStatus: null,
        tempC: null
      },
      {
        weatherImg: null,
        weatherStatus: null,
        tempC: null
      }
    ]
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

  testInputHandler = () => {
    console.log("INPUT HANDLER");
  };

  _handleSearch = query => {
    this.setState({ isLoading: true });
    // console.log("query is: " + query);
    // console.log("loading: " + this.state.isLoading);
    // this.setState({ isLoading: false });
    let ourRequest = new XMLHttpRequest();
    ourRequest.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/forecast?q=${query},us&mode=JSON&APPID=174645155f8e4d456c204f31cacf19af&units=metric`
    );
    ourRequest.onload = () => {
      //console.log(ourRequest.responseText);
      let data = JSON.parse(ourRequest.responseText);
      console.log(data);
    };

    ourRequest.send();
  };

  render() {
    console.log("in render method");
    console.log("color inside render method: " + this.state.color);
    console.log("selected: ");
    console.log(this.state.selected);
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
                {/* <h2 className="display-5" /> */}
                <WeatherCard
                  key={this.state.weatherCards[0].id}
                  weatherInfo={this.state.weatherCards[0]}
                />
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
          {/* <Typeahead
            // labelKey={option => `${option.firstName} ${option.lastName}`}
            //labelKey={option => `${option.name}, ${option.country}`}
            labelKey={option => option.name}
            ref={typeahead => (this.typeahead = typeahead)}
            onChange={selected => {
              this.setState({ selected });
              this.testInputHandler();
              if (selected.length) {
                this.typeahead.getInstance().clear();
              }
            }}
            // options={[
            //   { firstName: "Art", lastName: "Blakey" },
            //   { firstName: "John", lastName: "Coltrane" },
            //   { firstName: "Miles", lastName: "Davis" },
            //   { firstName: "Herbie", lastName: "Hancock" },
            //   { firstName: "Charlie", lastName: "Parker" },
            //   { firstName: "Tony", lastName: "Williams" }
            // ]}
            options={cityList}
            selected={this.state.selected}
            maxResults={10}
            placeholder="Select a city..."
          /> */}
          {/* ); */}
        </div>
      </div>
    );
  }
}

export default App;
