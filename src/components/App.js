import React, {Component} from 'react'

class App extends Component{
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
      <div class = "appItems">
        <form>
          <label class = "label">Number to be converted
            <input 
              type = "text"
              value = {this.state.userNumber}
              name = "userNumber"
              placeholder = "Enter a Number to be converted" 
              onChange = {this.handleChange}
              id = "textField"
            />
          </label> 
          <br></br>
          <br></br>
          <label class = "label"> New Base of Number
            <input 
              type = "text"
              value = {this.state.numberBase}
              name = "numberBase"
              placeholder = "Enter new base for the number" 
              onChange = {this.handleChange}
              id = "textField"
            />
          </label> 
        </form>
        <br></br>
        <p class = "label">
        {this.state.userNumber} converted to base {this.state.numberBase} is: {this.state.convertedNumber}
          <br></br>
        </p>
      </div>
    )}
}

export default App;
