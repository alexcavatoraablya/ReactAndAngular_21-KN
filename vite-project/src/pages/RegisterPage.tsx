import {Button, Form, Input} from "antd";
import type {IRegisterForm} from "../types/IRegisterForm.ts";
import {UserOutlined} from "@ant-design/icons";
import React from "react";
import Dragger from "antd/es/upload/Dragger";
import type {RcFile} from "antd/es/upload";

const RegisterPage = () =>
{
    const [form] = Form.useForm<IRegisterForm>();

    const [myFileUpload, setMyFileUpload] = useState<RcFile|inderfined>(underfined);

    //коли будемо натискати кнопку реєстрація
    const onSubmitHandler = (values: IRegisterForm) => {
        console.log("Submit Result", values);
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*<img*/}
                    {/*    alt="Your Company"*/}
                    {/*    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"*/}
                    {/*    className="mx-auto h-10 w-auto"*/}
                    {/*/>*/}
                    <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Реєстрація
                    </h2>
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Form form = {form}
                          onFinish={onSubmitHandler}
                          layout="vertical"
                    >
                        <Form.Item<IRegisterForm>
                            label={"Прізвище"}
                            name={"lastName"}
                            rules={[{required: true, message: "Вкажіть прізвище"}]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<IRegisterForm>
                            label={"Ім'я"}
                            name={"firstName"}
                            rules={[{required: true, message: "Вкажіть ім'я"}]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<IRegisterForm>
                            label={"Побатькові"}
                            name={"middleName"}
                            rules={[{required: true, message: "Вкажіть побатькові"}]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<IRegisterForm>
                            label={"Електронна пошта"}
                            name={"email"}
                            rules={[{required: true, message: "Вкажіть електронну пошту"}]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<IRegisterForm>
                            label={"Телефон"}
                            name={"phone"}
                            rules={[{required: true, message: "Вкажіть телефон"}]}
                        >
                            <Input />
                        </Form.Item>

                        <Dragger name={'file'}
                                 multiple={false}
                                 beforeUpload = { (file) => {
                                     console.log('Selected file:', file);
                                     return false;
                                 }}
                                 onChange = {(info) => {
                                     console.log("info", info);
                                     setMyFileUpload(info.file.originFileObj);
                                 }}
                        >
                            <p className="ant-upload-drag-icon">
                                { myFileUpload != underfined ?
                                    <img src={URL.createObjectURL(myFileUpload)}
                                         width="150px" alt=""/>
                                        :
                                        <UserOutlined />
                                }
                            </p>
                            <p className="ant-upload-text">
                                Натисніть або перетягніть файл у цю область, щоб завантажити
                            </p>
                            <p className="ant-upload-hint">
                                Оберіть один файл для вашого фото
                            </p>
                        </Dragger>

                        <div className={"pt-4 flex justify-center"}>
                            <Form.Item label = {null}>
                                <Button type={"primary"} htmlType={"submit"}>
                                    Реєструватися
                                </Button>
                            </Form.Item>
                        </div>

                        <Form.Item<IRegisterForm>
                            label={"Пароль"}
                            name={"password"}
                            rules={[{required: true, message: "Вкажіть пароль"}]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<IRegisterForm>
                            label={"Підтвердження пароля"}
                            name={"confirmPassword"}
                            rules={[{required: true, message: "Підтвердіть пароль"}]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                Реєструватися
                            </Button>
                        </Form.Item>

                    </Form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;