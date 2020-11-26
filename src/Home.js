import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2> This is a simple Topic recomendation system </h2>
        <form>
    	<label>Input Sentence: <input type="text" /></label>
    	<input type="submit" value="Submit" />
		</form>
        
      </div>
    );
  }
}
 
export default Home;