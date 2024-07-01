import React, { useState } from "react";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div>
      <div className="grid grid-four-column">
        {imgs.map((curElm, index) => (
          <figure key={index}>
            <img
              src={curElm.url}
              alt={curElm.filename}
              className="box-image--style"
              onClick={() => setMainImage(curElm)}
              style={{widows:"100px" ,height:"100px"}}
            />
          </figure>
        ))}
      </div>
      {/* 2nd column  */}
      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </div>
  );
};

export default MyImage;
