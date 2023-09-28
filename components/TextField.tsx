"use client";
import { FC } from "react";

type TextFieldProp = {
  typeValue: string;
  name: string;
  handle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addPhotoWithSignature?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueInp: string;
};

const TextField: FC<TextFieldProp> = ({
  typeValue,
  name,
  handle,
  valueInp,
  addPhotoWithSignature
}) => {
  return (
    <>
      <input
        id="first_name"
        type={typeValue}
        name={name}
        className="validate"
        onChange={handle ? (e) => handle(e) : (e) => addPhotoWithSignature?.(e)}
        value={valueInp}
      />
    </>
  );
};

export default TextField;
