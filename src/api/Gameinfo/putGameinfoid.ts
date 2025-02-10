import axios from "axios";
import { API_BASE_URL } from "../../config";

const API_URL = `${API_BASE_URL}/gameinfo`;

export const putGameinfoid = async (
	gameId: string,
	gameData: Partial<{ name: string; status: string; players: number }>
):Promise<boolean> => {
	return axios
	.put(`${API_URL}/${gameId}`, gameData)
	.then(() => true)
	.catch((error) => {
		console.error("ゲーム情報の更新に失敗しました:", error);
		return false;
	});
};

