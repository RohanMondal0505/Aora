import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { verticalScale as rh } from "react-native-size-matters";
import { colors } from "../constants";

const CustomButton = ({ title, handelPress, containerStyle, textStyle, isLoading }) => {
	return (
        <TouchableOpacity
            onPress={handelPress}
            activeOpacity={0.7}
            disabled={isLoading}
			style={{
				height: rh(41.2),
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: colors.primary.shad1,
				borderRadius: rh(5.69),
                ...containerStyle,
                opacity: isLoading ? 0.5 : 1
			}}>
			<Text style={{ color: colors.secondary.shad1, fontSize: rh(11.4), fontWeight: "600", ...textStyle }}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
