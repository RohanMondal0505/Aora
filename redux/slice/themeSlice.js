import { createSlice } from "@reduxjs/toolkit";
import { darkColor, lightColor } from "../../constants";
import { getKey, storeKey } from "../../util/localStorage";

const initialState = {
	colorScheme: getKey("colorScheme") || "dark",
	colors: getKey("theme") || darkColor,
};

const theme = createSlice({
	name: "theme",
	initialState,
	reducers: {
        toggleTheme: (state) => {
            console.log("first")
			if (state.colorScheme === "dark") {
				state.colorScheme = "light";
				storeKey("colorScheme", "light");
				state.colors = lightColor;
				storeKey("theme", lightColor);
			} else {
				state.colorScheme = "dark";
				storeKey("colorScheme", "dark");
				state.colors = darkColor;
				storeKey("theme", darkColor);
			}
		},
	},
});

export const { toggleTheme } = theme.actions;

export default theme.reducer;
