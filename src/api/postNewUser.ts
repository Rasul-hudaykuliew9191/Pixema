import axios from "axios";
import { urls } from "./url";

interface IRegistrationFormData {
    username: string;
    email: string;
    password: string;
}

export const postNewUser = async (formData: IRegistrationFormData) => {
    await axios.post(urls.AUTH_USERS, formData);
}
