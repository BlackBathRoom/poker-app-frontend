import axios from "axios";
import { API_BASE_URL } from "../../config";

const API_URL = `${API_BASE_URL}/users`;

export const putUseridproperty = async (
	userId: string,
	userData: Partial<{name: string; chip: number }>
): Promise<boolean> => {
	return axios
		.patch(`${API_URL}/${userId}`, userData)
		.then (() => true)
		.catch((error) => {
			console.error("ユーザーのプロパティの更新に失敗しました:", error);
			return false;
		});
};

