import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef(null);
  const focusinput = () => {
    inputRef.current.focus();
  };
  //eg2
  const [sec, setSec] = useState(0);
  const interRef = useRef();

  useEffect(() => {
    interRef.current = setInterval(() => {
      setSec((perv) => perv + 1);
    }, 1000);
    return () => clearInterval(interRef.current);
  }, []);
  //eg3
  const [newImage, setImage] = useState(true);
  const [imageURL, setImageURL] = useState("");
  const imgRef = useRef(0);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setImage(false);
    }
  };
  //   console.log(imageURL);

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input type="text" placeholder="Enter a name" ref={inputRef} />
        <button onClick={focusinput}>Focus</button>
      </nav>
      {/* eg2 */}
      <nav>
        <h3>Timer:{sec}</h3>
        <button onClick={() => clearInterval(interRef.current)}>stop</button>
      </nav>
      {/* eg3 */}
      <nav>
        <input
          type="file"
          ref={imgRef}
          accept="image/*"
          onClick={handleImage}
          hidden
        />
        {newImage ? (
          <div
            className="image-container"
            onClick={() => {
              imgRef.current.click();
            }}
          >
            Upload image
          </div>
        ) : (
          <img className="image" src={imageURL} alt="" />
        )}
      </nav>
    </div>
  );
}
