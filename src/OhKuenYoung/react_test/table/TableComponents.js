import React, { Component } from 'react';
import NsTable from '../app/components/Table/Table';


//Layout CSS
const indexLayout = {
  padding:"60px 100px",
  backgroundColor: "#f0f2f5"
}

const indexTitle= {
  display:"block",
  padding:"0 0 18px",
  color: "rgba(0, 0, 0, 0.85)",
  fontSize:"28px",
  borderBottom: "1px solid #dadcde"
}

const tampStyle= {
  display:"block",
  fontSize:"20px",
  padding:"20px 0"
}

const indexBox= {
  display: "flex",
  padding: "30px",
  backgroundColor:"#fff",
}

const indexInnerBox= {
  flex:"1"
}

const innerBoxTitle= {
  display: "block",
  marginBottom: "20px",
  fontSize: "14px",
  color: "rgba(0, 0, 0, 0.45)"
}

const block= {
  marginTop: "20px"
}

//Component
class ComponentsOky extends Component {
    render() {
      return (
        <div className="n_shopping" style={indexLayout}>
          <strong style={indexTitle}>Table COMPONENTS</strong>
          <strong style={tampStyle}>Table</strong>
          <div style={indexBox}>
            <div style={indexInnerBox}>
              <strong style={innerBoxTitle}>Primary Button</strong>
              <NsTable/>
            </div>
          </div>
        </div>
      );
    }
  }
export default ComponentsOky;