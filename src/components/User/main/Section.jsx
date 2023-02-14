import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Section(props) {
  const [state, setstate] = React.useState(false);
  const [state1, setstate1] = React.useState(false);
  const [state2, setstate2] = React.useState(false);

  return (
    <>
      <div className="container">
        <div className="d-flex gap-4 mb-5" style={props.styled} >
          <div style={{ width: "636px", overflow: "hidden" }}>
            <img src={props.img1} alt="" style={state ? { scale: "1.1", transitionDuration: "2000ms" } : { scale: "1", transitionDuration: "2000ms" }} onMouseOver={()=>{setstate(true)}} onMouseOut={()=>{setstate(false)}} />
          </div>
          <div style={{ width: "306px", overflow: "hidden" }}  >
            <img src={props.img2} alt="" style={state1 ? { scale: "1.1", transitionDuration: "2000ms" } : { scale: "1", transitionDuration: "2000ms" }} onMouseOver={()=>{setstate1(true)}} onMouseOut={()=>{setstate1(false)}} />
          </div>
          <div style={{ width: "306px", overflow: "hidden" }}>
            <img src={props.img3} alt="" style={state2 ? { scale: "1.1", transitionDuration: "2000ms" } : { scale: "1", transitionDuration: "2000ms" }} onMouseOver={()=>{setstate2(true)}} onMouseOut={()=>{setstate2(false)}}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
