import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	// const [fontsLoaded, error] = useFonts({
	// 	"Poppins-Black": require("../assets/fonts/Poppins-Bold.ttf"),
	// 	"Poppins-Black": require("../assets/fonts/Poppins-ExtraBold.ttf"),
  // });
  
  // useEffect(() => {
	// 	if (error) {
	// 		console.error("Font loading error:", error);
	// 	}
	// 	if (fontsLoaded) {
	// 		SplashScreen.hideAsync().catch((err) => console.error("Error hiding splash screen:", err));
	// 	}
  // }, [fontsLoaded, error]);


	// // console.log(require("../assets/fonts/Poppins-Black.ttf"));
	// // console.log(import("../assets/fonts/Poppins-Black.ttf"));
	// // console.log(require("../assets/images"));
	// useEffect(() => {
	// 	console.log("error=> ",error);
	// 	if (error) throw error;
	// 	if (fontsLoaded) SplashScreen.hideAsync();
	// }, [fontsLoaded, error]);

	// if (!fontsLoaded && !error) return null;

	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
};

export default RootLayout;
