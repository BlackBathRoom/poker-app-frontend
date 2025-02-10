import axios from "axios";

const API_URL = "users";

export const deleteUserid = async (): Promise<boolean> => {
	try{
		await axios.delete(API_URL);
		return true;
	}
	catch (error) {
		console.error("ユーザーIDの削除に失敗しました:", error);
		return false;
	}

};

