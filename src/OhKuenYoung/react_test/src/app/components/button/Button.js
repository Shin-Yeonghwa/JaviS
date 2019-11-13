import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './_CustomButton.scss';

class Buttons extends Component {
    render() {
      return (
        <div>
          <Button className="hi" type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </div>
      );
    }
  }
export default Buttons;