import axios from "axios";
import { API_BASE_URL } from "../../config";

const API_URL = `${API_BASE_URL}/users`;

export const putUserid = async (
	userId: string,
	// UserInfo型をOptionalにして受け取るように
	userData: Partial<{name: string; chip:number}>
): Promise<boolean> => {
	// エラーハンドリングはtry-catchでじゃなくて.then、.catchの方がいいかも
	try{
		await axios.put(`${API_URL}/${userId}`, userData);
		return true;
	}
	catch (error) {
		console.error("ユーザー情報の更新に失敗しました:", error);
		return false;
	}
};

