import {Link} from "react-router-dom"

export function Stay(){
  
    return(
      <div style={{backgroundColor:"purple"}}>
      
      <div style={{ textAlign: "center", fontSize: "30px", padding: "50px" }}>
          <div style={{ transform: "rotate(-90deg)", display: "inline-block" }}>
            The
          </div>
          <b style={{ fontSize: "40px" }}>SIREN</b>
        </div>
        <div id="header">
          <Link id="nav" to={'/home'} >Home</Link>
          <Link id="nav" to={'/bollywood'} >Bollywood</Link>
          <Link id="nav" to={'/technology'} >Technology</Link>
          <Link id="nav" to={'/hollywood'} >Hollywood</Link>
          <Link id="nav" to={'/fitness'} >Fitness</Link>
          <Link id="nav" to={'/food'} >Food</Link>
        </div>
        <hr style={{ opacity: "20%" }}></hr>
      </div>
    )
  }