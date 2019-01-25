import React, { Component } from "react";

import Autosuggest from "react-autosuggest";
import cityList from "../city.list.min.json";
// import Select from "react-select";

// const cityList2 = cityList.map(opt => ({
//   label: opt.name,
//   value: opt.name
// }));

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" }
// ];

// class App extends React.Component {
//   state = {
//     selectedOption: null
//   };
//   handleChange = selectedOption => {
//     this.setState({ selectedOption });
//     console.log(`Option selected:`, selectedOption);
//   };
//   render() {
//     const { selectedOption } = this.state;

//     return (
//       <Select
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={cityList2}
//       />
//     );
//   }
// }

// // Imagine you have a list of languages that you'd like to autosuggest.
// const languages = [
//   {
//     name: "C",
//     year: 1972
//   },
//   {
//     name: "Elm",
//     year: 2012
//   },
//   {
//     name: "Elma",
//     year: 2012
//   },
//   {
//     name: "Eureka",
//     year: 2012
//   },
//   {
//     name: "Eienstien",
//     year: 2012
//   },
//   {
//     name: "Lorna",
//     year: 2012
//   }
// ];

// // Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0
//     ? []
//     : languages.filter(
//         lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
//       );
// };

// // When suggestion is clicked, Autosuggest needs to populate the input
// // based on the clicked suggestion. Teach Autosuggest how to calculate the
// // input value for every given suggestion.
// const getSuggestionValue = suggestion => suggestion.name;

// // Use your imagination to render suggestions.
// const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

// class App extends Component {
//   constructor() {
//     super();

//     // Autosuggest is a controlled component.
//     // This means that you need to provide an input value
//     // and an onChange handler that updates this value (see below).
//     // Suggestions also need to be provided to the Autosuggest,
//     // and they are initially empty because the Autosuggest is closed.
//     this.state = {
//       value: "",
//       suggestions: []
//     };
//   }

//   onChange = (event, { newValue }) => {
//     this.setState({
//       value: newValue
//     });
//   };

//   // Autosuggest will call this function every time you need to update suggestions.
//   // You already implemented this logic above, so just use it.
//   onSuggestionsFetchRequested = ({ value }) => {
//     this.setState({
//       suggestions: getSuggestions(value)
//     });
//   };

//   // Autosuggest will call this function every time you need to clear suggestions.
//   onSuggestionsClearRequested = () => {
//     this.setState({
//       suggestions: []
//     });
//   };

//   render() {
//     console.log(this.state.value);

//     const { value, suggestions } = this.state;

//     // Autosuggest will pass through all these props to the input.
//     const inputProps = {
//       placeholder: "Type a programming language",
//       value,
//       onChange: this.onChange
//     };

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : cityList.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );

  //let count = 0;
  // return inputLength === 0
  //   ? []
  //   : cityList.filter(lang => {
  //       if (count > 5) return false;
  //       if (lang.name.toLowerCase().slice(0, inputLength) === inputValue)
  //         count++;
  //       return true;
  //     });
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>{`${suggestion.name}, ${suggestion.country} ${suggestion.id}`}</div>
);

const theme = {
  container: {
    position: "relative"
  },
  //   input: {
  //     position: "fixed",
  //     bottom: 0,
  //     width: 240,
  //     height: 30,
  //     padding: "10px 20px",
  //     fontFamily: "Helvetica, sans-serif",
  //     fontWeight: 300,
  //     fontSize: 16,
  //     border: "1px solid #aaa",
  //     borderTopLeftRadius: 4,
  //     borderTopRightRadius: 4,
  //     borderBottomLeftRadius: 4,
  //     borderBottomRightRadius: 4
  //   },
  input: {
    position: "fixed",
    bottom: 10,
    left: 10,
    width: 240,
    height: 40,
    padding: "10px 20px",
    fontFamily: "Helvetica, sans-serif",
    fontWeight: 300,
    fontSize: 16,
    border: "1px solid #aaa",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  inputFocused: {
    outline: "none"
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: "none"
  },
  // suggestionsContainerOpen: {
  //   display: "block",
  //   position: "absolute",
  //   top: 51,
  //   width: 280,
  //   border: "1px solid #aaa",
  //   backgroundColor: "#fff",
  //   fontFamily: "Helvetica, sans-serif",
  //   fontWeight: 300,
  //   fontSize: 16,
  //   borderBottomLeftRadius: 4,
  //   borderBottomRightRadius: 4,
  //   zIndex: 2
  // },
  suggestionsContainerOpen: {
    display: "block",
    position: "fixed",
    bottom: 50,
    width: 280,
    border: "1px solid #aaa",
    backgroundColor: "#fff",
    fontFamily: "Helvetica, sans-serif",
    fontWeight: 300,
    fontSize: 16,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  suggestion: {
    cursor: "pointer",
    padding: "10px 20px"
  },
  suggestionHighlighted: {
    backgroundColor: "#ddd"
  }
};

class SearchBar extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: [],
      selectedSuggestionCityID: null
    };
  }

  onChange = (event, { newValue, method }) => {
    if (method === "enter" || method === "click") console.log("GOT IT");
    console.log(this.state.selectedSuggestionCityID);

    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    console.log("need to clear");
    this.setState({
      suggestions: []
      //selectedSuggestion: null
    });
  };

  onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    //console.log("ASFIDAJOWDIAWD");
    //console.log(suggestion);
    this.setState({ selectedSuggestionCityID: suggestion.id });

    this.props.notifySubmit(suggestion.id, suggestion.name);
  };

  //   jsonFlickrApi = rsp => {
  //     if (rsp.stat != "ok") console.log("OOPS!");

  //     console.log("IM IN HERE");
  //     console.log(rsp);
  //     console.log(rsp.photos.photo[0]);
  //     let i = Math.floor(Math.random() * 30);
  //     this.setState({
  //       color: "WHITE",
  //       img: `https://farm${rsp.photos.photo[i].farm}.staticflickr.com/${
  //         rsp.photos.photo[i].server
  //       }/${rsp.photos.photo[i].id}_${rsp.photos.photo[i].secret}.jpg`
  //     });
  //   };

  render() {
    //console.log(this.state.value);
    console.log(this.state.selectedSuggestionCityID);
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Type a city name",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions.slice(0, 5)}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={theme}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}

export default SearchBar;
