import axios from "axios";
import { API_BASE_URL } from "../config";

const API_URL = `${API_BASE_URL}/users`;

export const postUserId = async (userId: string): Promise<boolean> => {
	try {
		await axios.post(API_URL, { id: userId });
		return true;
		}
	catch (error) {
		console.error("ユーザーIDの保存に失敗しました:", error);
		return false;
		}
};
