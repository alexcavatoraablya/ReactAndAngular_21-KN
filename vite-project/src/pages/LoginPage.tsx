import {Button, Form, Input, Upload} from "antd";
import type {ILoginForm} from "../types/ILoginForm.ts";
const LoginPage = () =>
{
    const [form] = Form.useForm<ILoginForm>();

    //коли будемо натискати кнопку реєстрація
    const onSubmitHandler = (values: ILoginForm) => {
        console.log("Submit Result", values);
    }
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Вхід на сайт
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Form form={form}
                          onFinish={onSubmitHandler}
                          layout="vertical" />

                            <Form.Item<ILoginForm>
                                label={"Електронна пошта"}
                                name={"email"}
                                rules={[{required: true, message: "Вкажіть електронну пошту"}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item<ILoginForm>
                                label={"Пароль"}
                                name={"password"}
                                rules={[{required: true, message: "Вкажіть пароль"}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit">
                                    Вхід
                                </Button>
                            </Form.Item>


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

export default LoginPage;