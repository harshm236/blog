import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

export function Image() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
          textDecorationColor: "blue",
        }}
      >
        Bollywood
      </h1>
      <div id="bollywood2">
        <Link
        id="onimg"
          to={"./common"}
          
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661757941186-581ea5ac398c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "auto",
            height: "auto",
            textAlign: "center",
            lineHeight: "500px",
            gridRow: "1 / 3",
            borderRadius: "20px"
          }}
        >
          hello
        </Link>
        <Link
        id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "auto",
            height: "auto",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          hello
        </Link>
        <Link
        id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "auto",
            height: "auto",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          {" "}
          hello
        </Link>
      </div>
      <hr></hr>
      <h1
        style={{
          marginLeft: "50px",
          textDecorationColor: "Red",
          textDecoration: "underline",
        }}
      >
        The Latest
      </h1>

      <div id="bollywood">
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
      </div>
      <h2
        style={{
          marginLeft: "50px",
          textDecorationColor: "yellow",
          textDecoration: "underline",
        }}
      >
        Latest Articles
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div className="Articles">
          <div id="card"></div>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
          {/* <div id="card" style={{gridRow:'1 / 1'}}></div> */}
          <div to={"./common"} id="card"></div>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>

          <div to={"./common"} id="card"></div>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
        </div>
        <Link
          to={"./common"}
          style={{
            width: "300px",
            height: "auto",
            border: "5px solid black",
            // marginLeft: "100px",
          }}
        >
          ADVERTISEMENT
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
        </Link>
      </div>
    </>
  );
}
export function Image2() {
  return (
    <>
      {" "}
      <h1 style={{ textAlign: "center", fontSize: "100px" }}>HOME</h1>;
      <h2
        style={{
          marginLeft: "50px",
          textDecorationColor: "yellow",
          textDecoration: "underline",
        }}
      >
        Latest Articles
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div
          className="Articles"
          style={{
            display: "grid",
            gridTemplateColumns: "300px 300px",
            marginLeft: "50px",
            gridColumnGap: "100px",
            gridRowGap: "100px",
          }}
        >
          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
          {/* <div id="card" style={{gridRow:'1 / 1'}}></div> */}
          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>

          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
        </div>
        <Link
          to={"./common"}
          style={{
            width: "300px",
            height: "auto",
            border: "5px solid black",
            marginLeft: "100px",
          }}
        >
          ADVERTISEMENT
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
        </Link>
      </div>
    </>
  );
}

export function Image3() {
  return (
    <>
      <h1
        style={{
          marginLeft: "46%",
          textDecoration: "underline",
          textDecorationColor: "blue",
        }}
      >
        Technology
      </h1>
      <div id="bollywood2">
        <Link
        id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?format=jpg&width=960')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            lineHeight: "500px",
            gridRow: "1 / 3",
            borderRadius: "20px",
          }}
        >
          {" "}
          hello
        </Link>
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          hello
        </Link>
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          {" "}
          hello
        </Link>
      </div>
      <hr></hr>
      <h1
        style={{
          marginLeft: "50px",
          textDecorationColor: "red",
          textDecoration: "underline",
        }}
      >
        The Latest
      </h1>

      <div id="bollywood">
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
      </div>
      <h2
        style={{
          marginLeft: "50px",
          textDecorationColor: "red",
          textDecoration: "underline",
        }}
      >
        Latest Articles
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Link to={"./common"} className="Articles">
          <div id="card"></div>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
          {/* <div id="card" style={{gridRow:'1 / 1'}}></div> */}
          <div id="card"></div>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>

          <div id="card"></div>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
        </Link>
        <Link
          to={"./common"}
          style={{
            width: "300px",
            height: "auto",
            border: "5px solid black",
            marginLeft: "100px",
          }}
        >
          ADVERTISEMENT
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
        </Link>
      </div>
    </>
  );
}
export function Image4() {
  return (
    <>
      <h1
        style={{
          marginLeft: "46%",
          textDecoration: "underline",
          textDecorationColor: "blue",
        }}
      >
        Hollywood
      </h1>
      <div id="bollywood2">
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2012/08/thumb_720_450_Hollywood-sign_shutterstock_7335802.jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            lineHeight: "500px",
            gridRow: "1 / 3",
            borderRadius: "20px",
          }}
        >
          {" "}
          hello
        </Link>
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          hello
        </Link>
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          {" "}
          hello
        </Link>
      </div>
      <hr></hr>
      <h1
        style={{
          marginLeft: "50px",
          textDecorationColor: "Red",
          textDecoration: "underline",
        }}
      >
        The Latest
      </h1>

      <div id="bollywood">
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
      </div>
      <h2
        style={{
          marginLeft: "50px",
          textDecorationColor: "yellow",
          textDecoration: "underline",
        }}
      >
        Latest Articles
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="Articles"
          style={{
            display: "grid",
            gridTemplateColumns: "300px 300px",
            marginLeft: "50px",
            gridColumnGap: "100px",
            gridRowGap: "100px",
          }}
        >
          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
          {/* <div id="card" style={{gridRow:'1 / 1'}}></div> */}
          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>

          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
        </div>
        <Link
          to={"./common"}
          style={{
            width: "300px",
            height: "auto",
            border: "5px solid black",
            marginLeft: "100px",
          }}
        >
          ADVERTISEMENT
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
        </Link>
      </div>
    </>
  );
}
export function Image5() {
  const x = {
    display: "grid",
    gridTemplateColumns: "70% 30% ",
    gridTemplateRows: "auto auto",
    color: "pink",
    padding: "50px",
    gridRowGap: "10px",
    gridColumnGap: "10px",
    fontSize: "20px",
  };
  return (
    <>
      <h1
        style={{
          marginLeft: "46%",
          textDecoration: "underline",
          textDecorationColor: "blue",
        }}
      >
        Fitness
      </h1>
      <div style={x}>
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?w=2000')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            lineHeight: "500px",
            gridRow: "1 / 3",
            borderRadius: "20px",
          }}
        >
          {" "}
          hello
        </Link>
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          hello
        </Link>
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          {" "}
          hello
        </Link>
      </div>
      <hr></hr>
      <h1
        style={{
          marginLeft: "50px",
          textDecorationColor: "Red",
          textDecoration: "underline",
        }}
      >
        The Latest
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gridRowGap: "50px",
          justifyItems: "center",
        }}
      >
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
      </div>
      <h2
        style={{
          marginLeft: "50px",
          textDecorationColor: "yellow",
          textDecoration: "underline",
        }}
      >
        Latest Articles
      </h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          className="Articles"
          style={{
            display: "grid",
            gridTemplateColumns: "300px 300px",
            marginLeft: "50px",
            gridColumnGap: "100px",
            gridRowGap: "100px",
          }}
        >
          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
          {/* <div id="card" style={{gridRow:'1 / 1'}}></div> */}
          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>

          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
        </div>
        <Link
          to={"./common"}
          style={{
            width: "300px",
            height: "auto",
            border: "5px solid black",
            marginLeft: "100px",
          }}
        >
          ADVERTISEMENT
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
        </Link>
      </div>
    </>
  );
}
export function Image6() {
  const x = {
    display: "grid",
    gridTemplateColumns: "70% 30% ",
    gridTemplateRows: "auto auto",
    color: "pink",
    padding: "50px",
    gridRowGap: "10px",
    gridColumnGap: "10px",
    fontSize: "20px",
  };
  return (
    <>
      <h1
        style={{
          marginLeft: "46%",
          textDecoration: "underline",
          textDecorationColor: "blue",
        }}
      >
        Food
      </h1>
      <div style={x}>
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            lineHeight: "500px",
            gridRow: "1 / 3",
            borderRadius: "20px",
          }}
        >
          {" "}
          hello
        </Link>
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          hello
        </Link>
        <Link id="onimg"
          to={"./common"}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg')`,
            backgroundSize: "cover",
            color: "yellow",
            width: "100%",
            height: "auto",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          {" "}
          hello
        </Link>
      </div>
      <hr></hr>
      <h1
        style={{
          marginLeft: "50px",
          textDecorationColor: "Red",
          textDecoration: "underline",
        }}
      >
        The Latest
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gridRowGap: "50px",
          justifyItems: "center",
        }}
      >
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
        <Link to={"./common"} id="card"></Link>
      </div>
      <h2
        style={{
          marginLeft: "50px",
          textDecorationColor: "yellow",
          textDecoration: "underline",
        }}
      >
        Latest Articles
      </h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          className="Articles"
          style={{
            display: "grid",
            gridTemplateColumns: "300px 300px",
            marginLeft: "50px",
            gridColumnGap: "100px",
            gridRowGap: "100px",
          }}
        >
          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
          {/* <div id="card" style={{gridRow:'1 / 1'}}></div> */}
          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>

          <Link to={"./common"} id="card"></Link>
          <div
            style={{
              fontSize: "20px",
              width: "300px",
              letterSpacing: "2px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque dolore labore quas ex tempora dolor voluptas officia?
            Veritatis, sunt?
          </div>
        </div>
        <Link
          to={"./common"}
          style={{
            width: "300px",
            height: "auto",
            border: "5px solid black",
            marginLeft: "100px",
          }}
        >
          ADVERTISEMENT
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
          <div
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid black",
              margin: "20px 0px 0px 20px",
            }}
          >
            ADVERTISEMENT
          </div>
        </Link>
      </div>
    </>
  );
}
