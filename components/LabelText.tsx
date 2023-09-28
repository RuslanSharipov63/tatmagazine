import { FC } from "react";

type LabeltextProp = {
  text: string;
};

const Labeltext: FC<LabeltextProp> = ({ text }) => {
  return <label htmlFor="first_name">{text}</label>;
};

export default Labeltext;
