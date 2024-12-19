import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { verticalScale as rh } from "react-native-size-matters";
import { colors, images } from "../constants";
import CustomButton from "./CustomButton";

const EmptyState = ({ title, subTitle, buttonText }) => {
	return (
		<View style={styles.container}>
			<Image source={images.empty} resizeMode="contain" style={styles.img} />
			<Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subTitle}</Text>
			{buttonText && <CustomButton title={buttonText} handelPress={() => {}} containerStyle={{ width: "100%" }} />}
		</View>
	);
};

export default EmptyState;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		fontSize: rh(12),
        color: colors.gray.shad1,
        paddingHorizontal: rh(25),
	},
	img: { width: rh(192), height: rh(153.64) },
	title: {
		fontSize: rh(9.95),
		color: colors.gray.shad1,
		fontWeight: "500",
		marginBottom: rh(5.69),
		marginTop: rh(-15),
	},
	subtitle: {
        fontSize: rh(14.22),
		color: colors.white,
		fontWeight: "600",
		latterSpacing: rh(-0.7113),
        marginBottom: rh(17),
	},
});
