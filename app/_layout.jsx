import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { colors } from "../constants";

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	// const [fontsLoaded, error] = useFonts({
	// 	"Poppins-Black": require("../assets/fonts/Poppins-Regular.ttf"),
	// });

	// useEffect(() => {
	// 	console.log("error=> ", error);
	// 	if (error) throw error;
	// 	if (fontsLoaded) SplashScreen.hideAsync();
	// }, [fontsLoaded, error]);

	// if (!fontsLoaded && !error) return null;

	return (
		<>
			<StatusBar style="light" backgroundColor={colors.secondary.shad1} />
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false, presentation: "modal" }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</>
	);
};

export default RootLayout;
