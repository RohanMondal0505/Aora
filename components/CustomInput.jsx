import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { verticalScale as rh } from "react-native-size-matters";
import { colors, icons } from "../constants";

const CustomInput = ({ label, placeholder, value, onChange, keyboardType, otherStyle }) => {
	const [showPassword, setShowPassword] = useState(true);
	const [borderColor, setBorderColor] = useState(colors.secondary.shad3);

	return (
		<View style={[styles.mainWrapper, { ...otherStyle }]}>
			<Text style={styles.label}>{label}</Text>
			<View style={[styles.inputWrapper, { borderColor: borderColor }]}>
				<TextInput
					placeholder={placeholder}
					placeholderTextColor={colors.gray.shad2}
					value={value}
					onChangeText={onChange}
					keyboardType={keyboardType}
					secureTextEntry={label === "Password" && showPassword}
					onFocus={() => setBorderColor(colors.primary.shad3)}
					onBlur={() => setBorderColor(colors.secondary.shad3)}
					style={styles.input}
				/>
				{label === "Password" && (
					<TouchableOpacity style={styles.eyeWrapper} onPress={() => setShowPassword(!showPassword)}>
						<Image source={showPassword ? icons.eyeHide : icons.eye} resizeMode="contain" style={styles.eye} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainWrapper: { width: "100%", flexDirection: "column", gap: rh(5.69) },
	label: {
		fontSize: rh(11.38),
		color: colors.gray.shad1,
		fontWeight: "500",
	},
	inputWrapper: {
		width: "100%",
		height: rh(41.2),
		backgroundColor: colors.secondary.shad3,
		borderRadius: rh(5.69),
		paddingLeft: rh(11.38),
		paddingRight: rh(11.38),
		paddingTop: rh(5),
		paddingBottom: rh(5),
		borderWidth: rh(1),
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: rh(10),
	},
	input: {
		height: "100%",
		flex: 1,
		fontSize: rh(11.38),
		color: colors.white,
		fontWeight: "600",
	},
	eyeWrapper: { width: rh(15), height: rh(15) },
	eye: { width: "100%", height: "100%" },
});

export default CustomInput;
