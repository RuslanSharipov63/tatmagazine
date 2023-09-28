import { ChangeEvent, FC } from "react";
import React from "react";

type TextFieldUploadPhotoProp = {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  nameinpphoto: string;
  addPhotoWithSignature?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextFieldUploadPhoto: FC<TextFieldUploadPhotoProp> = ({
  handleChange,
  nameinpphoto,
  addPhotoWithSignature,
}) => {
  return (
    <div className="file-field input-field">
      <div className="btn">
        <span>File</span>
        <input
          type="file"
          onChange={
            handleChange
              ? (e) => handleChange(e)
              : (e) => addPhotoWithSignature?.(e)
          }
          name={nameinpphoto}
        />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
  );
};

export default TextFieldUploadPhoto;
