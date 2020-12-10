import React from "react"

function FormComponent(props) {
    return (
        <div class = "appItems">
        <form>
          <label class = "label">Number to be converted
            <input 
              type = "text"
              value = {props.data.userNumber}
              name = "userNumber"
              placeholder = "Enter a Number to be converted" 
              onChange = {props.handleChange}
              id = "textField"
            />
          </label> 
          <br></br>
          <br></br>
          <label class = "label"> New Base of Number
            <input 
              type = "text"
              value = {props.data.numberBase}
              name = "numberBase"
              placeholder = "Enter new base for the number" 
              onChange = {props.handleChange}
              id = "textField"
            />
          </label> 
        </form>
        <br></br>
        <p class = "label">
        {props.data.userNumber} converted to base {props.data.numberBase} is: {props.data.convertedNumber}
          <br></br>
        </p>
      </div>

    )
}

export default FormComponent