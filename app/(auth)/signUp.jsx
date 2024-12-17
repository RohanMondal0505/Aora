import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale as rh } from "react-native-size-matters";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { colors, images } from "../../constants";

const SignUp = () => {
	const [from, setFrom] = useState({ name: "", email: "", password: "" });
	const [isLoading, setIsLoading] = useState(false);

	const handelSubmit = () => {
		if(!from.name || !from.email || !from.password) return Alert.alert("Please fill all fields");
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			router.replace("/home");
		}, 2000);
	};

	return (
		<SafeAreaView style={{ height: "100%", backgroundColor: colors.secondary.shad1 }}>
			<ScrollView contentContainerStyle={{ height: "100%", justifyContent: "center" }}>
				<View
					style={{
						width: "100%",
						height: "100vh",
						flexDirection: "column",
						paddingLeft: rh(17),
						paddingRight: rh(17),
						paddingBottom: rh(24),
					}}>
					<Image
						source={images.logo}
						resizeMode="contain"
						style={{ height: rh(29), width: rh(85), marginBottom: rh(25) }}
					/>
					<Text style={{ fontSize: rh(15.6), color: colors.white, fontWeight: "600", marginBottom: rh(22.76) }}>
						Sign up
					</Text>

					<View
						style={{
							width: "100%",
							flexDirection: "column",
							gap: rh(15.6),
						}}>
						<CustomInput
							label={"Name"}
							placeholder="Your name"
							value={from.name}
							onChange={(e) => setFrom({ ...from, name: e })}
							otherStyle={{}}
						/>
						<CustomInput
							label={"Email"}
							placeholder="Your email"
							value={from.email}
							onChange={(e) => setFrom({ ...from, email: e })}
							keyboardType="email-address"
							otherStyle={{}}
						/>
						<CustomInput
							label={"Password"}
							placeholder="Your password"
							value={from.password}
							onChange={(e) => setFrom({ ...from, password: e })}
							otherStyle={{}}
						/>
					</View>

					<CustomButton
						title="Sign Up"
						handelPress={handelSubmit}
						containerStyle={{ marginTop: rh(14.23), marginBottom: rh(14.23), width: "100%" }}
						isLoading={isLoading}
					/>

					<View style={{ flexDirection: "row", justifyContent: "center" }}>
						<Text style={{ fontSize: rh(9.95), color: colors.gray.shad1, fontWeight: "400" }}>
							Already have an account?{" "}
							<Link style={{ color: colors.primary.shad1 }} dismissTo="/signUp" href="/signIn">
								Sign in
							</Link>
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
