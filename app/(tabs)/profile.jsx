import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slice/themeSlice";

const Profile = () => {
	const dispatch = useDispatch();
	const { colors } = useSelector((state) => state.theme);
	const styles = useDynamicStyles(colors);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ fontFamily: "Playwrite-Regular" }}>Profile</Text>
			<Text style={{ fontFamily: "Poppins-Bold" }}>Profile</Text>
			<Text>Profile</Text>
			<Ionicons name="checkmark-circle" size={32} color="red" />
			<TouchableOpacity onPress={() => {dispatch(toggleTheme());}} style={styles.button}>
				<MaterialIcons name="delete" size={24} color="#f00" />
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const useDynamicStyles = (colors) =>
	StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: colors.primary.shad1,
		},
		button: {
			marginTop: 20,
			padding: 10,
			backgroundColor: colors.secondary.shad1,
			borderRadius: 5,
			alignItems: "center",
		},
		text: {
			color: colors.white,
		},
	});

export default Profile;
