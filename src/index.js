import React from "react";
import ReactDOM from "react-dom";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity
} from "react-native";
import "./styles.css";
import "bulma/css/bulma.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      resultText: ""
    };
    this.operations = ["DEL", "+", "-", "*", "/"];
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  calculateResult() {
    const text = this.state.resultText;
  }

  buttonPressed(Text) {
    if (Text === "=") {
      return this.calculateResult();
    }
    this.setState({
      resultText: this.state.resultText + Text
    });
  }

  operation(ops) {
    switch (ops) {
      case "DEL":
        let text = this.state.resultText.split("");
        text.pop();
        this.setState({
          resultText: text.join("")
        });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        const lastChar = this.state.resultText.split('').pop()
        if(this.operations.indexOf(lastChar)>0)
        return 
        if (this.state.resultText === "") return;
        else {
          this.setState({
            resultText: this.state.resultText + ops
          });
        }
    }
  }
  render() {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [".", 0, "="]];
    let k = 1;
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            onPress={() => this.buttonPressed(nums[i][j])}
            style={styles.btn}
          >
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }
    let ops = ["DEL", "+", "-", "*", "/"];
    let oparr = [];
    for (let i = 0; i < 5; i++) {
      oparr.push(
        <TouchableOpacity style={styles.btn}>
          <Text
            onPress={() => this.operation(ops[i])}
            style={[styles.btnText, styles.white]}
          >
            {ops[i]}
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>11*11</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{oparr}</View>
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: "red",
    height: height * 0.25,
    width: width
  },
  resultText: {
    fontSize: 60,
    color: "white",
    textAlign: "right",
    padding: 20
  },
  calculation: {
    flex: 1,
    backgroundColor: "green",
    height: height * 0.15
  },
  calculationText: {
    fontSize: 40,
    color: "white",
    textAlign: "right"
  },
  white: {
    color: "white"
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
    height: height * 0.6
  },
  btn: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  btnText: {
    fontSize: 30
  },
  numbers: {
    flex: 3,
    backgroundColor: "yellow",
    width: width * 0.9
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  operations: {
    flex: 1,
    backgroundColor: "black",
    width: width * 0.1,
    justifyContent: "space-around"
  }
});
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
