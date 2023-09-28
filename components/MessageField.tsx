"use client";
import { FC } from "react";

type TextareaProp = {
  name: string;
  handle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  valueInp?: string;
};

const MessageField: FC<TextareaProp> = ({ name, handle, valueInp }) => {
  return (
    <>
      <textarea
        id="textarea1"
        className="materialize-textarea"
        name={name}
        onChange={(e) => handle(e)}
        value={valueInp}
        style={{ height: "245px" }}
      ></textarea>
    </>
  );
};

export default MessageField;
