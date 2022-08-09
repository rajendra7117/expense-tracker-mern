import React, {useState, useRef, useEffect} from "react";
import './ImageUpload.scss'
const ImageUpload = ({ id, onInput }) => {

    const imageRef = useRef()
    const [file, setFile] = useState(null)
    const [isValid, setIsValid] = useState(false)
    const [imgUrl, setImgUrl] = useState()
  const changeHandler = (e) => {
    let file;
    let isFileValid;
    if(e.target.files && e.target.files.length===1){
        file = e.target.files[0]
        setFile(file)
        setIsValid(true)
        isFileValid = true
    }
    else{
        
        setIsValid(false)
        isFileValid = false
    }
    onInput(file, isFileValid, id)
 
  };

  const openImagePicker = e => {
    e.preventDefault()
    imageRef.current.click()
  }

  useEffect(()=>{
    if(!file){
        return
    }
    const fileReader = new FileReader()
    fileReader.onload = (() => {
        setImgUrl(fileReader.result)
    })
    fileReader.readAsDataURL(file)
  }, [file])
  return (
    <div className="image-upload">
      <div className="form-element">
      
        <input
          type="file"
          accept=".jpg,.png,.jpeg"
          id={id}
          ref={imageRef}
          onChange={changeHandler}
          style={{display:'none'}}
        />
      </div>

      <div className="image-picker">
        <div className="image">
            {(isValid && imgUrl) ? <img src={imgUrl}/> : <h4>Pick an image for profile</h4>}
        
        </div>
        <button onClick={openImagePicker}>Upload Image</button>
      </div>
    </div>
  );
};

export default ImageUpload;
