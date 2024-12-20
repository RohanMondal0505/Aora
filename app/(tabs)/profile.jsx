import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Profile = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ fontFamily: "Playwrite-Regular" }}>Profile</Text>
			<Text style={{ fontFamily: "Poppins-Bold" }}>Profile</Text>
			<Text>Profile</Text>
			<Ionicons name="checkmark-circle" size={32} color="green" />
			<MaterialIcons name="delete" size={24} color="#fff" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Profile;
