import axios from "axios";
import { API_BASE_URL } from "../../config";

const API_URL = `${API_BASE_URL}/gameinfo`;
const FIXED_GAME_ID ="e211d6c5-0a0e-4ab3-bb23-4643935d85e7"; //固定のゲームID

export const getGameinfo = async (): Promise<{ name?: string; status?: string; players?: number } | null> =>{
	return axios
		.get<{ name?:string; status?: string; players?: number}>(`${API_URL}/${FIXED_GAME_ID}`)
		.then ((response) => response.data)
		.catch((error) => {
			console.error("ゲーム情報の取得に失敗しました:", error);
			return null;
		});
};

