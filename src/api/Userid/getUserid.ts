import axios , { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE_URL } from "../../config";

type UserIdResponse = {
	userId: string;
};

export const fetchUserId = async () : Promise<string> => {
	const url = '&{API_BASE_URL}/users/me':
	const options : AxiosRequestConfig = {
		url ,
		method: "Get",
		withCredentials: true,
	};
