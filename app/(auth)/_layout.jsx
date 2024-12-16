import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { colors } from "../../constants";

const AuthLayout = () => {
	return (
		<>
			<StatusBar style="light" backgroundColor={colors .secondary.shad1} />

			<Stack>
				<Stack.Screen name="signIn" options={{ headerShown: false }} />
				<Stack.Screen name="signUp" options={{ headerShown: false }} />
			</Stack>
		</>
	);
};

export default AuthLayout;
