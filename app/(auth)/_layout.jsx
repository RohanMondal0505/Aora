import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="signIn" options={{ headerShown: false, presentation: "modal" }} />
			<Stack.Screen name="signUp" options={{ headerShown: false, presentation: "modal" }} />
		</Stack>
	);
};

export default AuthLayout;
