import axios from "axios";

const API_URL = "/user";

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
