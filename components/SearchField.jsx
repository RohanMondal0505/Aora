import { router, usePathname } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { verticalScale as rh } from "react-native-size-matters";
import { colors, icons } from "../constants";

const SearchField = ({ placeholder, value, otherStyle }) => {
	const pathName = usePathname();
	const [query, setQuery] = useState(value?value:"");
	const [borderColor, setBorderColor] = useState(colors.secondary.shad3);

	const handleSearch = () => {
		if (!query) return Alert.alert("Please enter a search term");
		if (pathName.startsWith("/search")) router.setParams({ query });
		else router.push(`/search/${query}`);
	};

	return (
		<View style={[styles.inputWrapper, { borderColor: borderColor }, otherStyle]}>
			<TextInput
				placeholder={placeholder}
				placeholderTextColor={colors.gray.shad1}
				value={query}
				onChangeText={(value) => setQuery(value)}
				onSubmitEditing={handleSearch}
				onFocus={() => setBorderColor(colors.primary.shad3)}
				onBlur={() => setBorderColor(colors.secondary.shad3)}
				style={styles.input}
			/>

			<TouchableOpacity activeOpacity={0.7} style={styles.searchWrapper} onPress={handleSearch}>
				<Image source={icons.search} resizeMode="contain" style={styles.search} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	inputWrapper: {
		width: "100%",
		height: rh(41.2),
		backgroundColor: colors.secondary.shad3,
		borderRadius: rh(5.69),
		paddingHorizontal: rh(11.38),
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
	searchWrapper: { width: rh(14.2), height: rh(14.2) },
	search: { width: "100%", height: "100%" },
});

export default SearchField;
