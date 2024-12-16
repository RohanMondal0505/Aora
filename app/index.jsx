import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale as rh } from "react-native-size-matters";
import CustomButton from "../components/CustomButton";
import { colors, images } from "../constants";

const index = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary.shad1 }}>
			<Redirect href="/signIn" />
			<StatusBar style="light" backgroundColor={colors.secondary.shad1} />

			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View
					style={{
						width: "100%",
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						padding: rh(17),
						paddingTop: rh(0),
						paddingBottom: rh(0),
					}}>
					<Image source={images.logo} resizeMode="contain" style={{ height: rh(24), marginBottom: rh(18) }} />

					<Image
						source={images.cards}
						resizeMode="contain"
						style={{ height: rh(211.9), width: "100%", marginBottom: rh(8.5) }}
					/>

					<View
						style={{
							width: "100%",
							paddingLeft: rh(30),
							paddingRight: rh(30),
							marginBottom: rh(21.35),
						}}>
						<Text
							style={{
								color: colors.white,
								fontSize: rh(22),
								fontWeight: "600",
								letterSpacing: -rh(0.7113),
								textAlign: "center",
								marginBottom: rh(15),
							}}>
							Discover Endless Possibilities with <Text style={{ color: colors.primary.shad1 }}>Aora</Text>
						</Text>

						<Text
							style={{
								color: colors.white,
								fontSize: rh(10),
								fontWeight: "400",
								textAlign: "center",
							}}>
							Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
						</Text>
					</View>

					<CustomButton
						title="Continue with Email"
						handelPress={() => router.push("/signIn")}
						containerStyle={{ width: "100%" }}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default index;
