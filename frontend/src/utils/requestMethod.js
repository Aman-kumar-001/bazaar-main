
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjM4Y2E1Y2M5ZDE4YTljY2JhMjljYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDI1NDE5NCwiZXhwIjoxNjk0NTEzMzk0fQ.8xUftqOq_zKWyWdJH29PIuZ0WvMOqlPSj_SlLEguS_w"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});