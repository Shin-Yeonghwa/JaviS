import React, {Component} from 'react';


class Test extends Component {
//맵을 이용함  
  render() {
    const contentList = [
      {
          title: "도톤부리",
          subTitle: "주요거리"
      },
      {
        title: "일이삼사오육칠팔구십",
        subTitle: "테마파크"
       },
       {
        title: "우메다",
        subTitle: "주요지역"
       },
       {
        title: "오사카주",
        subTitle: "박물관"
       },
       {
        title: "유니버셜 스튜디오",
        subTitle: "테마파크"
       },
       {
        title: "카이유칸",
        subTitle: "수족관"
       },
       {
        title: "카이유칸",
        subTitle: "수족관"
       },
    ]

    const menuList = contentList.map((menu) => (
    <li>
      <a href="#">
      <div className="inner">
          <div className="imgWrap">
            <img src="https://search.pstatic.net/common?type=f&amp;size=174x174&amp;quality=100&amp;direct=true&amp;src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F4661_000_21%2F20190701235604429_9XSXL9L4U.jpg%2F%2525BF%2525C0%2525BB%2525.jpg%3Ftype%3Dm1500_q100" width="87" height="87" alt="도톤보리 이미지"/>
          </div>       
          <div className="title">{menu.title}</div>
          <span className="subtitle">{menu.subTitle}</span>
        </div>
      </a>
      </li>))

    return (
      <div className="scrollWrap">
        <div>
          <ui className="listWrap">
            {menuList}
          </ui>
        </div>
      </div>
    );
  }
}
export default Test;
