import React, { useState } from "react";
import axios from "axios";

const UploadFiles = () => {
  const [files, setFiles] = useState([]);

  const packFiles = (files) => {
    const data = new FormData();
    [...files].forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });
    return data;
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (files.length > 0) {
      const data = packFiles(files);
      //   const res = await axios.post("http://httpbin.org/post", data);
      //   console.log(res);
    }
    // packFiles(files);
    // console.log(data);
  };

  const displayImages = () => {
    const imageElements = [];
    [...files].forEach((image, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageElement = document.createElement("img");
        imageElement.src = e.target.result;
        imageElements.push(imageElement);
        if (imageElements.length === files.length) {
          // All images have been loaded, now add them to the DOM
          const gallery = document.querySelector(".gallery");
          imageElements.forEach((img) => {
            gallery.appendChild(img);
          });
        }
      };
      reader.readAsDataURL(image);
    });
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input
          name="images"
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="gallery">
        {[...files]?.map((file, index) => (
          <div key={index} className="image-grid">
            {displayImages()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadFiles;
