import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
//import cityList from "./city.list.min.json";

import "./components/WeatherCard.js";
import WeatherCard from "./components/WeatherCard.js";
import SearchBar from "./components/SearchBar.js";

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

    cardIdCurrentlyHover: null,
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
    ],

    shouldShow: false
  };

  componentDidMount = () => {
    this.userSubmitHandler(5809844, "Seattle");
  };

  mouseOverCardHandler = id => {
    this.setState({ shouldShow: true, cardIdCurrentlyHover: id });
  };

  mouseOutCardHandler = () => {
    this.setState({ shouldShow: false });
  };

  testHandler = () => {
    console.log("HSIEFHISEHFSIF");
    //let data = JSON.parse(cityList);
    //console.log(cityList);
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

  userSubmitHandler = (cityID, cityName) => {
    let ourRequest = new XMLHttpRequest();

    console.log("this: " + this);

    //openweather request
    ourRequest.onreadystatechange = () => {
      if (ourRequest.readyState === 4 && ourRequest.status === 200) {
        let data = JSON.parse(ourRequest.responseText);
        console.log(data);
        this.updateWeatherData(data);
      }
    };
    ourRequest.open(
      "GET",
      //"https://api.openweathermap.org/data/2.5/forecast?zip=84106&APPID=174645155f8e4d456c204f31cacf19af&units=metric"
      `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=metric&APPID=174645155f8e4d456c204f31cacf19af`
    );
    ourRequest.send();

    //flickR request
    // let flickrRequest = new XMLHttpRequest();
    // flickrRequest.open(
    //   "GET",
    //   //"https://api.openweathermap.org/data/2.5/forecast?zip=84106&APPID=174645155f8e4d456c204f31cacf19af&units=metric"
    //   `https://api.flickr.com/services/rest/?api_key=e8bc8d8665dc000b0d4785600b16f150&method=flickr.photos.search&format=json&safe_search=1&sort=relevance&per_page=30&extras=url_o&text=${cityName}`
    // );

    // flickrRequest.onreadystatechange = () => {
    //   console.log("ok");
    //   if (flickrRequest.readyState === 4 && flickrRequest.status === 200) {
    //     console.log("HI!");
    //     console.log(flickrRequest.responseText);
    //     let data = flickrRequest.responseText.slice(
    //       14,
    //       flickrRequest.responseText.length - 1
    //     );
    //     this.jsonFlickrApi(JSON.parse(data));
    //   }
    // };

    // flickrRequest.send();

    console.log();
    //Pixabay request
    let pixabayRequest = new XMLHttpRequest();
    pixabayRequest.open(
      "GET",
      `https://pixabay.com/api/?key=11390807-d4cbc1bf61d785c8216c92544&q=${encodeURI(
        cityName
      )}&image_type=photo&safesearch=true&category=buildings&orientation=horizontal&per_page=30`
    );

    pixabayRequest.onreadystatechange = () => {
      console.log("ok");
      if (pixabayRequest.readyState === 4 && pixabayRequest.status === 200) {
        let data = JSON.parse(pixabayRequest.responseText);
        console.log(data);
        this.pixabayResponseHandler(data);
      }
    };

    pixabayRequest.send();

    this.setState({ city: cityName });
  };

  jsonFlickrApi = rsp => {
    //if (rsp.stat != "ok") console.log("OOPS!");

    console.log("IM IN HERE");
    console.log(rsp);
    console.log(rsp.photos.photo[0]);
    console.log("o-secret: " + rsp.photos.photo[0].osecret);
    let i = Math.floor(Math.random() * rsp.photos.length);

    // let photoLink = `url("https://farm${
    //   rsp.photos.photo[i].farm
    // }.staticflickr.com/${rsp.photos.photo[i].server}/${
    //   rsp.photos.photo[i].id
    // }_${rsp.photos.photo[i].secret}_o.jpg")`;

    let photoLink = `url(${rsp.photos.photo[0].url_o})`;
    console.log("photo link: " + photoLink);

    this.setState({
      color: "WHITE",
      img: photoLink
    });
  };

  pixabayResponseHandler = data => {
    if (data.total === 0) {
      this.setState({
        color: "WHITE",
        img: `url("images/default.jpg")`
      });
      return;
    }

    let i = Math.floor(Math.random() * data.hits.length);

    this.setState({
      color: "WHITE",
      img: `url("${data.hits[i].largeImageURL}")`
    });
  };

  updateWeatherData = data => {
    let date = new Date(data.list[0].dt_txt);
    let day = date.getDate();
    let updatedWeatherCards = [{}, {}, {}, {}, {}];

    let hourIndex = -1;
    let indexOfSecondDay = -1;

    for (var i = 0; i < this.state.weatherCards.length; i++) {
      // if (i == 0) {
      //   let indexOfFirstDay = this.getIndexOfFirstDay(data, day);
      //   console.log("index of first: " + indexOfFirstDay);
      //   updatedWeatherCards[i] = {
      //     id: i,
      //     weatherImg: `http://openweathermap.org/img/w/${
      //       data.list[indexOfFirstDay].weather[0].icon
      //     }.png`,
      //     weatherStatus: `${data.list[indexOfFirstDay].weather[0].main}`,
      //     tempC: `${data.list[indexOfFirstDay].main.temp}`,
      //     dateString: data.list[indexOfFirstDay].dt_txt
      //   };
      // } else if (i == 1) {
      //   indexOfSecondDay = this.getIndexOfSecondDay(data, day);
      //   updatedWeatherCards[i] = {
      //     id: i,
      //     weatherImg: `http://openweathermap.org/img/w/${
      //       data.list[indexOfSecondDay].weather[0].icon
      //     }.png`,
      //     weatherStatus: `${data.list[indexOfSecondDay].weather[0].main}`,
      //     tempC: `${data.list[indexOfSecondDay].main.temp}`,
      //     dateString: data.list[indexOfSecondDay].dt_txt
      //   };
      //   hourIndex = indexOfSecondDay;
      // } else {
      //   hourIndex += 8;
      //   updatedWeatherCards[i] = {
      //     id: i,
      //     weatherImg: `http://openweathermap.org/img/w/${
      //       data.list[hourIndex].weather[0].icon
      //     }.png`,
      //     weatherStatus: `${data.list[hourIndex].weather[0].main}`,
      //     tempC: `${data.list[hourIndex].main.temp}`,
      //     dateString: data.list[hourIndex].dt_txt
      //   };
      // }

      if (i == 0) {
        let indexOfFirstDay = this.getIndexOfFirstDay(data, day);
        this.updateWeatherCard(updatedWeatherCards, indexOfFirstDay, i, data);
      } else if (i == 1) {
        indexOfSecondDay = this.getIndexOfSecondDay(data, day);
        this.updateWeatherCard(updatedWeatherCards, indexOfSecondDay, i, data);
        hourIndex = indexOfSecondDay;
      } else {
        hourIndex += 8;
        this.updateWeatherCard(updatedWeatherCards, hourIndex, i, data);
      }
    }

    console.log("NEW WEATHER CARDS");
    console.log(updatedWeatherCards);

    this.setState({ weatherCards: updatedWeatherCards });
  };

  //If  there is no 12PM slot in the first day, return the index of the latest hour in that day.
  getIndexOfFirstDay = (data, day) => {
    console.log("in problem method");
    console.log("data");
    console.log(data);
    console.log("day");
    console.log(day);
    let currDay = day;
    let index = -1;
    while (currDay == day) {
      index++;
      let date = new Date(data.list[index].dt_txt);
      console.log(date);
      if (date.getHours() == 12) return index;

      currDay = date.getDate();
      console.log("currDay: " + currDay);
    }
    return index - 1;
  };

  getIndexOfSecondDay = (data, day) => {
    let index = this.getIndexOfFirstDay(data, day);
    let date = new Date(data.list[index].dt_txt);
    let hourOfFirstDay = date.getHours();

    if (hourOfFirstDay === 12) return index + 8;
    else {
      return index + 5;
    }
  };

  updateWeatherCard = (updatedWeatherCards, hourIndex, i, data) => {
    updatedWeatherCards[i] = {
      id: i,
      weatherImg: `http://openweathermap.org/img/w/${
        data.list[hourIndex].weather[0].icon
      }.png`,
      weatherStatus: `${data.list[hourIndex].weather[0].main}`,
      tempC: `${data.list[hourIndex].main.temp}`,
      dateString: data.list[hourIndex].dt_txt,
      minC: `${data.list[hourIndex].main.temp_min}`,
      maxC: `${data.list[hourIndex].main.temp_max}`,
      windSpeed: `${data.list[hourIndex].wind.speed}`,
      windDegree: `${data.list[hourIndex].wind.deg}`
    };
  };

  render() {
    console.log("in render method");
    console.log("color inside render method: " + this.state.color);
    console.log("selected: ");
    console.log(this.state.selected);
    var divImage = {
      //background: this.state.color
      color: this.state.color,
      // background: `${this.state.img}` //no-repeat center center fixed
      backgroundImage: `${this.state.img}`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "noRepeat"
    };

    var divImage2 = {
      flex: 1,
      //backgroundColor: "rgba(0,0,0,.6"
      background: "rgba(0,0,0,.6)"
    };

    var divImage3 = {
      backgroundColor: "yellow"
    };

    // let shouldShow = { value: false };
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

      <React.Fragment>
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
                  {/* <h2 className="display-5">MON</h2>
                  <button onClick={this.testHandler}>TEST</button> */}
                  <div
                    className="yo"
                    onMouseOver={() => this.mouseOverCardHandler(0)}
                    onMouseOut={() => this.mouseOutCardHandler()}
                  >
                    <WeatherCard
                      mouseOn={() => this.mouseOverCardHandler}
                      key={this.state.weatherCards[0].id}
                      weatherInfo={this.state.weatherCards[0]}
                    />
                  </div>
                </div>
                <div className="col">
                  {/* <h2 className="display-5" /> */}
                  <div
                    className="yo"
                    onMouseOver={() => this.mouseOverCardHandler(1)}
                    onMouseOut={() => this.mouseOutCardHandler()}
                  >
                    <WeatherCard
                      key={this.state.weatherCards[1].id}
                      weatherInfo={this.state.weatherCards[1]}
                    />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="yo"
                    onMouseOver={() => this.mouseOverCardHandler(2)}
                    onMouseOut={() => this.mouseOutCardHandler()}
                  >
                    <WeatherCard
                      key={this.state.weatherCards[2].id}
                      weatherInfo={this.state.weatherCards[2]}
                    />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="yo"
                    onMouseOver={() => this.mouseOverCardHandler(3)}
                    onMouseOut={() => this.mouseOutCardHandler()}
                  >
                    <WeatherCard
                      key={this.state.weatherCards[3].id}
                      weatherInfo={this.state.weatherCards[3]}
                    />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="yo"
                    onMouseOver={() => this.mouseOverCardHandler(4)}
                    onMouseOut={() => this.mouseOutCardHandler()}
                  >
                    <WeatherCard
                      key={this.state.weatherCards[4].id}
                      weatherInfo={this.state.weatherCards[4]}
                    />
                  </div>
                </div>
              </div>
            </div>

            {this.shouldShowHandler()}
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
        <SearchBar
          key={0}
          notifySubmit={(cityID, cityName) =>
            this.userSubmitHandler(cityID, cityName)
          }
        />

        {/* <h3>OLOLO</h3> */}
      </React.Fragment>
    );
  }

  shouldShowHandler = () => {
    console.log("cardId current: " + this.state.cardIdCurrentlyHover);
    console.log(this.state.shouldShow);
    if (this.state.shouldShow) {
      return (
        <div className="positionExtraInfo">
          <h5>
            {`min: ${
              this.state.weatherCards[this.state.cardIdCurrentlyHover].minC
            }`}
            &deg;C <br />{" "}
            {`max: ${
              this.state.weatherCards[this.state.cardIdCurrentlyHover].maxC
            }`}
            &deg;C <br />{" "}
            {`wind speed: ${
              this.state.weatherCards[this.state.cardIdCurrentlyHover].windSpeed
            }`}
            &nbsp;m/s
            <br />{" "}
            {`wind degree: ${
              this.state.weatherCards[this.state.cardIdCurrentlyHover]
                .windDegree
            }`}
            &deg;
          </h5>
        </div>
      );
    }
    return <div />;
  };
}

export default App;
