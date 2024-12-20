import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { colors } from "../constants";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
		"Playwrite-Regular": require("../assets/fonts/Playwrite-Regular.ttf"),
	});

	useEffect(() => {
		if (fontsLoaded || error) SplashScreen.hideAsync();
	}, [fontsLoaded, error]);
	console.log(error, fontsLoaded)

	if (!fontsLoaded && !error) return null;

	return (
		<>
			<StatusBar style="light" backgroundColor={colors.secondary.shad1} />
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false, presentation: "modal" }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="search/[query]" options={{ headerShown: false }} />
			</Stack>
		</>
	);
};

export default RootLayout;
