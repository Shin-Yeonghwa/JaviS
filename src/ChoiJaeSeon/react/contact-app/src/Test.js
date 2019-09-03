import React, {Component} from 'react';


class Test extends Component {
//맵을 이용함  
  render() {
    const menus = ["안녕하세요","너는 말이 너무 많아" , "그래도 어쩔수없지","잘해보자"]
    const menuList = menus.map((menu) => (<li>{menu}</li>))

    return (
      <ui>
        {menuList}
      </ui>
    );
  }
}
export default Test;
