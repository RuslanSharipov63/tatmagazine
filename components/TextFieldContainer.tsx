"use client";
import React, { ChangeEvent } from "react";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";
import TextField from "@/components/TextField";
import TextFieldUploadPhoto from "./TextFieldUploadPhoto";
import Labeltext from "./LabelText";
import MessageField from "./MessageField";
import { handleChangeAction } from "@/store/AdminOnChangeInput";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import styles from "./../styles/TextFieldContainer.module.css";

type SelectedFileType = {
  photo1: {
    photo1: Blob | null;
    signature1: string;
    namePhoto: string;
  };
  photo2: {
    photo2: Blob | null;
    signature2: string;
    namePhoto: string;
  };
  photo3: {
    photo3: Blob | null;
    signature3: string;
    namePhoto: string;
  };
  photo4: {
    photo4: Blob | null;
    signature4: string;
    namePhoto: string;
  };
};

const TextFieldContainer = () => {
  const valueInp = useAppSelector((state) => state.admininput);
  const dispatch = useAppDispatch();
  const [signaturePhoto, setSignaturePhoto] = useState<SelectedFileType>({
    photo1: {
      photo1: null,
      signature1: "",
      namePhoto: "",
    },
    photo2: {
      photo2: null,
      signature2: "",
      namePhoto: "",
    },
    photo3: {
      photo3: null,
      signature3: "",
      namePhoto: "",
    },
    photo4: {
      photo4: null,
      signature4: "",
      namePhoto: "",
    },
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preView, setPreView] = useState("");

  const handleChange = (e: any) => {
    setSelectedFile(e.target.files[0]),
      setPreView(URL.createObjectURL(e.target.files[0]));
  };

  const handle = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let item = e.target.name;
    let value = e.target.value;
    dispatch(handleChangeAction({ item, value }));
  };

const addPhotoWithSignature = (e: React.ChangeEvent<HTMLInputElement>) => {
   setSignaturePhoto({...signaturePhoto, [e.target.name]: {
    [e.target.name]: e.target.files[0],
    
  }}) 
}

  const addPhoto = () => {};
  return (
    <div className={styles.containerAdmin}>
      <div className={styles.containerformstext}>
        <Labeltext text="номер журнала" />
        <TextField
          typeValue="text"
          name="magazineNumber"
          handle={handle}
          valueInp={valueInp.magazineNumber}
        />

        <Labeltext text="дата выхода" />
        <TextField
          typeValue="date"
          name="time"
          handle={handle}
          valueInp={valueInp.time}
        />

        <Labeltext text="главное фото" />
        <TextFieldUploadPhoto
          handleChange={handleChange}
          nameinpphoto="mainphoto"
        />
        {preView != "" ? (
          <Image
            src={preView}
            width={100}
            height={100}
            alt="картинка"
            style={{ objectFit: "cover" }}
          />
        ) : null}
        <Labeltext text="заголовок" />
        <TextField
          typeValue="text"
          name="header"
          handle={handle}
          valueInp={valueInp.header}
        />

        <Labeltext text="описание" />
        <TextField
          typeValue="text"
          name="description"
          handle={handle}
          valueInp={valueInp.description}
        />

        <Labeltext text="автор" />
        <TextField
          typeValue="text"
          name="author"
          handle={handle}
          valueInp={valueInp.author}
        />

        <Labeltext text="текст" />
        <MessageField
          name="message"
          handle={handle}
          valueInp={valueInp.message}
        />
      </div>
      <div className={styles.containerformphoto}>
        <h6>вы можете добавить до 4 фото</h6>
        <Button text="добавить" actionFunc={addPhoto} />
        <Labeltext text="фото 1" />
        <TextFieldUploadPhoto
          handleChange={addPhotoWithSignature}
          nameinpphoto="photo1"
        />
        <Labeltext text="подпись" />
        <TextField
          typeValue="text"
          name="signature"
          handle={addPhotoWithSignature}
          valueInp={signaturePhoto.photo1.signature1}
        />

        <Labeltext text="фото 2" />
        <TextFieldUploadPhoto
          handleChange={addPhotoWithSignature}
          nameinpphoto="photo2"
        />
        <Labeltext text="подпись" />
        <TextField
          typeValue="text"
          name="signature2"
          handle={addPhotoWithSignature}
          valueInp={signaturePhoto.photo2.signature2}
        />

        <Labeltext text="фото 3" />
        <TextFieldUploadPhoto
          handleChange={addPhotoWithSignature}
          nameinpphoto="photo3"
        />
        <Labeltext text="подпись" />
        <TextField
          typeValue="text"
          name="signature3"
          handle={addPhotoWithSignature}
          valueInp={signaturePhoto.photo3.signature3}
        />

        <Labeltext text="фото 4" />
        <TextFieldUploadPhoto
          handleChange={addPhotoWithSignature}
          nameinpphoto="photo4"
        />
        <Labeltext text="подпись" />
        <TextField
          typeValue="text"
          name="signature4"
          handle={addPhotoWithSignature}
          valueInp={signaturePhoto.photo4.signature4}
        />
      </div>
    </div>
  );
};

export default TextFieldContainer;
