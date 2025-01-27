import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const Create = () => {
	const { colors } = useSelector((state) => state.theme);
	const styles = useDynamicStyles(colors);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.container}></ScrollView>
		</SafeAreaView>
	);
};

const useDynamicStyles = (colors) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: colors.secondary.shad1,
		},
	});

export default Create;
