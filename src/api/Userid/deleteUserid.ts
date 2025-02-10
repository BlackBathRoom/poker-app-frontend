import axios from "axios";
import { API_BASE_URL } from "../../config";

export const deleteUserid = async (): Promise<boolean> => {
	try{
		await axios.delete(API_BASE_URL);
		return true;
	}
	catch (error) {
		console.error("ユーザーIDの削除に失敗しました:", error);
		return false;
	}

};

