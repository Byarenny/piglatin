import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: "",
      phraseTranslated: "This is where your translated sentence will appear.",
    };
  }

  myPigLatinCodeHere = () => {
    let userInput = this.state.phrase.split(" ");
    console.log("userInput:", userInput);

    let translatedWordsArray = userInput.map((currentWord) => {
      console.log("currentWord:", currentWord);

      let vowelsArray = currentWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        );
      });
      console.log("vowelsArray:", vowelsArray);
      console.log(currentWord.indexOf(vowelsArray[0]));

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

      console.log(currentWord.indexOf(vowelsArray[0]));

    });

    let translatedWords = translatedWordsArray.join(" ");
    // console.log("translatedWords:", translatedWords);
    this.setState({ phraseTranslated: translatedWords });
  };

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "",
      phraseTranslated: "",
    });
  };

  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault();
    this.myPigLatinCodeHere();
  };

  handleInput = (e) => {
    this.setState({ phrase: e.target.value });
  };

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        {/* <img/> */}
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
      </>
    );
  }
}

export default App;
