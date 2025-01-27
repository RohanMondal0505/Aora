import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

export const storeKey = (key, jsonObject) => {
	storage.set(key, JSON.stringify(jsonObject));
};


export const getKey = (key) => {
	const jsonValue = storage.getString(key);
	return jsonValue ? JSON.parse(jsonValue) : null;
};
