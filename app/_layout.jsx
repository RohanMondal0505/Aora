import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { colors, fonts } from "../constants";
import store from "../redux/store";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [fontsLoaded, error] = useFonts(fonts);
	// console.log(getLoadedFonts().length);

	useEffect(() => {
		if (fontsLoaded || error) SplashScreen.hideAsync();
	}, [fontsLoaded, error]);

	if (!fontsLoaded && !error) return null;

	return (
		<Provider store={store}>
			<StatusBar style="light" backgroundColor={colors.secondary.shad1} />
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false, presentation: "modal" }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="search/[query]" options={{ headerShown: false }} />
			</Stack>
		</Provider>
	);
};

export default RootLayout;
