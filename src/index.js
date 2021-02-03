import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/300";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1
      style={{ fontWeight: "normal" }}
      className="heading"
      contentEditable="true"
      spellCheck="false"
    >
      Top three bands I loved as a teenager
    </h1>
    <h2 style={customStyle}>Test</h2>
    <div>
      <img
        className="band-img"
        alt="The Cure"
        src="https://www.rockarchive.com/media/3031/the-cure-05.jpg?width=1120&height=undefined&upscale=false&slimmage=true&center=0.5,0.5&mode=crop"
      />
      <img
        className="band-img"
        alt="Kispal es a Borz"
        src="https://magyarnarancs.hu/data/articles/54/541/article-54153/200013_40.jpg"
      />
      <img
        className="band-img"
        alt="The Doors"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oS56Z4AE_4FceiEekGq4y-NykDibwHGRCA&usqp=CAU"
      />
    </div>
    <img alt="random image" src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
