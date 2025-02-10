import axios from "axios";
import { API_BASE_URL } from "../../config";
import { GameStatus } from "../../game/types";

const API_URL = `${API_BASE_URL}/gameinfo`;

export const putGameinfoproperty = async (
	gameId: string,
	property: keyof GameStatus,
	value: number
): Promise<boolean> => {
	return axios
		.put(`${API_URL}/${gameId}/${property}`,{ [property]: value })
		.then(() => true)
		.catch((error) => {
			console.error("ゲーム情報の更新に失敗しました (${property}=${value}):", error);
			return false;
		});
};

