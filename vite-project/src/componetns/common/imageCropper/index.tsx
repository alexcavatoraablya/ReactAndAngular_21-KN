import {useRef} from "react";
import {Modal} from "antd";
//import {Cropper} from "react-cropper";
import Cropper from "cropperjs";

interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    image: string,
    onCrop: (image: string) => void,
}

const imageCropper = ({ isOpen, setIsOpen, image, onCrop } : Props) => {
    //useRef - react хук що створює посилання на обєкт DOM
    // в нашому випадку робимо посилання на Cropper
    const cropperRef = useRef<Cropper | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const initCropper = () => {
        //перевіряємо чи є посилання на image перед оновленням Cropper
        if (!imgRef.current) return;
        //знищує старий Cropper
        cropperRef.current?.destroy();
        //ініціалізує новий Cropper
        cropperRef.current = new Cropper(imgRef.current, {
            //aspectRatio - співвідношення сторін
            aspectRatio: 1,
            //viewMode - режим перегляду
            viewMode: 1,
        });
    }

    const handleCrop = () => {
        // перевіряємо чи існує вказівник на Cropper
        if (cropperRef.current) {
            //дістаємо Cropper через посилання
            const cropper = cropperRef.current;
            //отримуємо обрізане фото
            const base64 = cropper.getCroppedCanvas().toDataURL();
            // викликаємо callback функцію передаємо обрізане зображення
            onCrop(base64);
            // закриваємо модальне вікно
            setIsOpen(false);
        }
    }

    return (
        // Modal - компонент модального вікна з Ant Design
        <Modal
            title={"Обрізати фото"}
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            onOk={handleCrop}
            okText={"Застосувати"}
            cancelText={"Скасувати"}
        >
            {/*перевіряємо наявність image перед рендером Cropper*/}
            {image && image.length && (
                <img src={image} alt={"image"} ref={imgRef} onLoad={initCropper} className={"w-full h-full object-cover"} />

            )
                // <Cropper
                //     // передаємо зображення
                //     src={image}
                //     style={{ height: 400, width: "100%" }}
                //     // співвідношення сторін, 0 - вільне, 1 - квадрат
                //     aspectRatio={0}
                //     // режим виду, 1 - забороняє виходити за межі зображення
                //     viewMode={1}
                //     //описуємо компонент в посилання
                //     ref={cropperRef}
                // />

            }
            <button onClick={()=> {cropperRef.current?.rotate(90); }}> Повернути </button>
        </Modal>
    )
}

export default imageCropper;