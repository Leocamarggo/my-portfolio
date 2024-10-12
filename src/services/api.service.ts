import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-send-email-x8w4.onrender.com/"
});

