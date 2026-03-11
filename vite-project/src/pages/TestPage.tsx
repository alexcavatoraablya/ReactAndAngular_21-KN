import images from '../assets/images.webp'; // Relative path to the image file
import React, {useEffect, useRef} from "react";
// import 'cropperjs/dist/cropper.js';
// import Cropper, { ReactCropperElement } from "react-cropper";
import Cropper from "cropperjs";
import {Button} from "antd";
import type {ICreateCar} from "../types/ICreateCar.ts";

const TestPage = () => {
    //Посилання на фото, яке буде працювати у Cropper
    const imgRef = useRef<HTMLImageElement | null>(null);
    const cropperRef = useRef<Cropper | null>(null);

    useEffect(() => {
        // const Cropper = window.Cropper;
        if (imgRef.current) {
            cropperRef.current = new Cropper(imgRef.current, {
                aspectRatio: 1,
                viewMode: 1
            });
        }

        return () => {
            cropperRef.current?.destroy();
        };
    },[]);

    // const cropperRef = useRef<ReactCropperElement>(null);
    // const onCrop = () => {
    //     const cropper = cropperRef.current?.cropper;
    //     console.log(cropper.getCroppedCanvas().toDataURL());
    // };

    return (
        <div>
            <img src={images}
                 alt="Фото для редагування опосума"
                 ref={imgRef}
            />

            <Button type={"primary"} htmlType={"submit"}>
                Crop
            </Button>
        </div>

    )
}

export default TestPage;