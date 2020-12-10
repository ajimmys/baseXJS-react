import React, {Component} from "react"

import FormComponent from "./FormComponent.js"

class Form extends Component{
  constructor(){
    super();
    this.state = {
      userNumber : 0,
      numberBase : 10,
      convertedNumber : ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    let newValue = parseInt(value, 10)

    if (isNaN(newValue) || isNaN(value)){
      this.setState({[name] : 0}, () => {
        this.convertN()
      })
    } else {
      this.setState({[name] : newValue}, () => {
        this.convertN()
      })
    }
  }

  convertN(){
    let oldNumber = this.state.userNumber;
    let newBase = this.state.numberBase;
    let newNumber = ""
    let remainder = 0

    if (newBase === 2 || newBase === 8 || newBase === 10 || newBase === 16){
      newNumber = oldNumber.toString(newBase)
      this.setState({"convertedNumber" : newNumber})
    } else if (newBase !== 0 && newBase !== 1 ){
      while (oldNumber > 0) {
        remainder = oldNumber % newBase;
        oldNumber = Math.floor(oldNumber / newBase);

        if (remainder === 10 && newBase > 10){
          newNumber += "a"
        } else if (remainder === 11 && newBase > 11) {
          newNumber += "b"
        } else if (remainder === 12 && newBase > 12) {
          newNumber += "c"
        } else if (remainder === 13 && newBase > 13) {
          newNumber += "d"
        } else if (remainder === 14 && newBase > 14) {
          newNumber += "e"
        } else {
          newNumber += remainder.toString()
        }
      }
      this.setState({"convertedNumber" : newNumber.split("").reverse().join("")})
    } 
  }

  render () {
    return (
      <FormComponent 
        handleChange = {this.handleChange}
        data = {this.state}
      />
    )}
}

export default Form;
