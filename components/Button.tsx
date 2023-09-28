import React, { FC, ChangeEvent } from "react";


type ButtonProp = {
  text: string;
  actionFunc: () => void;
};

const Button: FC<ButtonProp> = ({ text, actionFunc }) => {
  return (
    <a
      className="waves-effect waves-light btn"
      style={{ marginTop: "5px", marginBottom: "10px" }}
      onClick={actionFunc}
    >
      {text}
    </a>
  );
};

export default Button;
