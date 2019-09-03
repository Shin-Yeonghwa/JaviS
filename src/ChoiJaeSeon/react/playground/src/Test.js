import React, {Component} from 'react';


class Test extends Component {
  state = {
    active: ''
  }
  addActiveClass(e){
      const clicked = e.target.id
      if(this.state.active === clicked) { 
          this.setState({active: ''});
      } else {
          this.setState({active: clicked})
     }
  }

  render() {

    const menus = ["도시정보","여행정보" , "항공권 예약"]
    const menuList = menus.map((menu) => (<li className={`test ${this.state.active === "first"? 'active': ''}`}><a href="#"><span className="inner">{menu}</span></a></li>))

    return (
      <ui className="tabList">
        {menuList}
      </ui>
    );
  }
}
export default Test;
