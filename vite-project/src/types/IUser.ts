import type {RcFile} from "antd/es/upload";
import type {UploadFile} from "antd/lib";

export interface IUser {
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    image: RcFile | null | Array<UploadFile>;
    phone: string;
    password: string;
}