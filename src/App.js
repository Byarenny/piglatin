import React, { Component } from "react";
import "./App.css";
import StyledTitle from "./components/StyledTitle"
import StyledButton from "./components/StyledButton"
import pig from "./assets/pig.png"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: "",
      phraseTranslated: "",
    };
  }

  myPigLatinCodeHere = () => {
    let userInput = this.state.phrase.split(" ");
    let translatedWordsArray = userInput.map((currentWord) => {
      let vowelsArray = currentWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        );
      });

      var firstVowel = currentWord.indexOf(vowelsArray[0]);
      var slicedWord = currentWord.slice(2);
      if (firstVowel === 0) {
        return currentWord.concat("way");
      } else if (firstVowel === 1 && currentWord[0] == "q") {
        return slicedWord.concat("qu").concat("ay");
      } else if (firstVowel >= 1 && currentWord[firstVowel - 1] == "q") {
        return currentWord
          .slice(firstVowel + 1)
          .concat(currentWord.substring(0, firstVowel) + "uay");
      } else if (firstVowel >= 1) {
        return currentWord
          .slice(firstVowel)
          .concat(currentWord.substring(0, firstVowel) + "ay");
      } else if ((firstVowel = -1 && currentWord.includes("y") === true)) {
        return (
          currentWord
            .slice(currentWord.indexOf("y"))
            .concat(currentWord.substring(0, currentWord.indexOf("y"))) + "ay"
        );
      }


    });

    let translatedWords = translatedWordsArray.join(" ");
    this.setState({ phraseTranslated: translatedWords });
  };

  restartGame = () => {
    this.setState({
      phrase: "",
      phraseTranslated: "",
    });
  };

  setUpPreventDefault = (e) => {
    e.preventDefault();
    this.myPigLatinCodeHere();
  };

  handleInput = (e) => {
    this.setState({ phrase: e.target.value });
  };

  render() {
    return (
      <>
      <div className="m-12 pl-40 relative h-32">
        <StyledTitle className="">Pig Latin</StyledTitle>
        <StyledTitle>Translator</StyledTitle>
        
        <img className="absolute inset-y-0 right-0 flex-shrink" src={pig}/>
        
        <br/>
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
          <h4 className="pb-3">Enter phrase to be translated:</h4>
          <input
            type="text"
            className="border-4 border-yellow rounded-lg pt-2 w-200"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          <StyledButton onClick={this.setUpPreventDefault}>Submit</StyledButton>
          <StyledButton onClick={this.restartGame}>Clear</StyledButton>
        </div>
        <br/>
        <div className="max-w-sm bg-pink-light rounded shadow-lg text-center text-white">
        <p> {this.state.phraseTranslated}</p>
        </div>
        </div>
      </>
    );
  }
}

export default App;
