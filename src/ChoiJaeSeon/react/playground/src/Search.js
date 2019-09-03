import React, {Component, Fragment} from 'react';



class Search extends Component {
//Fragment 이용하여 태그 안감싸기   
  state = {
    name : ["최재선","이소진", "최서은"],
    addName : ""
  }  

  textChange = (e) =>{
    this.setState({
      addName : e.target.value
    });
  }
  add = (e) => {
    this.setState({
      name : this.state.name.concat(this.state.addName)
    });
  }
  render() {
    const nameList = this.state.name.map(
      (addName, index) => (<li key = {index}>{addName}</li>)
    );
    return (
      <Fragment>
      <input type = "text" onChange = {this.textChange}></input>
      <button onClick = {this.add}>추가하기</button>
      <ul>
        {nameList}
      </ul>
      </Fragment>
        );
  }
}
export default Search;
