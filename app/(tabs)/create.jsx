import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.container}></ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
	},
});

export default Create;
