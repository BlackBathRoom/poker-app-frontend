import axios from "axios";
import { API_BASE_URL } from "../../config";

const API_URL = `${API_BASE_URL}/gameinfo`;

export const deleteGamainfoid = async (gameId: string): Promise<boolean> => {
	return axios
		.delete(`${API_URL}/${gameId}`)
		.then(() => true)
		.catch((error) => {
			console.error("ゲーム情報の削除に失敗しました:", error);
			return false;
		});
};

