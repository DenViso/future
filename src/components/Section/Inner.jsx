import React, { useState } from "react";

export const Inner = ({ t, products }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (media) => {
    setSelectedMedia(media);
  };

  // const closeModal = () => {
  //   setSelectedMedia(null);
  // };

  return (
    <div className="">
      
      {products.map((product) => {
        return (
          <div className="" key = {product.id}>
            
            <div
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "10px",
                display: "flex",
                flexDirection: "",
                gap: "10px",
                margin: "0px 120px",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
            <div className="" style={{ width:"60%",backgroundColor:"red" }}>
              {/* <img src={selectedMedia} alt="" /> */}
             </div>
           <div className="" style={{ width:"40%"}}>
           <div className="" style={{ display: "flex", gap: "10px" }}>
                {product.media_files.length !== 0 && (
                  <>
                    {product.media_files.map((file, index) => (
                      <img
                        key={index}
                        src={file.photo}
                        style={{
                          color: "red",
                          width: "100px",
                          height: "100px",
                          border: "1px solid black",
                          borderRadius: "10px",
                        }}
                        alt=""
                        onClick={() => openModal(file)}
                      />
                    ))}
                    {product.media_files.map(
                      (file, index) =>
                        file.video && (
                          <video
                            key={index}
                            controls
                            style={{
                              width: "100px",
                              height: "100px",
                              border: "1px solid black",
                              borderRadius: "10px",
                            }}
                            onClick={() => openModal(file)}
                          >
                            <source src={file.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )
                    )}
                  </>
                )}
              </div>
  
             <div className="" style={{ display: "flex",flexDirection:"column", gap: "10px",marginTop:"30px" }}>
             <p style={{ color: "red" }}>gold color: {product.gold_color}</p>
              <p style={{ color: "red" }}>code: {product.sku}</p>
              <p style={{ color: "red" }}>gold assay: {product.gold_assay}</p>
              <p style={{ color: "red" }}>
                stone characteristics: {product.stone_characteristics}
              </p>
              <p style={{ color: "red" }}>weight: {product.weight}g</p>
              <p style={{ color: "red" }}>certificate №: {product.certificate}</p>
             </div>
           </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
